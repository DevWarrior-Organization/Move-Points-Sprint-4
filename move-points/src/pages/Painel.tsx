import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import {
  API_BASE_URL,
  ApiRequestError,
  cadastrarUsuario,
  listarFatores,
  listarRanking,
  registrarViagem,
} from '../services/api'
import type { ApiUsuario, FatoresPontuacao, ModalTransporte } from '../services/api'
import { btnPrimario, card, container, labelTag, pageHero, secao, secaoTitulo, textoGradiente } from '../styles/ui'

const inputBase =
  'w-full bg-primaria border border-borda rounded-xl text-texto font-corpo text-base px-4 py-3.5 outline-none transition-colors duration-300 focus:border-acento focus:shadow-[0_0_0_3px_rgba(108,99,255,0.1)]'

const campoLabel = 'block font-titulo font-semibold text-[0.85rem] text-texto-suave uppercase tracking-wide mb-2'

const nomeModal: Record<ModalTransporte, string> = {
  onibus: 'Ônibus',
  metro: 'Metrô',
  trem: 'Trem',
  bicicleta: 'Bicicleta',
}

function formatarPontos(valor: number) {
  return valor.toLocaleString('pt-BR', {
    maximumFractionDigits: 2,
  })
}

function Painel() {
  const [ranking, setRanking] = useState<ApiUsuario[]>([])
  const [fatores, setFatores] = useState<FatoresPontuacao | null>(null)
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [enviando, setEnviando] = useState<'usuario' | 'viagem' | null>(null)
  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState('')
  const [usuarioId, setUsuarioId] = useState('')
  const [tipoTransporte, setTipoTransporte] = useState<ModalTransporte>('onibus')
  const [distanciaKm, setDistanciaKm] = useState('')

  async function carregarDados(mostrarLoading = true) {
    if (mostrarLoading) setCarregando(true)
    setErro('')

    try {
      const [rankingAtual, fatoresAtuais] = await Promise.all([listarRanking(), listarFatores()])
      setRanking(rankingAtual)
      setFatores(fatoresAtuais)
    } catch (error) {
      setErro(error instanceof ApiRequestError ? error.message : 'Não foi possível carregar os dados da API.')
    } finally {
      setCarregando(false)
    }
  }

  useEffect(() => {
    void carregarDados(false)
  }, [])

  async function enviarUsuario(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setEnviando('usuario')
    setErro('')
    setMensagem('')

    try {
      const usuario = await cadastrarUsuario({ nome: nome.trim(), cpf: cpf.trim() })
      setUsuarioId(String(usuario.id))
      setNome('')
      setCpf('')
      setMensagem('Usuário ' + usuario.nome + ' cadastrado com sucesso. ID: ' + usuario.id + '.')
      await carregarDados(false)
    } catch (error) {
      setErro(error instanceof ApiRequestError ? error.message : 'Não foi possível cadastrar o usuário.')
    } finally {
      setEnviando(null)
    }
  }

  async function enviarViagem(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setEnviando('viagem')
    setErro('')
    setMensagem('')

    try {
      const viagem = await registrarViagem({
        usuarioId: Number(usuarioId),
        tipoTransporte,
        distanciaKm: Number(distanciaKm),
      })
      setDistanciaKm('')
      setMensagem(
        'Viagem registrada: ' +
          viagem.distanciaKm +
          ' km de ' +
          nomeModal[viagem.tipoTransporte] +
          ' geraram ' +
          formatarPontos(viagem.pontos) +
          ' pontos.',
      )
      await carregarDados(false)
    } catch (error) {
      setErro(error instanceof ApiRequestError ? error.message : 'Não foi possível registrar a viagem.')
    } finally {
      setEnviando(null)
    }
  }

  return (
    <>
      <section className={pageHero} aria-labelledby="painel-titulo">
        <div className={container}>
          <span className={labelTag + ' animate-fade-in-up'}>🔌 Integração Java</span>
          <h1 id="painel-titulo" className="mb-4 animate-fade-in-up [animation-delay:0.1s]">
            Painel da<br />
            <span className={textoGradiente}>API MovePoints</span>
          </h1>
          <p className="text-[1.15rem] max-w-[680px] mt-4 animate-fade-in-up [animation-delay:0.2s]">
            Cadastre usuários, registre viagens e acompanhe o ranking usando os dados persistidos pela API Java com Spring Boot e Oracle.
          </p>
          <p className="text-[0.85rem] text-texto-suave mt-4">
            Endpoint configurado: <code className="text-acento">{API_BASE_URL}</code>
          </p>
        </div>
      </section>

      <section className={secao} aria-labelledby="acoes-api-titulo">
        <div className={container}>
          <div className={secaoTitulo}>
            <span className={labelTag}>Dados reais</span>
            <h2 id="acoes-api-titulo">Use a API<br /><span className={textoGradiente}>pelo front-end</span></h2>
            <p className="max-w-[680px] mx-auto text-[1.1rem]">
              Os formulários abaixo enviam dados para os endpoints REST do projeto Java.
            </p>
          </div>

          {erro && (
            <div className="mb-8 border border-destaque rounded-2xl bg-[rgba(255,101,132,0.1)] px-5 py-4 text-[0.9rem]" role="alert">
              <strong className="block mb-1">Não foi possível concluir a operação</strong>
              <span>{erro}</span>
            </div>
          )}

          {mensagem && (
            <div className="mb-8 border border-[#4ade80] rounded-2xl bg-[rgba(74,222,128,0.1)] px-5 py-4 text-[0.9rem]" role="status">
              {mensagem}
            </div>
          )}

          <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-6">
            <form className={card + ' flex flex-col gap-5'} onSubmit={enviarUsuario}>
              <div>
                <span className={labelTag}>POST /usuarios</span>
                <h3 className="text-[1.3rem] mb-2">Cadastrar usuário</h3>
                <p className="text-[0.9rem]">Crie um usuário que poderá registrar viagens e acumular pontos.</p>
              </div>

              <div>
                <label className={campoLabel} htmlFor="api-nome">Nome completo</label>
                <input
                  id="api-nome"
                  className={inputBase}
                  value={nome}
                  onChange={(event) => setNome(event.target.value)}
                  placeholder="Ex.: Maria Souza"
                  required
                  minLength={3}
                />
              </div>

              <div>
                <label className={campoLabel} htmlFor="api-cpf">CPF</label>
                <input
                  id="api-cpf"
                  className={inputBase}
                  value={cpf}
                  onChange={(event) => setCpf(event.target.value)}
                  placeholder="Ex.: 111.222.333-44"
                  required
                />
              </div>

              <button className={btnPrimario + ' justify-center'} type="submit" disabled={enviando !== null}>
                {enviando === 'usuario' ? 'Cadastrando...' : 'Cadastrar usuário'}
              </button>
            </form>

            <form className={card + ' flex flex-col gap-5'} onSubmit={enviarViagem}>
              <div>
                <span className={labelTag}>POST /viagens</span>
                <h3 className="text-[1.3rem] mb-2">Registrar viagem</h3>
                <p className="text-[0.9rem]">O Java calcula os pontos pelo modal e pela distância informada.</p>
              </div>

              <div>
                <label className={campoLabel} htmlFor="api-usuario-id">ID do usuário</label>
                <input
                  id="api-usuario-id"
                  className={inputBase}
                  type="number"
                  min={1}
                  value={usuarioId}
                  onChange={(event) => setUsuarioId(event.target.value)}
                  placeholder="ID retornado no cadastro"
                  required
                />
              </div>

              <div>
                <label className={campoLabel} htmlFor="api-transporte">Tipo de transporte</label>
                <select
                  id="api-transporte"
                  className={inputBase}
                  value={tipoTransporte}
                  onChange={(event) => setTipoTransporte(event.target.value as ModalTransporte)}
                >
                  {Object.entries(nomeModal).map(([valor, label]) => (
                    <option key={valor} value={valor}>{label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className={campoLabel} htmlFor="api-distancia">Distância em km</label>
                <input
                  id="api-distancia"
                  className={inputBase}
                  type="number"
                  min="0.1"
                  step="0.1"
                  value={distanciaKm}
                  onChange={(event) => setDistanciaKm(event.target.value)}
                  placeholder="Ex.: 12.5"
                  required
                />
              </div>

              <button className={btnPrimario + ' justify-center'} type="submit" disabled={enviando !== null}>
                {enviando === 'viagem' ? 'Registrando...' : 'Registrar viagem'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className={secao + ' bg-secundaria border-y border-borda'} aria-labelledby="dados-api-titulo">
        <div className={container}>
          <div className={secaoTitulo}>
            <span className={labelTag}>GET /ranking e GET /viagens/fatores</span>
            <h2 id="dados-api-titulo">Dados da<br /><span className={textoGradiente}>comunidade</span></h2>
            <p className="max-w-[680px] mx-auto text-[1.1rem]">
              O ranking e os fatores são carregados diretamente da API Java.
            </p>
          </div>

          {carregando ? (
            <div className="text-center text-texto-suave" role="status">Carregando dados da API...</div>
          ) : (
            <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-6">
              <div className={card}>
                <h3 className="text-[1.2rem] mb-5">Ranking de usuários</h3>
                {ranking.length === 0 ? (
                  <p className="text-texto-suave">Nenhum usuário cadastrado ainda.</p>
                ) : (
                  <ol className="flex flex-col gap-3">
                    {ranking.map((usuario, index) => (
                      <li key={usuario.id} className="flex items-center gap-4 border-b border-borda py-3 last:border-b-0">
                        <span className="font-titulo font-extrabold text-acento w-7">{index + 1}º</span>
                        <span className="flex-1">
                          <strong className="block">{usuario.nome}</strong>
                          <small className="text-texto-suave">ID {usuario.id}</small>
                        </span>
                        <strong className="text-acento">{formatarPontos(usuario.pontosTotal)} pts</strong>
                      </li>
                    ))}
                  </ol>
                )}
              </div>

              <div className={card}>
                <h3 className="text-[1.2rem] mb-5">Fatores por transporte</h3>
                {fatores ? (
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(fatores).map(([modal, fator]) => (
                      <div key={modal} className="bg-primaria border border-borda rounded-2xl p-4">
                        <span className="block text-texto-suave text-[0.85rem]">{nomeModal[modal as ModalTransporte] || modal}</span>
                        <strong className="text-2xl text-acento">{fator} <small className="text-sm">pts/km</small></strong>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-texto-suave">Os fatores ainda não foram carregados.</p>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Painel
