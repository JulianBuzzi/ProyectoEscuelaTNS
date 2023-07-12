import { fechas } from '../../data/fechas'
import '../../styles/Fecha.css'

export const Fecha: React.FC = (): JSX.Element => {
  return (
    <div className="contenedor-de-fechas">
      {fechas.map((fecha, index) => (
        <div className="fecha-individual" key={index}>
          <figure className='texto-fecha'>
            <h1 className='fecha-lugar'>{fecha.fecha} - {fecha.lugar}</h1>
            <h3 className='horario-show'>Horario: {fecha.horario} HS</h3>
            <h3 className='precio-ticket'>Precio: ${fecha.precioEntrada}</h3>
            <button className='boton-tickets'>Tickets</button>
          </figure>
        </div>
      ))}
    </div>
  )
}
