import { Link } from 'react-router-dom'
import type { Integrante } from '../types'
import fabricioHaine from '../assets/fabricio-torres-haine.jpeg'
import guilhermeAlves from '../assets/guilherme.jpg'
import leonardoNeto from '../assets/leonardo-neto.jpg'
import { btnPrimario, container, divisor, labelTag, pageHero, secao, textoGradiente } from '../styles/ui'

const integrantes: Integrante[] = [
  {
    nome: 'Fabricio Haine',
    rm: '573332',
    turma: '1TDSPY · FIAP 2026',
    cargos: ['Developer', 'Desenvolvedor de Java', 'Database Administrator'],
    foto: fabricioHaine,
    linkedin: 'https://www.linkedin.com/in/fabricio-haine-1423923a5/',
    github: 'https://github.com/FabricioHaine',
  },
  {
    nome: 'Leonardo Neto',
    rm: '571960',
    turma: '1TDSPY · FIAP 2026',
    cargos: ['Developer', 'Desenvolvedor Front-end', 'Programador de Pyhton'],
    foto: leonardoNeto,
    linkedin: 'https://www.linkedin.com/in/leonardo-neto-222b653ab/',
    github: 'https://github.com/leonardo-neto27',
  },
  {
    nome: 'Guilherme Alves',
    rm: '571683',
    turma: '1TDSPI · FIAP 2026',
    cargos: ['Desenvolvedor Front-end', 'Programador Full Stack'],
    foto: guilhermeAlves,
    linkedin: 'https://www.linkedin.com/in/guilherme-de-oliveira-alves-19522b363/',
    github: 'https://github.com/guilhermeeealvess10',
  },
]

function Integrantes() {
  return (
    <>
      {/* Hero */}
      <section className={pageHero} aria-labelledby="integrantes-titulo">
        <div className={container}>
          <span className={`${labelTag} animate-fade-in-up`}>👥 Nossa equipe</span>
          <h1 id="integrantes-titulo" className="mb-4 animate-fade-in-up [animation-delay:0.1s]">
            Quem Somos /<br />
            <span className={textoGradiente}>Integrantes</span>
          </h1>
          <p className="text-[1.15rem] max-w-[600px] mt-4 animate-fade-in-up [animation-delay:0.2s]">
            Somos a DevWarrior, uma empresa especializada em desenvolvimento de software, criação de aplicativos e soluções em inteligência artificial. Nosso foco é transformar ideias em produtos digitais inovadores, escaláveis e de alto desempenho.
          </p>
        </div>
      </section>

      {/* Integrantes */}
      <section className={secao} aria-labelledby="cards-titulo">
        <div className={container}>
          <h2 id="cards-titulo" className="sr-only">Membros da equipe</h2>
          <div className="grid [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))] max-w-[600px] mx-auto gap-6 justify-center max-md:grid-cols-1 max-md:max-w-[300px]">
            {integrantes.map((pessoa) => (
              <article
                key={pessoa.rm}
                className="bg-card border-2 border-borda rounded-3xl p-10 max-md:p-6 text-center transition-all duration-300 hover:bg-card-hover hover:border-[rgba(108,99,255,0.4)] hover:-translate-y-1.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] animate-fade-in-up"
                aria-label={`Perfil de ${pessoa.nome}`}
              >
                <img
                  src={pessoa.foto}
                  alt={`Foto de ${pessoa.nome}`}
                  className="w-[100px] h-[100px] rounded-full mx-auto mb-4 object-cover border-[3px] border-[rgba(108,99,255,0.3)]"
                />
                <h3 className="text-[1.2rem] mb-1">{pessoa.nome}</h3>
                <p className="text-[0.8rem] text-acento mb-1 font-medium">RM: {pessoa.rm}</p>
                <p className="text-[0.8rem] text-texto-suave mb-4">Turma: {pessoa.turma}</p>
                <hr className={divisor} />
                {pessoa.cargos.map((cargo) => (
                  <p key={cargo} className="text-[0.9rem] mb-0.5">{cargo}</p>
                ))}
                <div className="flex gap-2 justify-center mt-4">
                  <a
                    href={pessoa.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn de ${pessoa.nome}`}
                    className="inline-flex items-center gap-1.5 text-texto-suave text-[0.85rem] px-4 py-1.5 rounded-full border border-borda transition-all duration-150 hover:text-acento hover:border-acento hover:bg-[rgba(108,99,255,0.08)]"
                  >
                    🔗 LinkedIn
                  </a>
                  <a
                    href={pessoa.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub de ${pessoa.nome}`}
                    className="inline-flex items-center gap-1.5 text-texto-suave text-[0.85rem] px-4 py-1.5 rounded-full border border-borda transition-all duration-150 hover:text-acento hover:border-acento hover:bg-[rgba(108,99,255,0.08)]"
                  >
                    💻 GitHub
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className={container}>
          <div className="w-[90%] max-w-[900px] mx-auto my-16 p-8 text-center rounded-[25px] bg-gradient-to-br from-[rgba(20,20,35,0.9)] to-[rgba(10,10,20,0.95)] border border-[rgba(140,82,255,0.3)] shadow-[0_0_25px_rgba(140,82,255,0.12)] backdrop-blur-md">
            <p className="text-[1.2rem] italic leading-[1.8] text-white font-medium animate-fade-in-up [animation-delay:0.4s]">
              "Nós somos a equipe DevWarriors e estamos prontos para transformar cada trajeto em uma vitória para o cidadão e para o planeta."
            </p>
          </div>
        </div>
      </section>

      {/* Descrição do grupo */}
      <section className={secao} aria-labelledby="turma-titulo">
        <div className={container}>
          <div className="bg-card border border-borda rounded-3xl text-center p-16 max-md:p-6">
            <h2 id="turma-titulo" className="mb-4">
              Uma equipe, <span className={textoGradiente}>um propósito</span>
            </h2>
            <p className="max-w-[600px] mx-auto mb-10">
              Todos os membros são estudantes de Análise e Desenvolvimento de Sistemas
              na FIAP, nas turmas 1TDSPY e 1TDSPI, e acreditam que a tecnologia pode ser um
              instrumento de transformação social.
            </p>
            <Link to="/sobre" className={btnPrimario}>Conheça nosso projeto</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Integrantes
