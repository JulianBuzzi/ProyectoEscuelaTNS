import instagram from '../images/logosredes/instagram.png'
import spotify from '../images/logosredes/spotify.png'
import youtube from '../images/logosredes/youtube.png'

interface Redes {
  nombre: string
  logo: string
  enlace?: string
}

export const redes: Redes[] = [
  { nombre: 'Instagram', logo: instagram, enlace: 'https://www.instagram.com/elmes.ok/' },
  { nombre: 'Spotify', logo: spotify, enlace: 'https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz' },
  { nombre: 'Youtube', logo: youtube }
]
