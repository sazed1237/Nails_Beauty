export interface Services {
  categories: Category[]
}

export interface Category {
  id: string
  title: string
  tabName: string
  slug: string
  description: string
  imageSrc: string
  services: Service[]
  extras?: Extra[]
  duration?: Duration
  extra_info?: string
}

export interface Service {
  id: string
  title: string
  slug: string
  variations?: Variation[]
  price?: number
  duration?: number
  price_from?: number
}

export interface Variation {
  label: string
  price: number
  is_defalut?: boolean
}

export interface Extra {
  id: string
  title: string
  slug: string
  price: number
}

export interface Duration {
  min: number
  max: number
}
