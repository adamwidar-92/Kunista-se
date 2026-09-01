/**
 * Typdefinitioner för produkter i Kunistas katalog.
 */
export interface ProductSpecification {
  label: string
  value: string
}

export interface Product {
  id: string
  name: string
  category: string
  shortDescription: string
  fullDescription: string
  benefits: string[]
  mainImage: string
  gallery: string[]
  specifications: ProductSpecification[]
  featured?: boolean
  layoutType?: 'classic' | 'fullwidth' | 'cardgrid' | 'heroimage' | 'minimal' | 'dark' | 'tiled' | 'compact' | 'rightimage' | 'alternate'
}
