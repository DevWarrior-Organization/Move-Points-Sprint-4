import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../components/Modal'
import { recompensas, nomesCategoria } from '../data/recompensas'
import type { CategoriaRecompensa, Recompensa } from '../types'
import { btnPrimario, btnSecundario, card, container, labelTag, pageHero, secao, secaoTitulo, textoGradiente } from '../styles/ui'

const filtros: { id: CategoriaRecompensa | 'todos'; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'alimentacao', label: '🍔 Alimentação' },
  { id: 'transporte', label: '🚌 Transporte' },
  { id: 'lazer', label: '🎬 Lazer' },
  { id: 'saude', label: '💊 Saúde' },
]

const nivelCardBase = 'bg-card border rounded-3xl p-10 max-md:p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]'

const niveis = [
  {
    id: 'bronze', badge: '🥉', nome: 'Bronze', pontos: '0 — 999 pts',
    borda: 'border-borda', fundo: '',
    beneficios: ['Acesso aos desafios semanais', 'Desconto de 5% em parceiros', 'Relatório de trajetos'],
  },
  {
    id: 'prata', badge: '🥈', nome: 'Prata', pontos: '1.000 — 4.999 pts',
    borda: 'border-[rgba(108,99,255,0.4)]', fundo: '',
    beneficios: ['Tudo do Bronze', 'Desconto de 10% em parceiros', 'Missões especiais mensais', 'Conectar até 10 amigos'],
  },
  {
    id: 'ouro', badge: '🥇', nome: 'Ouro', pontos: '5.000 — 14.999 pts',
    borda: 'border-[rgba(255,101,132,0.4)]', fundo: 'bg-[rgba(255,101,132,0.04)]',
    beneficios: ['Tudo do Prata', 'Desconto de 20% em parceiros', 'Desafios em grupo exclusivos', 'Prioridade em novas recompensas'],
  },
  {
    id: 'diamante', badge: '💎', nome: 'Diamante', pontos: '15.000+ pts',
    borda: 'border-[rgba(147,51,234,0.5)]', fundo: 'bg-[rgba(147,51,234,0.06)]',
    beneficios: ['Tudo do Ouro', 'Desconto de 30% em parceiros', 'Acesso a recompensas premium', 'Badge exclusivo no perfil', 'Participação em eventos FIAP'],
  },
]

const ranking = [
  { pos: '🥇', posLabel: '1º lugar', avatar: 'MR', avatarBg: 'bg-gradient-to-br from-acento to-destaque', nome: 'Mariana R.', cidade: 'São Paulo, SP', km: '412 km', pts: '4.120 pts', borda: 'border-[rgba(255,215,0,0.4)]', fundo: 'bg-[rgba(255,215,0,0.04)]' },
  { pos: '🥈', posLabel: '2º lugar', avatar: 'CS', avatarBg: 'bg-gradient-to-br from-[#ff6584] to-[#ff9a9e]', nome: 'Carlos S.', cidade: 'Guarulhos, SP', km: '387 km', pts: '3.870 pts', borda: 'border-[rgba(192,192,192,0.4)]', fundo: 'bg-[rgba(192,192,192,0.04)]' },
  { pos: '🥉', posLabel: '3º lugar', avatar: 'JP', avatarBg: 'bg-gradient-to-br from-[#43b89c] to-[#3cd0a0]', nome: 'Julia P.', cidade: 'Santo André, SP', km: '354 km', pts: '3.540 pts', borda: 'border-[rgba(205,127,50,0.4)]', fundo: 'bg-[rgba(205,127,50,0.04)]' },
  { pos: '4', posLabel: '4º lugar', avatar: 'RF', avatarBg: 'bg-gradient-to-br from-[#f7b731] to-[#f0a500]', nome: 'Ricardo F.', cidade: 'Osasco, SP', km: '298 km', pts: '2.980 pts', borda: 'border-borda', fundo: '' },
  { pos: '5', posLabel: '5º lugar', avatar: 'AL', avatarBg: 'bg-gradient-to-br from-[#a55eea] to-[#7950f2]', nome: 'Ana L.', cidade: 'São Bernardo, SP', km: '271 km', pts: '2.710 pts', borda: 'border-borda', fundo: '' },
]

