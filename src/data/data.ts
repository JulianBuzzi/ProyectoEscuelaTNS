import imagenNico from '../images/elmes4.jpg'
import imagenJavi from '../images/elmes3.jpg'
import imagenMella from '../images/elmes2.jpg'
import imagenTincho from '../images/elmes7.jpg'
import imagenJuli from '../images/elmes1.jpg'

interface Integrante {
  id: number
  nombre: string
  urlImagen: string
  urlRedSocial?: string
}

export const integrantes: Integrante[] = [
  { id: 1, nombre: 'Nicolás Buzzi', urlImagen: imagenNico, urlRedSocial: 'https://www.instagram.com/buzzinico/' },
  { id: 2, nombre: 'Javier Genario', urlImagen: imagenJavi, urlRedSocial: 'https://www.instagram.com/javiergenario/' },
  { id: 3, nombre: 'Sebastián Mella', urlImagen: imagenMella, urlRedSocial: 'https://www.instagram.com/elme_llita/' },
  { id: 4, nombre: 'Martin Romito', urlImagen: imagenTincho, urlRedSocial: 'https://www.instagram.com/martinromito/' },
  { id: 5, nombre: 'Julián Buzzi', urlImagen: imagenJuli }
]
