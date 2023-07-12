import { fechas } from '../../data/fechas'
import '../../styles/Fecha.css'

export const Fecha: React.FC = (): JSX.Element => {
  return (
    <div className="contenedor-de-fechas">
      {fechas.map((fecha, index) => {
        return (
          <div className="fecha-individual" key={index}>
            <figure className='texto-fecha'>
              <h1 className='fecha-lugar'>{fecha.fecha} - {fecha.lugar}</h1>
              <h3 className='horario-show'>Horario: {fecha.horario} HS</h3>
              <h3 className='precio-ticket'>Precio: ${fecha.precioEntrada}</h3>
              <button className='boton-tickets'>
                <a href={fecha.urlAdquirirTickets}>Tickets</a> {/* Esto no me gusta, lo ideal seria que al clickear cualquier parte del botón me lleve al link */}
              </button>
            </figure>
          </div>
        )
      })}
    </div>
  )
}
