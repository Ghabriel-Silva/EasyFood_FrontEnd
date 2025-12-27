// types/Product.ts
export interface Product {
  id: string
  name: string
  price: string
  quantity: number | null
  expirationDate: string | null
  isAvailable: boolean
  description: string
  category_id: string | null
  uni_medida: string
  created_at: string
  updated_at: string
}

export interface OrderItem {
  name: string
  product_id: string
  quantity: number
  price: number
}