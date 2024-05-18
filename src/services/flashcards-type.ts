// deck-types

export type Author = {
  id: string
  name: string
}

export type DeckType = {
  author: Author
  cardsCount: number
  cover?: null | string
  created: string
  id: string
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}

export type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}

export type GetDeckResponse = {
  items: DeckType[]
  maxCardsCount: number
  pagination: Pagination
}

export type GetDecksArgs = {
  authorId?: string
  currentPage?: number
  itemsPerPage?: number
  maxCardsCount?: number
  minCardsCount?: number
  name?: string
  orderBy?: string
}

export type GetDeckById = {
  id: string
}

export type CreateDeckArgs = {
  cover?: string // потом наверное поменять
  isPrivate?: boolean
  name: string
}

export type GetMinMaxResponse = {
  max: number
  min: number
}

export type UpdateDeckArgs = {
  cover?: string
  isPrivate?: boolean
  name?: string
}

// auth-types
export type User = {
  avatar?: string
  created: string
  email: string
  id: string
  isEmailVerified: boolean
  name: string
  updated: string
}

export type LoginType = {
  email: string
  password: string
  rememberMe: boolean
}

export type SignUpArg = {
  email: string
  html?: string
  name?: string
  password: string
  sendConfirmationEmail?: boolean
  subject?: string
}

// CARDS
export type GetCardResponse = {
  answer: string
  answerImg: string
  answerVideo: string
  created: string
  deckId: string
  grade: number
  id: string
  question: string
  questionImg: string
  questionVideo: string
  shots: number
  updated: string
  userId: string
}

export type UpdateCardRequest = {
  answer?: string
  answerImg?: string
  answerVideo?: string
  question?: string
  questionImg?: string
  questionVideo?: string
}
