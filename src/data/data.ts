import imagenNico from '../images/elmes4.jpg'
import imagenJavi from '../images/elmes3.jpg'
import imagenMella from '../images/elmes2.jpg'
import imagenTincho from '../images/elmes7.jpg'
import imagenJuli from '../images/elmes1.jpg'

interface Integrante {
  id: number
  nombre: string
  urlImagen: string
}

export const integrantes: Integrante[] = [
  { id: 1, nombre: 'Nicolas', urlImagen: imagenNico },
  { id: 2, nombre: 'Javier', urlImagen: imagenJavi },
  { id: 3, nombre: 'Mella', urlImagen: imagenMella },
  { id: 4, nombre: 'Martin', urlImagen: imagenTincho },
  { id: 5, nombre: 'Julian', urlImagen: imagenJuli }
]
