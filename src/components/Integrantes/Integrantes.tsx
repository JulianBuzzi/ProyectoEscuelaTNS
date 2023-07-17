import { useState, useEffect } from 'react'
import '../../styles/Integrante.css'

interface Integrante {
  id: number
  name: string
  status: string
  image: string
}

export const Integrantes: React.FC = () => {
  const [integrante, setIntegrante] = useState<Integrante[]>([])

  useEffect(() => {
    void obtenerIntegrantes()
  }, [])
  // Pido a la Api de Rick & Morty algunos personajes

  const obtenerIntegrantes = async (): Promise<void> => {
    try {
      const datos = await fetch('https://rickandmortyapi.com/api/character/[1,2,3,183]')
      const integrantes: Integrante[] = await datos.json()
      setIntegrante(integrantes)
    } catch (error) {
      alert('Se produjo un error leyendo los integrantes!')
    }
  }

  return (
    <>
      <div className='contenedor-principal-integrantes'>
        {integrante.map((inte) => (
          <div className='integrante-contenedor' key={inte.id}>
            <figure className='integrante'>
              <img className='foto-integrante' src={inte.image} alt='Imagen integrante' />
              <h1 className='nombre-integrante'>{inte.name}</h1>
              <p className='status-integrante'>{inte.status}</p>
            </figure>
          </div>
        ))}
      </div>
    </>
  )
}
