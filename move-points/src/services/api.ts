export type ModalTransporte = 'onibus' | 'metro' | 'trem' | 'bicicleta'

export interface ApiUsuario {
  id: number
  nome: string
  cpf: string
  pontosTotal: number
}

export interface ApiViagem {
  id: number
  usuarioId: number
  tipoTransporte: ModalTransporte
  distanciaKm: number
  pontos: number
  dataViagem: string
}

export interface NovoUsuario {
  nome: string
  cpf: string
}

export interface NovaViagem {
  usuarioId: number
  tipoTransporte: ModalTransporte
  distanciaKm: number
  dataViagem?: string
}

export type FatoresPontuacao = Record<ModalTransporte, number>

interface ApiErro {
  erro?: string
  message?: string
}

export const API_BASE_URL = (import.meta.env.VITE_API_URL || 'http://localhost:8080').replace(/\/$/, '')

export class ApiRequestError extends Error {
  status: number

  constructor(message: string, status: number) {
    super(message)
    this.name = 'ApiRequestError'
    this.status = status
  }
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  let response: Response

  try {
    response = await fetch(API_BASE_URL + path, {
      ...init,
      headers: {
        'Content-Type': 'application/json',
        ...(init?.headers || {}),
      },
    })
  } catch {
    throw new ApiRequestError(
      'Não foi possível conectar à API Java. Confirme se ela está rodando em http://localhost:8080.',
      0,
    )
  }

  const contentType = response.headers.get('content-type') || ''
  const payload = contentType.includes('application/json')
    ? await response.json() as T | ApiErro
    : null

  if (!response.ok) {
    const erro = payload as ApiErro | null
    throw new ApiRequestError(
      erro?.erro || erro?.message || 'A API retornou um erro inesperado.',
      response.status,
    )
  }

  return payload as T
}

export function listarRanking(): Promise<ApiUsuario[]> {
  return request<ApiUsuario[]>('/ranking')
}

export function listarFatores(): Promise<FatoresPontuacao> {
  return request<FatoresPontuacao>('/viagens/fatores')
}

export function cadastrarUsuario(dados: NovoUsuario): Promise<ApiUsuario> {
  return request<ApiUsuario>('/usuarios', {
    method: 'POST',
    body: JSON.stringify(dados),
  })
}

export function registrarViagem(dados: NovaViagem): Promise<ApiViagem> {
  return request<ApiViagem>('/viagens', {
    method: 'POST',
    body: JSON.stringify(dados),
  })
}

export function atualizarUsuario(id: number, dados: NovoUsuario): Promise<ApiUsuario> {
  return request<ApiUsuario>('/usuarios/' + id, {
    method: 'PUT',
    body: JSON.stringify(dados),
  })
}

export function excluirUsuario(id: number): Promise<void> {
  return request<void>('/usuarios/' + id, { method: 'DELETE' })
}

export function atualizarViagem(id: number, dados: Partial<NovaViagem>): Promise<ApiViagem> {
  return request<ApiViagem>('/viagens/' + id, {
    method: 'PUT',
    body: JSON.stringify(dados),
  })
}

export function excluirViagem(id: number): Promise<void> {
  return request<void>('/viagens/' + id, { method: 'DELETE' })
}
