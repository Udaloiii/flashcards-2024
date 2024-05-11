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
