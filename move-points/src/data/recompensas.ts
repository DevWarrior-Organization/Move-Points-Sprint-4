import type { CategoriaRecompensa, Recompensa } from '../types'

export const recompensas: Recompensa[] = [
  { id: '1', categoria: 'alimentacao', icone: '🍔', nome: 'iFood — R$ 15 off', descricao: 'Cupom de R$ 15 de desconto no próximo pedido pelo iFood.', pontos: 1200 },
  { id: '2', categoria: 'transporte', icone: '🚇', nome: 'Bilhete Único — R$ 10', descricao: 'Crédito de R$ 10 direto no seu Bilhete Único de transporte.', pontos: 800 },
  { id: '3', categoria: 'lazer', icone: '🎬', nome: 'Cinemark — Ingresso', descricao: '1 ingresso para qualquer sessão 2D no Cinemark.', pontos: 2500 },
  { id: '4', categoria: 'alimentacao', icone: '☕', nome: 'Starbucks — Drink grátis', descricao: 'Qualquer bebida tamanho médio nas lojas participantes.', pontos: 1800 },
  { id: '5', categoria: 'saude', icone: '💊', nome: 'Droga Raia — 15% off', descricao: '15% de desconto em qualquer compra nas farmácias Droga Raia.', pontos: 600 },
  { id: '6', categoria: 'transporte', icone: '🚲', nome: 'Tembici — 1 mês grátis', descricao: '1 mês de assinatura gratuita nas bicicletas compartilhadas Tembici.', pontos: 3000 },
  { id: '7', categoria: 'lazer', icone: '🎮', nome: 'Nuuvem — R$ 20 em games', descricao: 'Crédito de R$ 20 para comprar jogos na plataforma Nuuvem.', pontos: 2000 },
  { id: '8', categoria: 'saude', icone: '🏋️', nome: 'Smart Fit — 1 semana free', descricao: 'Acesso gratuito por 7 dias em qualquer unidade Smart Fit.', pontos: 1500 },
]

export const nomesCategoria: Record<CategoriaRecompensa, string> = {
  alimentacao: 'Alimentação',
  transporte: 'Transporte',
  lazer: 'Lazer',
  saude: 'Saúde',
}
