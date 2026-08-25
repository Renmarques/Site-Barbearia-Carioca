import React from 'react';
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Droplets,
  Instagram,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Scissors,
  Sparkles,
  Star,
  UserRound,
} from 'lucide-react';
import Seo from '@/components/Seo.jsx';

const UNITS = [
  {
    name: 'Ipanema',
    eyebrow: 'Zona Sul · Ipanema',
    address: 'Rua Visconde de Pirajá, 395 — Sobreloja',
    city: 'Ipanema, Rio de Janeiro — RJ',
    phones: ['(21) 2513-1336', '(21) 99405-0680'],
    whatsapp: 'https://wa.me/5521994050680?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20na%20unidade%20de%20Ipanema.',
    trinks: 'https://www.trinks.com/barbearia-carioca-ipanema',
    maps: 'https://www.google.com/maps/search/?api=1&query=Barbearia+Carioca+Ipanema+Rua+Visconde+de+Piraj%C3%A1+395',
    hours: ['Segunda a sábado · 9h às 21h', 'Domingo · 10h às 18h'],
    
  },
  {
    name: 'Leblon',
    eyebrow: 'Zona Sul · Leblon',
    address: 'Rua General Venâncio Flores, 300 — Loja B',
    city: 'Leblon, Rio de Janeiro — RJ',
    phones: ['(21) 2294-9183', '(21) 97692-1084'],
    whatsapp: 'https://wa.me/5521976921084?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20na%20unidade%20do%20Leblon.',
    trinks: 'https://www.trinks.com/barbearia-carioca',
    maps: 'https://www.google.com/maps/search/?api=1&query=Barbearia+Carioca+Leblon+Rua+General+Ven%C3%A2ncio+Flores+300',
    hours: ['Segunda a sexta · 9h às 21h', 'Sábado · 9h às 19h', 'Domingo · 10h às 17h'],
    
  },
];

const SERVICES = [
  { icon: Scissors, number: '01', title: 'Corte masculino', text: 'Clássico ou contemporâneo, construído para o seu rosto, rotina e estilo.' },
  { icon: Droplets, number: '02', title: 'Barba', text: 'Desenho, toalha quente e acabamento cuidadoso para valorizar cada linha.' },
  { icon: Sparkles, number: '03', title: 'Cabelo + barba', text: 'A experiência completa para renovar o visual com equilíbrio e precisão.' },
  { icon: UserRound, number: '04', title: 'Cuidados e acabamento', text: 'Pezinho, sobrancelha, camuflagem e detalhes que deixam tudo no lugar.' },
];

