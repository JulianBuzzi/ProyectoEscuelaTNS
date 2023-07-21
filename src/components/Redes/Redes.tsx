import { redes } from '../../data/redes'
import '../../styles/Redes.css'

export const Redes: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="contenedor-de-redes">
        {redes.map((red, index) => (
          <div className='red-social' key={index}>
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
