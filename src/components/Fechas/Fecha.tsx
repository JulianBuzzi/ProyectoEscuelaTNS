import { fechas } from '../../data/fechas'
import '../../styles/Fecha.css'

export const Fecha: React.FC = (): JSX.Element => {
  return (
    <div className="contenedor-de-fechas">
      {fechas.map((fecha, index) => (
        <div className="fecha-individual" key={index}>
          <figure className='texto-fecha'>
            <h1>{fecha.fecha} - {fecha.lugar}</h1>
            <p>Horario: {fecha.horario} HS</p>
            <p>Precio: ${fecha.precioEntrada}</p>
          </figure>
        </div>
      ))}
    </div>
  )
}
