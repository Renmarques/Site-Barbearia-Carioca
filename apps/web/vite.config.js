import react from '@vitejs/plugin-react';
import { sites } from '@openai/sites-vite-plugin';
import { defineConfig } from 'vite';
import { copyFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const sourceDirectory = fileURLToPath(new URL('./src', import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    sites(),
    {
      name: 'sites-static-worker',
      async writeBundle(options) {
        const outputDirectory = path.resolve(options.dir);
        const serverDirectory = path.join(outputDirectory, 'server');
        const metadataDirectory = path.join(outputDirectory, '.openai');
        await mkdir(serverDirectory, { recursive: true });
        await mkdir(metadataDirectory, { recursive: true });
        await copyFile(
          new URL('./.openai/hosting.json', import.meta.url),
          path.join(metadataDirectory, 'hosting.json'),
        );
        await writeFile(
          path.join(serverDirectory, 'index.js'),
          `export default {\n  async fetch(request, env) {\n    const response = await env.ASSETS.fetch(request);\n    if (response.status !== 404) return response;\n    const url = new URL(request.url);\n    url.pathname = '/';\n    return env.ASSETS.fetch(new Request(url, request));\n  }\n};\n`,
          'utf8',
        );
      },
    },
  ],
  server: {
    host: '::',
    port: 3000
  },
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts', '.json'],
    alias: {
      '@': sourceDirectory
    }
  }
});
