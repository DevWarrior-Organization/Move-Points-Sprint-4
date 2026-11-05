import { useNavigate, useParams } from 'react-router-dom'
import { btnPrimario, btnSecundario, card, container, labelTag, pageHero, textoGradiente } from '../styles/ui'
import { nomesCategoria, recompensas } from '../data/recompensas'

function DetalheRecompensa() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const recompensa = recompensas.find((item) => item.id === id)

  if (!recompensa) {
    return (
      <section className={pageHero} aria-labelledby="recompensa-nao-encontrada">
        <div className={`${container} text-center`}>
          <span className="text-6xl" aria-hidden="true">🎁</span>
          <h1 id="recompensa-nao-encontrada" className="mt-6 mb-4">
            Recompensa <span className={textoGradiente}>não encontrada</span>
          </h1>
          <p className="max-w-[560px] mx-auto mb-8">
            Não encontramos um benefício com esse identificador. Volte ao catálogo
            para escolher outra recompensa.
          </p>
          <button type="button" className={btnPrimario} onClick={() => navigate('/recompensas')}>
            Ver recompensas
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className={pageHero} aria-labelledby="detalhe-recompensa-titulo">
      <div className={container}>
        <button type="button" className={`${btnSecundario} mb-8`} onClick={() => navigate(-1)}>
          ← Voltar
        </button>
        <div className={`${card} max-w-[760px] mx-auto text-center p-16 max-md:p-6`}>
          <span className={labelTag}>{nomesCategoria[recompensa.categoria]}</span>
          <div className="text-7xl mt-6 mb-5" aria-hidden="true">{recompensa.icone}</div>
          <h1 id="detalhe-recompensa-titulo" className="mb-4">{recompensa.nome}</h1>
          <p className="max-w-[560px] mx-auto mb-8">{recompensa.descricao}</p>
          <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(108,99,255,0.1)] px-5 py-2 text-acento font-titulo font-bold">
            {recompensa.pontos.toLocaleString('pt-BR')} pontos
          </div>
          <div className="mt-10 flex justify-center gap-4 flex-wrap max-[480px]:flex-col">
            <button type="button" className={`${btnPrimario} max-[480px]:w-full max-[480px]:justify-center`} onClick={() => navigate('/contato')}>
              Quero resgatar
            </button>
            <button type="button" className={`${btnSecundario} max-[480px]:w-full max-[480px]:justify-center`} onClick={() => navigate('/recompensas')}>
              Ver catálogo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DetalheRecompensa