const FAQS = [
  ['Preciso agendar com antecedência?', 'Recomendamos o agendamento, principalmente no fim do dia e aos sábados. Pelo Trinks você escolhe unidade, serviço, profissional e o melhor horário disponível.'],
  ['A Barbearia Carioca atende crianças?', 'Sim. As duas unidades atendem adultos e crianças. Ao agendar, escolha o serviço adequado ou fale com a unidade pelo WhatsApp.'],
  ['Quais são as formas de pagamento?', 'As unidades aceitam dinheiro, PIX e as principais bandeiras de cartão. Outras formas podem aparecer no momento do agendamento.'],
  ['Vocês abrem aos domingos?', 'Sim. Ipanema funciona das 10h às 18h e Leblon das 10h às 17h aos domingos.'],
  ['Onde vejo os valores e horários disponíveis?', 'Os valores atualizados, a equipe e os horários livres ficam disponíveis diretamente no Trinks de cada unidade.'],
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(([question, answer]) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
};

function Brand() {
  return (
    <a className="brand" href="#inicio" aria-label="Barbearia Carioca — início">
      <img src="/images/barbearia/logo-original.png" alt="Barbearia Carioca" />
    </a>
  );
}

function UnitCard({ unit, index }) {
  return (
    <article className="unit-card">
      <div className="unit-number" aria-hidden="true">0{index + 1}</div>
      <p className="section-kicker">{unit.eyebrow}</p>
      <h3>{unit.name}</h3>
      <p className="unit-note">{unit.note}</p>
      <div className="unit-info">
        <div><MapPin size={18} /><p><strong>{unit.address}</strong><span>{unit.city}</span></p></div>
        <div><Clock3 size={18} /><p>{unit.hours.map((hour) => <span key={hour}>{hour}</span>)}</p></div>
        <div><Phone size={18} /><p>{unit.phones.map((phone) => <a key={phone} href={`tel:+55${phone.replace(/\D/g, '')}`}>{phone}</a>)}</p></div>
      </div>
      <div className="unit-actions">
        <a className="button button-primary" href={unit.trinks} target="_blank" rel="noreferrer">
          Agendar no Trinks <ArrowRight size={17} />
        </a>
        <a className="button button-ghost" href={unit.maps} target="_blank" rel="noreferrer">
          <Navigation size={16} /> Como chegar
        </a>
      </div>
      <a className="whatsapp-link" href={unit.whatsapp} target="_blank" rel="noreferrer">
        <MessageCircle size={17} /> Falar com {unit.name} no WhatsApp
      </a>
    </article>
  );
}

export default function HomePage() {
  return (
    <>
      <Seo
        title="Barbearia em Ipanema e Leblon"
        description="Barbearia Carioca: corte masculino, barba e cuidados de alto padrão em Ipanema e Leblon, Rio de Janeiro. Consulte horários e agende online pelo Trinks."
        image="/images/barbearia/og.png"
        structuredData={faqSchema}
      />

      <header className="site-header">
        <Brand />
        <nav aria-label="Navegação principal">
          <a href="#servicos">Serviços</a>
          <a href="#experiencia">A experiência</a>
          <a href="#unidades">Unidades</a>
          <a className="nav-cta" href="#unidades">Agendar</a>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero">
          <img className="hero-image" src="/images/barbearia/hero-barbearia-carioca-v2.png" alt="Interior real da Barbearia Carioca, com cadeiras clássicas e recepção em madeira" />
          <div className="hero-overlay" />
          <div className="hero-content page-shell">
            <p className="eyebrow">Ipanema & Leblon · Rio de Janeiro</p>
            <h1>O clássico carioca,<br /><em>no seu melhor estilo.</em></h1>
            <p className="hero-copy">Corte, barba e cuidado masculino com técnica, atenção e o tempo que você merece.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#unidades">
                <CalendarDays size={18} /> Escolher unidade <ArrowRight size={18} />
              </a>
              <a className="text-link" href="#servicos">Conhecer os serviços</a>
            </div>
          </div>
          <p className="hero-note">Tradição, estilo e excelência em cada detalhe.</p>
        </section>

        <section className="trust-bar" aria-label="Diferenciais">
          <div className="page-shell trust-grid">
            <span><Check size={16} /> Agendamento online</span>
            <span><Check size={16} /> Aberto aos domingos</span>
            <span><Check size={16} /> Atendimento em português e inglês</span>
            <span><Check size={16} /> Adultos e crianças</span>
          </div>
        </section>

        <section id="servicos" className="services section-light">
          <div className="page-shell">
            <div className="section-heading split-heading">
              <div>
                <p className="section-kicker">Serviços</p>
                <h2>Técnica no corte.<br /><em>Personalidade no resultado.</em></h2>
              </div>
              <p>Sem fórmulas prontas. Cada atendimento começa entendendo o que combina com você e termina quando cada detalhe está certo.</p>
            </div>
            <div className="service-grid">
              {SERVICES.map(({ icon: Icon, number, title, text }) => (
                <article className="service-card" key={title}>
                  <span className="service-number">{number}</span>
                  <Icon size={28} strokeWidth={1.5} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <p className="services-note">Consulte a lista completa, valores e disponibilidade no agendamento de cada unidade.</p>
          </div>
        </section>

        <section id="experiencia" className="experience section-dark">
          <div className="page-shell experience-grid">
            <figure className="experience-art experience-photo">
              <img
                src="/images/barbearia/barba-navalha-carioca-restaurada.png"
                alt="Acabamento de barba com navalha e identidade da Barbearia Carioca"
              />
            </figure>
            <div className="experience-copy">
              <p className="section-kicker">A experiência Carioca</p>
              <h2>Seu tempo.<br />Seu estilo. <em>Seu lugar.</em></h2>
              <p>Entre a pressa da cidade e o ritmo do Rio, criamos uma pausa bem cuidada. Um ambiente clássico, profissionais atentos e um serviço preciso — do primeiro fio ao último detalhe.</p>
              <div className="experience-points">
                <div><strong>01</strong><span><b>Escuta antes da tesoura</b>Entendemos sua rotina e o resultado que você busca.</span></div>
                <div><strong>02</strong><span><b>Cuidado sem exagero</b>Técnica, produtos e acabamento na medida certa.</span></div>
                <div><strong>03</strong><span><b>Conveniência carioca</b>Duas unidades na Zona Sul, abertas todos os dias.</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="unidades" className="locations section-light">
          <div className="page-shell">
            <div className="section-heading locations-heading">
              <div>
                <p className="section-kicker">Onde estamos</p>
                <h2>Duas unidades.<br /><em>O mesmo cuidado.</em></h2>
              </div>
              <p>Escolha a unidade mais conveniente e agende diretamente no Trinks.</p>
            </div>
            <div className="unit-grid">
              {UNITS.map((unit, index) => <UnitCard key={unit.name} unit={unit} index={index} />)}
            </div>
          </div>
        </section>

        <section className="proof section-red">
          <div className="page-shell proof-grid">
            <div className="proof-mark"><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /></div>
            <blockquote>“O melhor visual é aquele que continua parecendo você — só que ainda melhor.”</blockquote>
            <a href="https://www.instagram.com/barbeariacariocaoficial/" target="_blank" rel="noreferrer"><Instagram size={19} /> @barbeariacariocaoficial</a>
          </div>
        </section>

        <section id="faq" className="faq section-light">
          <div className="page-shell faq-grid">
            <div className="faq-intro">
              <p className="section-kicker">Dúvidas frequentes</p>
              <h2>Antes do seu<br /><em>próximo corte.</em></h2>
              <p>Se ainda precisar de ajuda, fale diretamente com a unidade de sua preferência.</p>
            </div>
            <div className="faq-list">
              {FAQS.map(([question, answer], index) => (
                <details key={question} open={index === 0}>
                  <summary>{question}<ChevronDown size={20} /></summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="page-shell final-cta-inner">
            <p className="section-kicker">Seu próximo horário</p>
            <h2>Pronto para dar um trato<br /><em>no seu estilo?</em></h2>
            <a className="button button-light" href="#unidades">Escolher unidade <ArrowRight size={18} /></a>
          </div>
        </section>
      </main>

      <footer>
        <div className="page-shell footer-grid">
          <div><Brand /><p>Tradição, estilo e excelência<br />em cada detalhe.</p></div>
          <div><b>Navegue</b><a href="#servicos">Serviços</a><a href="#experiencia">A experiência</a><a href="#unidades">Unidades</a><a href="#faq">Dúvidas</a></div>
          <div><b>Unidades</b><span>Ipanema · (21) 99405-0680</span><span>Leblon · (21) 97692-1084</span><span>Aberto todos os dias</span></div>
          <div><b>Siga</b><a href="https://www.instagram.com/barbeariacariocaoficial/" target="_blank" rel="noreferrer"><Instagram size={16} /> Instagram</a></div>
        </div>
        <div className="page-shell footer-bottom"><span>© {new Date().getFullYear()} Barbearia Carioca</span><span>Ipanema & Leblon · Rio de Janeiro</span></div>
      </footer>

      <a className="mobile-book" href="#unidades"><CalendarDays size={18} /> Agendar horário</a>
    </>
  );
}
