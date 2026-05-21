export interface MenuItem {
  name: string

  price: number
}

export interface Place {
  id: number

  title: string

  category: string

  region: string

  image: string

  description: string

  promoted?: boolean

  recommendedFor: string[]

  minimumBudget: number

  recommendedBudget: number

  openTime: string

  closeTime: string

  menu?: MenuItem[]
}