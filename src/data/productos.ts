interface Producto {
  id: number
  nombre: string
  urlImagen: string
  precio: number
  cantidad: number
}

export const productos: Producto[] = [
  { id: 1, nombre: 'Puas Elme´s', urlImagen: 'https://cdn.shopify.com/s/files/1/1266/2783/products/cell_standard_black.jpeg?v=1468991328', precio: 100, cantidad: 1 }
]
