import { Link } from 'react-router-dom'
import Simulador from './Simulador'
import { btnPrimario, btnSecundario, card, container, labelTag, pageHero, secao, secaoTitulo, textoGradiente } from '../styles/ui'

function Funcionamento() {
  return (
    <>
      {/* Hero */}
      <section className={pageHero} aria-labelledby="cf-titulo">
        <div className={container}>
          <span className={`${labelTag} animate-fade-in-up`}>⚙️ A solução na prática</span>
          <h1 id="cf-titulo" className="mb-4 animate-fade-in-up [animation-delay:0.1s]">
            Como o MovePoints<br />
            <span className={textoGradiente}>funciona</span>
          </h1>
          <p className="text-[1.15rem] max-w-[600px] mt-4 animate-fade-in-up [animation-delay:0.2s]">
            Do trajeto de ônibus até a recompensa no app — entenda cada etapa
            da experiência MovePoints de forma simples e visual.
          </p>
        </div>
      </section>

      {/* Passo a passo */}
      <section className={secao} aria-labelledby="passos-titulo">
        <div className={container}>
          <div className={secaoTitulo}>
            <span className={labelTag}>Jornada do usuário</span>
            <h2 id="passos-titulo">4 passos para começar<br /><span className={textoGradiente}>a ganhar pontos</span></h2>
          </div>

          <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6 mt-10">
            {[
              { n: '01', icone: '📱', titulo: 'Baixe e cadastre-se', desc: 'Crie sua conta no MovePoints em menos de 2 minutos. Informe seus dados básicos e ative a geolocalização para que o app possa identificar seus trajetos automaticamente.' },
              { n: '02', icone: '🚌', titulo: 'Use o transporte público', desc: 'Pegue seu ônibus, metrô ou trem normalmente. O MovePoints detecta automaticamente quando você está em transporte coletivo e inicia o rastreamento do trajeto.' },
              { n: '03', icone: '⭐', titulo: 'Acumule pontos', desc: 'A cada quilômetro percorrido em transporte público, você ganha pontos. Complete desafios semanais e missões especiais para multiplicar sua pontuação.' },
              { n: '04', icone: '🎁', titulo: 'Resgate recompensas', desc: 'Troque seus pontos por descontos, benefícios e vantagens exclusivas de empresas parceiras. Quanto mais você usa o transporte público, mais você ganha.' },
            ].map((p) => (
              <article
                key={p.n}
                className="bg-card border border-borda rounded-3xl p-10 max-md:p-6 relative transition-all duration-300 hover:bg-card-hover hover:border-[rgba(108,99,255,0.4)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              >
                <div className="font-titulo text-5xl font-extrabold text-[rgba(108,99,255,0.15)] leading-none mb-2">{p.n}</div>
                <div className="text-3xl mb-4" aria-hidden="true">{p.icone}</div>
                <h3 className="text-[1.1rem] mb-2">{p.titulo}</h3>
                <p className="text-[0.9rem]">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Simulador de Pontos */}
      <section className={`${secao} bg-secundaria border-y border-borda`} aria-labelledby="simulador-titulo">
        <div className={container}>
          <div className={secaoTitulo}>
            <span className={labelTag}>Interativo</span>
            <h2 id="simulador-titulo">Simule sua<br /><span className={textoGradiente}>pontuação mensal</span></h2>
            <p className="max-w-[600px] mx-auto text-[1.1rem]">Ajuste os controles abaixo e veja quantos pontos você acumularia por mês.</p>
          </div>
          <Simulador />
        </div>
      </section>

      {/* Sistema de Pontuação */}
      <section className={secao} aria-labelledby="pontuacao-titulo">
        <div className={container}>
          <div className={secaoTitulo}>
            <span className={labelTag}>Pontuação</span>
            <h2 id="pontuacao-titulo">Como os pontos<br /><span className={textoGradiente}>são calculados</span></h2>
          </div>
          <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6 mt-10">
            {[
              { icone: '📍', titulo: 'Base por km', valor: '10 pts', desc: 'A cada quilômetro percorrido em transporte público validado por geolocalização.' },
              { icone: '🏆', titulo: 'Bônus desafio', valor: '2x pts', desc: 'Pontuação dobrada ao completar desafios semanais e missões especiais dentro do prazo.' },
              { icone: '👥', titulo: 'Bônus social', valor: '+15%', desc: 'Bônus extra ao participar de desafios em grupo com amigos conectados na plataforma.' },
              { icone: '🔥', titulo: 'Sequência diária', valor: '+5 pts/dia', desc: 'Bônus cumulativo para quem usa o transporte público por dias consecutivos.' },
            ].map((p) => (
              <div
                key={p.titulo}
                className="bg-card border border-borda rounded-3xl p-10 max-md:p-6 text-center transition-all duration-300 hover:bg-card-hover hover:border-[rgba(108,99,255,0.4)] hover:-translate-y-1"
              >
                <div className="text-3xl mb-4" aria-hidden="true">{p.icone}</div>
                <h3 className="text-base mb-2">{p.titulo}</h3>
                <div className="font-titulo text-[1.8rem] font-extrabold bg-gradient-to-br from-acento to-destaque bg-clip-text text-transparent mb-4">{p.valor}</div>
                <p className="text-[0.85rem]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={secao} aria-labelledby="cta-titulo">
        <div className={container}>
          <div className={`${card} text-center p-16 max-md:p-6`}>
            <h2 id="cta-titulo" className="mb-4">
              Conheça também o<br /><span className={textoGradiente}>sistema de recompensas</span>
            </h2>
            <p className="max-w-[800px] mx-auto mb-10 text-[1.05rem]">
              Veja todas as recompensas disponíveis, os rankings de usuários
              e como funciona a comunidade MovePoints.
            </p>
            <div className="flex gap-4 justify-center flex-wrap max-[480px]:flex-col">
              <Link to="/recompensas" className={`${btnPrimario} max-[480px]:w-full max-[480px]:justify-center`}>Ver recompensas ↗</Link>
              <Link to="/contato" className={`${btnSecundario} max-[480px]:w-full max-[480px]:justify-center`}>Fale conosco</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Funcionamento
