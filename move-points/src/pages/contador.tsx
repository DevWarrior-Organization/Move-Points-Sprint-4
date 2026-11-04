import { useEffect, useState } from 'react'

interface ContadorProps {
  valorFinal: number
  sufixo?: string
}

export default function Contador({ valorFinal, sufixo = '' }: ContadorProps) {
  const [valor, setValor] = useState(0)

  useEffect(() => {
    let atual = 0
    const incremento = Math.ceil(valorFinal / 40) || 1
    const intervalo = setInterval(() => {
      atual += incremento
      if (atual >= valorFinal) {
        setValor(valorFinal)
        clearInterval(intervalo)
      } else {
        setValor(atual)
      }
    }, 30)
    return () => clearInterval(intervalo)
  }, [valorFinal])

  return <span>{valor}{sufixo}</span>
}