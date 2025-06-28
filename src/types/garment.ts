export type Garment = {
  _id: string
  title: string
  description: string
  price: number
  sizes: string[]
  colors: string[]
  section: string
  type: string
  styleName?: string
  categoryName?: string
  imageUrl?: string
  gallery?: string[]
  slug?: { current: string }
}
