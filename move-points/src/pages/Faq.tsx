import { useState } from 'react'
import { Link } from 'react-router-dom'
import { btnPrimario, container, labelTag, pageHero, secao, textoGradiente } from '../styles/ui'

interface Pergunta {
  id: string
  pergunta: string
  resposta: React.ReactNode
}

interface Categoria {
  titulo: string
  perguntas: Pergunta[]
}

const categorias: Categoria[] = [
  {
    titulo: '🎯 Sobre o Projeto',
    perguntas: [
      { id: 'p1', pergunta: 'O que é o MovePoints?', resposta: 'O MovePoints é uma solução que transforma o uso do transporte público em uma experiência interativa, recompensadora e social. Através de um sistema inteligente de pontuação baseado na quilometragem percorrida, incentivamos hábitos sustentáveis enquanto aumentamos o engajamento dos usuários.' },
      { id: 'p2', pergunta: 'Qual problema o projeto resolve?', resposta: 'O projeto aborda a redução da emissão de carbono gerada por veículos, priorizando utilizar a gamificação através de pontos para conscientizar as pessoas a utilizarem mais os transportes públicos.' },
      { id: 'p3', pergunta: 'O projeto é gratuito?', resposta: 'Sim! O MovePoints é 100% gratuito. Nossa missão é fazer com que o usuário ganhe pontos concluindo missões, para que possam ser utilizados em suas viagens, podendo se locomover de forma gratuita pela cidade.' },
      {
        id: 'p4',
        pergunta: 'Em qual fase de desenvolvimento o projeto está?',
        resposta: (
          <>
            Atualmente estamos na Sprint 03 — Migração para React, Vite e TypeScript. Já concluímos o planejamento, a arquitetura, o desenvolvimento HTML/CSS/JS e a responsividade. Veja o roadmap completo na{' '}
            <Link to="/">página inicial</Link>.
          </>
        ),
      },
    ],
  },
  {
    titulo: '💻 Tecnologia',
    perguntas: [
      { id: 'p5', pergunta: 'Quais tecnologias foram utilizadas no desenvolvimento?', resposta: 'O projeto foi desenvolvido com React, Vite e TypeScript, estilizado com Tailwind CSS, navegação com React Router e formulários validados com React Hook Form. Todo o projeto é versionado com Git e hospedado no GitHub.' },
      { id: 'p6', pergunta: 'O site é responsivo? Funciona no celular?', resposta: 'Sim! O site foi desenvolvido com abordagem mobile-first e é totalmente responsivo. Funciona corretamente em smartphones (até 480px), tablets (a partir de 768px) e desktops (a partir de 992px).' },
      {
        id: 'p7',
        pergunta: 'Como está organizada a estrutura de arquivos do projeto?',
        resposta: (
          <>
            O projeto segue uma arquitetura organizada em componentes React:<br /><br />
            <code className="text-[0.85rem] text-acento">/src/pages</code> — Páginas da aplicação<br />
            <code className="text-[0.85rem] text-acento">/src/components</code> — Componentes reutilizáveis<br />
            <code className="text-[0.85rem] text-acento">/src/types</code> — Tipos TypeScript<br />
            <code className="text-[0.85rem] text-acento">/src/assets</code> — Imagens e recursos visuais
          </>
        ),
      },
    ],
  },
  {
    titulo: '👥 Equipe',
    perguntas: [
      {
        id: 'p8',
        pergunta: 'Quantas pessoas integram a equipe?',
        resposta: (
          <>
            A equipe é composta por 4 estudantes da turma 1TDSPY da FIAP. Cada membro tem uma área de responsabilidade principal, mas todos colaboram em todas as etapas do desenvolvimento. Conheça cada integrante na{' '}
            <Link to="/integrantes">página da equipe</Link>.
          </>
        ),
      },
      {
        id: 'p9',
        pergunta: 'Como posso entrar em contato com a equipe?',
        resposta: (
          <>
            Você pode entrar em contato através do formulário na nossa{' '}
            <Link to="/contato">página de contato</Link>, pelos perfis do LinkedIn de cada integrante (disponíveis na página de{' '}
            <Link to="/integrantes">integrantes ↗</Link>) ou pelo repositório oficial do projeto no GitHub.
          </>
        ),
      },
      {
        id: 'p10',
        pergunta: 'Posso contribuir para o projeto?',
        resposta: (
          <>
            Claro! Você pode enviar sugestões, ideias ou ajustes entrando em contato através do e-mail disponível na página de contato (
            <Link to="/contato">disponível aqui ↗</Link>), pelo formulário do site ou pelo LinkedIn de cada integrante da equipe.
          </>
        ),
      },
    ],
  },
]

function Faq() {
  const [abertaId, setAbertaId] = useState<string | null>(null)

  function alternar(id: string) {
    setAbertaId((atual) => (atual === id ? null : id))
  }

  return (
    <>
      <section className={pageHero} aria-labelledby="faq-titulo">
        <div className={container}>
          <span className={`${labelTag} animate-fade-in-up`}>❓ Dúvidas</span>
          <h1 id="faq-titulo" className="mb-4 animate-fade-in-up [animation-delay:0.1s]">
            Perguntas<br />
            <span className={textoGradiente}>Frequentes</span>
          </h1>
          <p className="text-[1.15rem] max-w-[600px] mt-4 animate-fade-in-up [animation-delay:0.2s]">
            Encontre respostas para as principais dúvidas sobre o projeto
            MovePoints, a equipe e as tecnologias utilizadas.
          </p>
        </div>
      </section>

      <section className={secao} aria-labelledby="faq-lista-titulo">
        <div className={container}>
          <h2 id="faq-lista-titulo" className="sr-only">Lista de perguntas e respostas</h2>

          {categorias.map((cat) => (
            <div className="mb-16 last:mb-0 max-w-[780px] mx-auto" key={cat.titulo}>
              <h3 className="text-[1rem] uppercase tracking-widest text-acento mb-6">{cat.titulo}</h3>
              <div role="list">
                {cat.perguntas.map((p) => {
                  const aberta = abertaId === p.id
                  return (
                    <div
                      className={`border rounded-2xl mb-4 overflow-hidden transition-colors duration-300 ${aberta ? 'border-[rgba(108,99,255,0.4)]' : 'border-borda'}`}
                      role="listitem"
                      key={p.id}
                    >
                      <button
                        className="w-full bg-none border-none text-texto font-titulo font-semibold text-base text-left px-6 py-4 cursor-pointer flex items-center justify-between gap-4 transition-colors duration-150 hover:bg-card"
                        aria-expanded={aberta}
                        onClick={() => alternar(p.id)}
                      >
                        {p.pergunta}
                        <span
                          className={`text-xl font-normal text-acento shrink-0 select-none transition-transform duration-300 ${aberta ? 'rotate-45' : ''}`}
                          aria-hidden="true"
                        >
                          {aberta ? '−' : '+'}
                        </span>
                      </button>
                      <div
                        className={`overflow-hidden transition-[max-height,padding] duration-300 px-6 ${aberta ? 'max-h-[500px] pb-4' : 'max-h-0'}`}
                        role="region"
                      >
                        <p className="pt-2 border-t border-borda">{p.resposta}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}

          <div className="text-center mt-16">
            <p className="mb-6 text-[1.05rem]">Não encontrou o que procurava?</p>
            <Link to="/contato" className={`${btnPrimario} max-md:w-full max-md:justify-center`}>Enviar uma pergunta ↗</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Faq
