import { Link } from 'react-router-dom'
import Contador from './contador'
import {
  btnPrimario,
  btnSecundario,
  card,
  container,
  labelTag,
  secao,
  secaoTitulo,
  textoGradiente,
} from '../styles/ui'

function timelineDotClasses(status?: 'concluido' | 'atual') {
  const base =
    "relative pb-10 pl-8 before:content-[''] before:absolute before:-left-[0.45rem] before:top-[0.4rem] before:w-3 before:h-3 before:rounded-full before:border-2 before:border-primaria"
  if (status === 'concluido') return `${base} before:bg-[#4ade80] before:shadow-[0_0_12px_rgba(74,222,128,0.5)]`
  if (status === 'atual') return `${base} before:bg-destaque before:shadow-[0_0_12px_rgba(255,101,132,0.5)] before:animate-pulse-glow`
  return `${base} before:bg-acento before:shadow-[0_0_12px_rgba(108,99,255,0.5)]`
}

function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="min-h-screen flex items-center pt-[72px] pb-16 max-sm:pt-[calc(72px+1.5rem)] relative z-[1] overflow-hidden"
        aria-labelledby="hero-titulo"
      >
        <div
          className="absolute top-[15%] -right-[5%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(108,99,255,0.15)_0%,rgba(255,101,132,0.05)_60%,transparent_80%)] blur-[60px] pointer-events-none"
          aria-hidden="true"
        ></div>
        <div className={container}>
          <div className="max-w-[780px]">
            <span className={`${labelTag} animate-fade-in-up`}>🚀 Projeto FIAP 2026</span>
            <h1 id="hero-titulo" className="mb-6 font-extrabold animate-fade-in-up [animation-delay:0.1s]">
              Unindo mobilidade<br />e praticidade
            </h1>
            <p className="text-[1.15rem] max-w-[560px] mb-10 animate-fade-in-up [animation-delay:0.2s]">
              O MovePoints é uma solução desenvolvida para melhorar a mobilidade urbana, incentivando o uso do transporte público e proporcionando um deslocamento mais eficiente para as pessoas, ao mesmo tempo em que contribui para a redução da emissão de carbono e a preservação do meio ambiente.
            </p>
            <div className="flex gap-4 flex-wrap mb-16 max-md:flex-col animate-fade-in-up [animation-delay:0.3s]">
              <Link to="/sobre" className={`${btnPrimario} max-md:w-full max-md:justify-center`}>Conheça o Projeto ↗</Link>
              <Link to="/integrantes" className={`${btnSecundario} max-md:w-full max-md:justify-center`}>Nossa Equipe</Link>
            </div>
            <div className="flex gap-16 max-md:gap-10 max-[480px]:flex-col max-[480px]:gap-4 animate-fade-in-up [animation-delay:0.4s]">
              <div>
                <strong className="font-titulo text-[2rem] font-extrabold text-texto block"><span>3</span></strong>
                <span className="text-[0.85rem] text-texto-suave">Integrantes</span>
              </div>
              <div>
                <strong className="font-titulo text-[2rem] font-extrabold text-texto block"><Contador valorFinal={8} /></strong>
                <span className="text-[0.85rem] text-texto-suave">Páginas</span>
              </div>
              <div>
                <strong className="font-titulo text-[2rem] font-extrabold text-texto block"><Contador valorFinal={100} sufixo="%" /></strong>
                <span className="text-[0.85rem] text-texto-suave">Responsivo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Oferecimentos */}
      <section className={secao} aria-labelledby="features-titulo">
        <div className={container}>
          <div className={secaoTitulo}>
            <span className={labelTag}>O que oferecemos</span>
            <h2 id="features-titulo">Tudo que você precisa<br /><span className={textoGradiente}>em um só lugar</span></h2>
            <p className="max-w-[600px] mx-auto text-[1.1rem]">Nossa plataforma foi projetada para ser intuitiva, rápida e acessível a todos os perfis de usuário.</p>
          </div>
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-6 mt-10">
            {[
              { icone: '🎯', titulo: 'Inclusão Digital', desc: 'Conectamos pessoas a recursos digitais de forma simples e acessível, independentemente do nível de familiaridade com tecnologia.' },
              { icone: '🤝', titulo: 'Networking', desc: 'Plataforma de conexão entre profissionais, estudantes e mentores para trocar experiências e criar oportunidades.' },
              { icone: '📚', titulo: 'Capacitação', desc: 'Curadoria de conteúdos educacionais gratuitos e trilhas de aprendizado personalizadas para diferentes objetivos.' },
              { icone: '📊', titulo: 'Análise de Dados', desc: 'Dashboards inteligentes para acompanhar o progresso e visualizar métricas de impacto social em tempo real.' },
              { icone: '🔒', titulo: 'Privacidade', desc: 'Seus dados protegidos com as melhores práticas de segurança e conformidade com a LGPD.' },
              { icone: '📱', titulo: 'Multi-dispositivo', desc: 'Interface responsiva e otimizada para desktop, tablet e mobile, garantindo a melhor experiência em qualquer tela.' },
            ].map((f, i) => (
              <article
                key={f.titulo}
                className="bg-card border border-borda rounded-3xl p-10 max-md:p-6 transition-all duration-300 hover:bg-card-hover hover:border-[rgba(108,99,255,0.4)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-[52px] h-[52px] rounded-2xl bg-gradient-to-br from-[rgba(108,99,255,0.2)] to-[rgba(255,101,132,0.1)] flex items-center justify-center text-2xl mb-4 border border-[rgba(108,99,255,0.2)]" aria-hidden="true">{f.icone}</div>
                <h3 className="text-[1.1rem] mb-2">{f.titulo}</h3>
                <p>{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnologias */}
      <section className={secao} aria-labelledby="tech-titulo">
        <div className={container}>
          <div className={secaoTitulo}>
            <span className={labelTag}>Stack tecnológico</span>
            <h2 id="tech-titulo">Construído com as<br /><span className={textoGradiente}>melhores tecnologias</span></h2>
          </div>
          <div className="flex flex-wrap gap-4 justify-center mt-10 max-md:flex-col max-md:items-stretch">
            {['⚛️ React', '⚡ Vite', '🔷 TypeScript', '🎨 Tailwind CSS', '🧭 React Router', '📋 React Hook Form', '🔧 Git & GitHub', '♿ Acessibilidade'].map((t) => (
              <span
                key={t}
                className="bg-card border border-borda rounded-full px-6 py-2.5 font-titulo font-semibold text-[0.9rem] text-texto-suave transition-all duration-300 flex items-center gap-2 justify-center hover:border-acento hover:text-acento hover:bg-[rgba(108,99,255,0.08)]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className={secao} aria-labelledby="roadmap-titulo">
        <div className={container}>
          <div className={secaoTitulo}>
            <span className={labelTag}>Evolução do projeto</span>
            <h2 id="roadmap-titulo">Roadmap de<br /><span className={textoGradiente}>desenvolvimento</span></h2>
          </div>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-10">
            <div>
              <div className="relative pl-8 max-md:pl-5 mt-10 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-acento before:via-destaque before:to-transparent">
                <div className={timelineDotClasses('concluido')}>
                  <div className="text-[0.8rem] text-texto-suave uppercase tracking-wide mb-1">Sprint 01 — Concluída</div>
                  <div className="font-titulo text-[1.1rem] font-bold mb-1">Planejamento e Arquitetura</div>
                  <p className="text-[0.9rem]">Definição da estrutura do projeto, paleta de cores, tipografia e organização dos arquivos.</p>
                </div>
                <div className={timelineDotClasses('concluido')}>
                  <div className="text-[0.8rem] text-texto-suave uppercase tracking-wide mb-1">Sprint 02 — Concluída</div>
                  <div className="font-titulo text-[1.1rem] font-bold mb-1">Desenvolvimento HTML, CSS e JavaScript</div>
                  <p className="text-[0.9rem]">Criação de todas as páginas obrigatórias com estrutura semântica, estilos responsivos e interatividade.</p>
                </div>
                <div className={timelineDotClasses('concluido')}>
                  <div className="text-[0.8rem] text-texto-suave uppercase tracking-wide mb-1">Sprint 03 — Concluída</div>
                  <div className="font-titulo text-[1.1rem] font-bold mb-1">Migração para React + Vite + TypeScript</div>
                  <p className="text-[0.9rem]">Reestruturação completa em componentes React, com Tailwind, React Router e React Hook Form.</p>
                </div>
                <div className={`${timelineDotClasses()} pb-0`}>
                  <div className="text-[0.8rem] text-texto-suave uppercase tracking-wide mb-1">Sprint 04 — Futura</div>
                  <div className="font-titulo text-[1.1rem] font-bold mb-1">Integração com back-end</div>
                  <p className="text-[0.9rem]">Consumo de API, autenticação e persistência real dos dados de pontuação.</p>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-up">
              <div className={card}>
                <h3 className="mb-4">Status do Projeto</h3>
                <p className="mb-6">Acompanhe o progresso geral do desenvolvimento da plataforma MovePoints.</p>
                <div className="mb-4">
                  <div className="flex justify-between mb-1.5">
                    <span className="text-[0.9rem] font-semibold text-texto">HTML, CSS &amp; JS</span>
                    <span className="text-[0.9rem] text-acento">100%</span>
                  </div>
                  <div className="h-1.5 bg-borda rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-acento to-destaque rounded-full w-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-[0.9rem] font-semibold text-texto">Migração React</span>
                    <span className="text-[0.9rem] text-acento">80%</span>
                  </div>
                  <div className="h-1.5 bg-borda rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-acento to-destaque rounded-full w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
