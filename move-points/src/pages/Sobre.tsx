import { useState } from 'react'
import { Link } from 'react-router-dom'
import { btnPrimario, btnSecundario, card, container, labelTag, pageHero, secao, secaoTitulo, textoGradiente } from '../styles/ui'

type TabId = 'acesso' | 'desafios' | 'conexao'

const tabBtn = (ativo: boolean) =>
  `bg-none border-none font-titulo font-semibold text-[0.95rem] px-5 py-2 rounded-lg cursor-pointer transition-all duration-200 max-[480px]:w-full max-[480px]:text-left ${
    ativo ? 'text-acento bg-[rgba(108,99,255,0.1)]' : 'text-texto-suave hover:text-acento hover:bg-[rgba(108,99,255,0.1)]'
  }`

function Sobre() {
  const [tabAtiva, setTabAtiva] = useState<TabId>('acesso')

  return (
    <>
      {/* Hero */}
      <section className={pageHero} aria-labelledby="sobre-titulo">
        <div className={container}>
          <span className={`${labelTag} animate-fade-in-up`}>📋 Sobre</span>
          <h1 id="sobre-titulo" className="mb-4 animate-fade-in-up [animation-delay:0.1s]">
            O projeto que<br />
            <span className={textoGradiente}>muda perspectivas</span>
          </h1>
          <p className="text-[1.15rem] max-w-[600px] mt-4 animate-fade-in-up [animation-delay:0.2s]">
            Entenda o contexto, o problema que nos motivou e a solução
            que desenvolvemos para gerar impacto positivo na sociedade.
          </p>
        </div>
      </section>

      {/* Contexto */}
      <section className={secao} aria-labelledby="contexto-titulo">
        <div className={container}>
          <div className="grid grid-cols-2 max-[480px]:grid-cols-1 gap-16 items-center">
            <div>
              <span className={labelTag}>Contexto</span>
              <h2 id="contexto-titulo" className="my-4">
                O problema que<br /><span className={textoGradiente}>nos motivou</span>
              </h2>
              <p className="mb-6">
                Um dos grandes problemas enfrentados pela população é a emissão de carbono proveniente dos escapamentos de carros e motos, causando impactos negativos ao meio ambiente.
              </p>
              <p className="mb-6">
                Esse cenário nos motivou a buscar formas de conectar o ambiente digital a benefícios reais no mundo físico, tornando a interação do usuário mais intuitiva, dinâmica e sustentável.
              </p>
              <p>
                Pensando em reduzir os índices de emissão de carbono, uma das principais soluções encontradas foi incentivar o uso do transporte público, promovendo uma alternativa mais sustentável e acessível para a população.
              </p>
            </div>

            <div className="relative animate-fade-in-up">
              <div className="bg-card border border-borda rounded-3xl p-6 relative">
                <div className="flex gap-1.5 mb-4" aria-hidden="true">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff6b6b]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffd93d]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#6bcb77]"></div>
                </div>
                <div className="flex flex-col gap-2" aria-hidden="true">
                  <div className="h-3.5 rounded w-1/2 bg-[rgba(108,99,255,0.3)]"></div>
                  <div className="h-2.5 rounded w-4/5 bg-borda"></div>
                  <div className="h-2.5 rounded w-3/5 bg-borda"></div>
                  <div className="h-2.5 rounded w-4/5 bg-borda"></div>
                  <div className="h-2.5 rounded w-[70%] bg-borda"></div>
                  <div className="h-3"></div>
                  <div className="h-3 rounded w-2/5 bg-[rgba(108,99,255,0.3)]"></div>
                  <div className="h-2.5 rounded w-4/5 bg-borda"></div>
                  <div className="h-2.5 rounded w-3/5 bg-borda"></div>
                </div>
              </div>
              <div className="grid grid-cols-2 max-[480px]:grid-cols-2 gap-4 mt-6">
                <div className="bg-card border border-borda rounded-2xl p-6 text-center">
                  <strong className="font-titulo text-[1.8rem] font-extrabold block">🚗<span>💨</span></strong>
                  <span className="text-[0.85rem] text-texto-suave">Reduzir emissão de carbono por veículos</span>
                </div>
                <div className="bg-card border border-borda rounded-2xl p-6 text-center">
                  <strong className="font-titulo text-[1.8rem] font-extrabold block">📲</strong>
                  <span className="text-[0.85rem] text-texto-suave">Ambiente digital e interativo</span>
                </div>
                <div className="bg-card border border-borda rounded-2xl p-6 text-center">
                  <strong className="font-titulo text-[1.8rem] font-extrabold block">🚎<span>⚡</span></strong>
                  <span className="text-[0.85rem] text-texto-suave">Incentivo ao uso do transporte público</span>
                </div>
                <div className="bg-card border border-borda rounded-2xl p-6 text-center">
                  <strong className="font-titulo text-[1.8rem] font-extrabold block">
                    <span className={textoGradiente}>2026</span>
                  </strong>
                  <span className="text-[0.85rem] text-texto-suave">Ano previsto de lançamento</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solução */}
      <section className={secao} aria-labelledby="solucao-titulo">
        <div className={container}>
          <div className={secaoTitulo}>
            <span className={labelTag}>Nossa solução</span>
            <h2 id="solucao-titulo">Como o MovePoints<br /><span className={textoGradiente}>resolve isso</span></h2>
            <p className="max-w-[600px] mx-auto text-[1.1rem]">Uma plataforma completa e intuitiva com três pilares fundamentais.</p>
          </div>

          <div className="mt-10" role="tablist" aria-label="Pilares da solução">
            <div className="flex gap-2 flex-wrap mb-10 border-b border-borda pb-4 max-[480px]:flex-col">
              <button className={tabBtn(tabAtiva === 'acesso')} role="tab" aria-selected={tabAtiva === 'acesso'} onClick={() => setTabAtiva('acesso')}>
                📚 Acesso
              </button>
              <button className={tabBtn(tabAtiva === 'desafios')} role="tab" aria-selected={tabAtiva === 'desafios'} onClick={() => setTabAtiva('desafios')}>
                🎯 Desafios
              </button>
              <button className={tabBtn(tabAtiva === 'conexao')} role="tab" aria-selected={tabAtiva === 'conexao'} onClick={() => setTabAtiva('conexao')}>
                🤝 Conexão
              </button>
            </div>

            {tabAtiva === 'acesso' && (
              <div role="tabpanel">
                <div className="grid grid-cols-2 max-md:grid-cols-1 gap-10">
                  <div>
                    <h3 className="mb-4">Fácil Acesso</h3>
                    <p className="mb-4">O MovePoints é simples de usar e de fácil entendimento. Criado para funcionar em qualquer dispositivo.</p>
                    <p>Interface simplificada e acesso à internet para que qualquer pessoa possa utilizar o app sem problemas.</p>
                  </div>
                  <div className={card}>
                    <h4 className="mb-4">Recursos de Acesso</h4>
                    <ul className="flex flex-col gap-3">
                      <li className="flex gap-3 items-start"><span className="text-acento">✓</span><span className="text-texto-suave text-[0.95rem]">Funciona em conexões 4G</span></li>
                      <li className="flex gap-3 items-start"><span className="text-acento">✓</span><span className="text-texto-suave text-[0.95rem]">Compatível com leitores de tela</span></li>
                      <li className="flex gap-3 items-start"><span className="text-acento">✓</span><span className="text-texto-suave text-[0.95rem]">Interface em português claro</span></li>
                      <li className="flex gap-3 items-start"><span className="text-acento">✓</span><span className="text-texto-suave text-[0.95rem]">100% gratuito e sem anúncios</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {tabAtiva === 'desafios' && (
              <div role="tabpanel">
                <div className="grid grid-cols-2 max-md:grid-cols-1 gap-10">
                  <div>
                    <h3 className="mb-4">Sistema de desafios</h3>
                    <p className="mb-4">O app possui um sistema de desafios semanais e missões especiais para estimular a constância do usuário e criar um ambiente competitivo saudável.</p>
                    <p>Além disso, os usuários poderão acumular conquistas, acompanhar seu progresso e desbloquear recompensas, tornando a experiência mais interativa, motivadora e incentivando hábitos mais sustentáveis no dia a dia.</p>
                  </div>
                  <div className={card}>
                    <h4 className="mb-4">Permite</h4>
                    <ul className="flex flex-col gap-3">
                      <li className="flex gap-3 items-start"><span className="text-[#2e79eb]">•</span><span className="text-texto-suave text-[0.95rem]">Manter uma constância no aplicativo</span></li>
                      <li className="flex gap-3 items-start"><span className="text-[#2e79eb]">•</span><span className="text-texto-suave text-[0.95rem]">Competitividade positiva</span></li>
                      <li className="flex gap-3 items-start"><span className="text-[#2e79eb]">•</span><span className="text-texto-suave text-[0.95rem]">Recompensas atrativas</span></li>
                      <li className="flex gap-3 items-start"><span className="text-[#2e79eb]">•</span><span className="text-texto-suave text-[0.95rem]">Incentivo à sustentabilidade</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {tabAtiva === 'conexao' && (
              <div role="tabpanel">
                <div className="grid grid-cols-2 max-md:grid-cols-1 gap-10">
                  <div>
                    <h3 className="mb-4">Rede de Conexões</h3>
                    <p className="mb-4">Integramos nosso aplicativo a empresas parceiras, permitindo a geração de pontos que podem ser utilizados como benefício no transporte público, incentivando práticas mais sustentáveis.</p>
                    <p>Possibilita a interação social, ao identificar usuários próximos, o aplicativo sugere conexões, incentivando a criação de uma comunidade ativa dentro da plataforma.</p>
                  </div>
                  <div className={card}>
                    <h4 className="mb-4">Como funciona</h4>
                    <ul className="flex flex-col gap-3">
                      <li className="flex gap-3 items-start"><span className="text-[#4ade80]">1.</span><span className="text-texto-suave text-[0.95rem]">Crie seu perfil na plataforma</span></li>
                      <li className="flex gap-3 items-start"><span className="text-[#4ade80]">2.</span><span className="text-texto-suave text-[0.95rem]">Informe seus dados e ative a sua geolocalização</span></li>
                      <li className="flex gap-3 items-start"><span className="text-[#4ade80]">3.</span><span className="text-texto-suave text-[0.95rem]">Pegue seu transporte como ônibus ou metrô</span></li>
                      <li className="flex gap-3 items-start"><span className="text-[#4ade80]">4.</span><span className="text-texto-suave text-[0.95rem]">Resgate descontos e benefícios com pontos ganhos</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Visão Geral */}
      <section className={secao} aria-labelledby="visao-titulo">
        <div className={container}>
          <div className={`${card} text-center p-16 max-md:p-6`}>
            <span className={`${labelTag} mb-4`}>Nossa visão</span>
            <h2 id="visao-titulo" className="mb-4">
              Um Brasil<br /><span className={textoGradiente}>mais consciente</span>
            </h2>
            <p className="max-w-[800px] mx-auto mb-10 text-[1.05rem]">
              Acreditamos que, com o nosso projeto, possamos incentivar a mobilidade sustentável entre a população, ajudando tanto as pessoas quanto o meio ambiente. Nosso objetivo é criar um ambiente virtual divertido e funcional, proporcionando uma melhor experiência de utilização.
            </p>
            <div className="flex gap-4 justify-center flex-wrap max-[480px]:flex-col">
              <Link to="/contato" className={`${btnPrimario} max-[480px]:w-full max-[480px]:justify-center`}>Entrar em contato</Link>
              <Link to="/faq" className={`${btnSecundario} max-[480px]:w-full max-[480px]:justify-center`}>Perguntas frequentes</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Sobre