function Recompensas() {
  const [filtroAtivo, setFiltroAtivo] = useState<CategoriaRecompensa | 'todos'>('todos')
  const [recompensaSelecionada, setRecompensaSelecionada] = useState<Recompensa | null>(null)

  const recompensasFiltradas = useMemo(() => {
    if (filtroAtivo === 'todos') return recompensas
    return recompensas.filter((r) => r.categoria === filtroAtivo)
  }, [filtroAtivo])

  return (
    <>
      {/* Hero */}
      <section className={pageHero} aria-labelledby="rec-titulo">
        <div className={container}>
          <span className={`${labelTag} animate-fade-in-up`}>🎁 Benefícios reais</span>
          <h1 id="rec-titulo" className="mb-4 animate-fade-in-up [animation-delay:0.1s]">
            Recompensas e<br />
            <span className={textoGradiente}>Comunidade</span>
          </h1>
          <p className="text-[1.15rem] max-w-[600px] mt-4 animate-fade-in-up [animation-delay:0.2s]">
            Seus pontos valem muito mais do que você imagina. Conheça as recompensas,
            os níveis do programa e o ranking de usuários MovePoints.
          </p>
        </div>
      </section>

      {/* Níveis */}
      <section className={secao} aria-labelledby="niveis-titulo">
        <div className={container}>
          <div className={secaoTitulo}>
            <span className={labelTag}>Progressão</span>
            <h2 id="niveis-titulo">Suba de nível e<br /><span className={textoGradiente}>desbloqueie benefícios</span></h2>
            <p className="max-w-[600px] mx-auto text-[1.1rem]">Cada nível desbloqueia recompensas e vantagens exclusivas.</p>
          </div>
          <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6 mt-10">
            {niveis.map((n) => (
              <article key={n.id} className={`${nivelCardBase} ${n.borda} ${n.fundo}`}>
                <div className="text-4xl mb-4" aria-hidden="true">{n.badge}</div>
                <h3 className="text-[1.2rem] mb-1">{n.nome}</h3>
                <div className="text-[0.8rem] text-acento font-semibold mb-4 px-3 py-1 bg-[rgba(108,99,255,0.1)] rounded-full inline-block">{n.pontos}</div>
                <ul className="text-left flex flex-col gap-2">
                  {n.beneficios.map((b) => (
                    <li key={b} className="text-[0.85rem] text-texto-suave pl-4 relative before:content-['✓'] before:absolute before:left-0 before:text-acento before:text-xs">
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Recompensas disponíveis */}
      <section className={`${secao} bg-secundaria border-y border-borda`} aria-labelledby="recompensas-titulo">
        <div className={container}>
          <div className={secaoTitulo}>
            <span className={labelTag}>Catálogo</span>
            <h2 id="recompensas-titulo">Recompensas<br /><span className={textoGradiente}>disponíveis agora</span></h2>
            <p className="max-w-[600px] mx-auto text-[1.1rem]">Filtre por categoria e encontre o benefício ideal para você.</p>
          </div>

          <div className="flex gap-2 flex-wrap justify-center my-10" role="group" aria-label="Filtrar recompensas">
            {filtros.map((f) => (
              <button
                key={f.id}
                className={`bg-card border rounded-full font-titulo font-semibold text-[0.85rem] px-5 py-2 cursor-pointer transition-all duration-150 ${
                  filtroAtivo === f.id
                    ? 'bg-[rgba(108,99,255,0.12)] border-acento text-acento'
                    : 'border-borda text-texto-suave hover:bg-[rgba(108,99,255,0.12)] hover:border-acento hover:text-acento'
                }`}
                onClick={() => setFiltroAtivo(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6">
            {recompensasFiltradas.map((r) => (
              <article
                key={r.id}
                className="bg-card border border-borda rounded-3xl p-6 flex flex-col gap-4 transition-all duration-300 hover:bg-card-hover hover:border-[rgba(108,99,255,0.4)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              >
                <div className="flex items-center gap-2">
                  <div className="text-2xl" aria-hidden="true">{r.icone}</div>
                  <span className="text-xs font-bold uppercase tracking-wide text-texto-suave">{nomesCategoria[r.categoria]}</span>
                </div>
                <h3 className="text-base">{r.nome}</h3>
                <p className="text-[0.85rem] flex-1">{r.descricao}</p>
                <div className="flex justify-between items-center gap-3 pt-2 border-t border-borda">
                  <span className="font-titulo font-extrabold text-base text-acento">{r.pontos.toLocaleString('pt-BR')} pts</span>
                  <div className="flex items-center gap-2">
                    <Link
                      to={`/recompensas/${r.id}`}
                      className="text-acento font-titulo font-semibold text-[0.8rem] px-2 py-1.5 transition-colors hover:text-texto"
                    >
                      Detalhes
                    </Link>
                    <button
                      className="bg-gradient-to-br from-acento to-destaque border-none rounded-full text-white font-titulo font-semibold text-[0.8rem] px-4 py-1.5 cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(108,99,255,0.25)]"
                      onClick={() => setRecompensaSelecionada(r)}
                    >
                      Resgatar
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ranking */}
      <section className={secao} aria-labelledby="ranking-titulo">
        <div className={container}>
          <div className={secaoTitulo}>
            <span className={labelTag}>Comunidade</span>
            <h2 id="ranking-titulo">Ranking de<br /><span className={textoGradiente}>usuários do mês</span></h2>
            <p className="max-w-[600px] mx-auto text-[1.1rem]">Veja quem está no topo da comunidade MovePoints neste mês.</p>
          </div>

          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-16 items-start mt-10">
            <div className="flex flex-col gap-3" role="list" aria-label="Ranking de usuários">
              {ranking.map((u) => (
                <div
                  key={u.nome}
                  className={`flex items-center gap-4 border rounded-2xl px-6 py-4 transition-all duration-300 hover:bg-card-hover hover:border-[rgba(108,99,255,0.3)] ${u.borda} ${u.fundo || 'bg-card'}`}
                  role="listitem"
                >
                  <div className={`text-2xl w-9 text-center shrink-0 ${u.posLabel === '4º lugar' || u.posLabel === '5º lugar' ? 'font-titulo font-extrabold text-base text-texto-suave' : ''}`} aria-label={u.posLabel}>{u.pos}</div>
                  <div className={`w-[42px] h-[42px] rounded-full flex items-center justify-center font-titulo font-extrabold text-[0.85rem] text-white shrink-0 ${u.avatarBg}`} aria-hidden="true">{u.avatar}</div>
                  <div className="flex-1 flex flex-col">
                    <strong className="text-[0.95rem]">{u.nome}</strong>
                    <span className="text-[0.78rem] text-texto-suave">{u.cidade}</span>
                  </div>
                  <div className="flex flex-col items-end gap-0.5">
                    <span className="text-[0.8rem] text-texto-suave">{u.km}</span>
                    <span className="font-titulo font-bold text-[0.9rem] text-acento">{u.pts}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-card border border-borda rounded-3xl p-10 max-md:p-6 sticky top-[calc(72px+1rem)]">
              <h3 className="text-[1.1rem] mb-10 text-center">Impacto coletivo do mês</h3>
              <div className="flex flex-col gap-6">
                <div className="text-center p-6 bg-[rgba(108,99,255,0.06)] rounded-2xl border border-[rgba(108,99,255,0.15)]">
                  <strong className="block font-titulo text-[2rem] font-extrabold bg-gradient-to-br from-acento to-destaque bg-clip-text text-transparent">1722 km</strong>
                  <span className="text-[0.85rem] text-texto-suave">km percorridos</span>
                </div>
                <div className="text-center p-6 bg-[rgba(108,99,255,0.06)] rounded-2xl border border-[rgba(108,99,255,0.15)]">
                  <strong className="block font-titulo text-[2rem] font-extrabold bg-gradient-to-br from-acento to-destaque bg-clip-text text-transparent">275 kg</strong>
                  <span className="text-[0.85rem] text-texto-suave">de CO₂ evitado</span>
                </div>
                <div className="text-center p-6 bg-[rgba(108,99,255,0.06)] rounded-2xl border border-[rgba(108,99,255,0.15)]">
                  <strong className="block font-titulo text-[2rem] font-extrabold bg-gradient-to-br from-acento to-destaque bg-clip-text text-transparent">284</strong>
                  <span className="text-[0.85rem] text-texto-suave">usuários ativos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={secao} aria-labelledby="cta2-titulo">
        <div className={container}>
          <div className={`${card} text-center p-16 max-md:p-6`}>
            <h2 id="cta2-titulo" className="mb-4">
              Pronto para começar<br /><span className={textoGradiente}>a acumular pontos?</span>
            </h2>
            <p className="max-w-[800px] mx-auto mb-10 text-[1.05rem]">
              Entenda como funciona o sistema de pontuação, desafios e geolocalização
              na página de como funciona.
            </p>
            <div className="flex gap-4 justify-center flex-wrap max-[480px]:flex-col">
              <Link to="/funcionamento" className={`${btnPrimario} max-[480px]:w-full max-[480px]:justify-center`}>Como funciona ↗</Link>
              <Link to="/contato" className={`${btnSecundario} max-[480px]:w-full max-[480px]:justify-center`}>Fale conosco</Link>
            </div>
          </div>
        </div>
      </section>

      <Modal recompensa={recompensaSelecionada} onFechar={() => setRecompensaSelecionada(null)} />
    </>
  )
}

export default Recompensas
