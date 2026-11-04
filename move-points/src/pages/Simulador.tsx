import { useMemo, useState } from 'react'
import { divisor } from '../styles/ui'

function calcularNivel(pontos: number): string {
  if (pontos >= 15000) return 'Diamante 💎'
  if (pontos >= 5000) return 'Ouro 🥇'
  if (pontos >= 1000) return 'Prata 🥈'
  return 'Bronze 🥉'
}

const sliderClasses =
  "appearance-none w-full h-1.5 rounded-full bg-borda outline-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-br [&::-webkit-slider-thumb]:from-acento [&::-webkit-slider-thumb]:to-destaque [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-125 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:bg-gradient-to-br [&::-moz-range-thumb]:from-acento [&::-moz-range-thumb]:to-destaque [&::-moz-range-thumb]:cursor-pointer"

export default function Simulador() {
  const [viagens, setViagens] = useState(2)
  const [km, setKm] = useState(8)
  const [dias, setDias] = useState(22)

  const { totalKm, pontos, co2, nivel } = useMemo(() => {
    const totalKm = viagens * km * dias
    const pontos = totalKm * 10
    const co2 = (totalKm * 0.16).toFixed(1).replace('.', ',')
    return { totalKm, pontos, co2, nivel: calcularNivel(pontos) }
  }, [viagens, km, dias])

  return (
    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-16 items-start mt-10">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <label className="flex justify-between items-center font-titulo font-semibold text-[0.95rem]" htmlFor="viagens-dia">
            Viagens por dia
            <span className="text-acento text-base">{viagens}</span>
          </label>
          <input
            className={sliderClasses}
            type="range"
            id="viagens-dia"
            min={1}
            max={10}
            value={viagens}
            onChange={(e) => setViagens(Number(e.target.value))}
            aria-label="Número de viagens por dia"
          />
          <div className="flex justify-between text-xs text-texto-suave"><span>1</span><span>10</span></div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="flex justify-between items-center font-titulo font-semibold text-[0.95rem]" htmlFor="km-viagem">
            Km médio por viagem
            <span className="text-acento text-base">{km} km</span>
          </label>
          <input
            className={sliderClasses}
            type="range"
            id="km-viagem"
            min={2}
            max={40}
            value={km}
            onChange={(e) => setKm(Number(e.target.value))}
            aria-label="Quilômetros médios por viagem"
          />
          <div className="flex justify-between text-xs text-texto-suave"><span>2 km</span><span>40 km</span></div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="flex justify-between items-center font-titulo font-semibold text-[0.95rem]" htmlFor="dias-mes">
            Dias de uso no mês
            <span className="text-acento text-base">{dias} dias</span>
          </label>
          <input
            className={sliderClasses}
            type="range"
            id="dias-mes"
            min={5}
            max={30}
            value={dias}
            onChange={(e) => setDias(Number(e.target.value))}
            aria-label="Dias de uso no mês"
          />
          <div className="flex justify-between text-xs text-texto-suave"><span>5 dias</span><span>30 dias</span></div>
        </div>
      </div>

      <div className="bg-card border border-borda rounded-3xl p-10 max-md:p-6 sticky top-[calc(72px+1rem)]" aria-live="polite">
        <div className="text-center mb-6">
          <span className="block text-[0.85rem] text-texto-suave uppercase tracking-wide mb-2">Sua pontuação estimada</span>
          <strong className="block font-titulo text-[3.5rem] font-extrabold bg-gradient-to-br from-acento to-destaque bg-clip-text text-transparent leading-none mb-1">
            {pontos.toLocaleString('pt-BR')}
          </strong>
          <span className="text-[0.9rem] text-texto-suave">pts / mês</span>
        </div>
        <hr className={divisor} />
        <div className="flex flex-col gap-4 mt-6">
          <div className="flex justify-between items-center">
            <span className="text-[0.9rem] text-texto-suave">Km percorridos</span>
            <span className="font-titulo font-bold text-[0.95rem]">{totalKm.toLocaleString('pt-BR')} km</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[0.9rem] text-texto-suave">CO₂ evitado (est.)</span>
            <span className="font-titulo font-bold text-[0.95rem] text-[#4ade80]">{co2} kg</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[0.9rem] text-texto-suave">Nível estimado</span>
            <span className="font-titulo font-bold text-[0.95rem] text-acento">{nivel}</span>
          </div>
        </div>
        <p className="mt-6 text-xs text-texto-suave text-center italic">* 10 pontos por km percorrido em transporte público</p>
      </div>
    </div>
  )
}