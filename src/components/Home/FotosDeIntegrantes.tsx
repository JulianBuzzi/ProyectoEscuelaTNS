import React from 'react'
import { integrantes } from '../../data/data.ts'
import '../../styles/FotoDeIntegrantes.css'

export const FotosDeIntegrantes: React.FC = (): JSX.Element => {
  return (
    <div className='contenedor-de-imagenes-integrantes'>
      {integrantes.map((musico) => (
        <div className='musico-banda' key={musico.id}>
          <figure className='contenedor-datos-musico'>
            <img className='foto-musico' src={musico.urlImagen} alt={musico.nombre}/>
            <p className='nombre-musico'>{musico.nombre}</p>
          </figure>
        </div>
      ))}
    </div>
  )
}
