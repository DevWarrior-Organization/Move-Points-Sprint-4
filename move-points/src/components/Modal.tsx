import type { Recompensa } from '../types'
import { btnPrimario } from '../styles/ui'

interface ModalProps {
  recompensa: Recompensa | null
  onFechar: () => void
}

function Modal({ recompensa, onFechar }: ModalProps) {
  if (!recompensa) return null

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-[2000] opacity-100 transition-opacity duration-300 p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-titulo"
      onClick={(e) => {
        if (e.target === e.currentTarget) onFechar()
      }}
    >
      <div className="bg-secundaria border border-borda rounded-3xl p-16 max-md:p-8 max-w-[420px] w-full text-center relative scale-100 transition-transform duration-300">
        <button
          className="absolute top-4 right-4 bg-none border-none text-texto-suave text-xl cursor-pointer px-2 py-1 rounded-md transition-colors duration-150 hover:bg-card hover:text-texto"
          aria-label="Fechar modal"
          onClick={onFechar}
        >
          ✕
        </button>
        <div className="text-5xl mb-4" aria-hidden="true">🎉</div>
        <h3 className="text-2xl mb-2" id="modal-titulo">Resgate confirmado!</h3>
        <p className="mb-10 text-[0.95rem]">
          Você resgatou "{recompensa.nome}" por {recompensa.pontos.toLocaleString('pt-BR')} pts. Em breve você receberá o código no seu e-mail cadastrado.
        </p>
        <button className={`${btnPrimario} w-full justify-center`} onClick={onFechar}>Ótimo!</button>
      </div>
    </div>
  )
}

export default Modal
