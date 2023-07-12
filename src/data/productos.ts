interface Producto {
  id: number
  nombre: string
  urlImagen: string
  precio: number
  cantidad: number
}

export const productos: Producto[] = [
  { id: 1, nombre: 'Puas Elme´s', urlImagen: 'https://cdn.shopify.com/s/files/1/1266/2783/products/cell_standard_black.jpeg?v=1468991328', precio: 100, cantidad: 1 },
  { id: 2, nombre: 'Remera Elme´s', urlImagen: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/027/384/products/remera-bca1-898e91708905abd86f15638284973365-640-0.jpg', precio: 550, cantidad: 1}
]
