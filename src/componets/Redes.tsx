import { redes } from '../data/redes'
import '../styles/Redes.css'
import { BarraDeOpciones } from './BarraDeOpciones'

export const Redes: React.FC = (): JSX.Element => {
  return (
    <>
      <BarraDeOpciones />
      <div className="contenedor-de-redes">
        {redes.map((red, i) => (
          <div className='red-social' key={i}>
            <figure>
              <img className='foto-logo' src={red.logo} alt={red.nombre}/>
              <p className='nombre-red'>{red.nombre}</p>
              <a className='enlace-red' href={red.enlace}>Visitar</a>
            </figure>
          </div>
        ))}
      </div>
    </>
  )
}
