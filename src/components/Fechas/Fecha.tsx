// import { fechas } from '../../data/fechas'
import '../../styles/Fecha.css'
import { useState, useEffect } from 'react'

interface Fechas {
  fecha: string
  lugar: string
  horario: number
  precioEntrada: number
  urlAdquirirTickets: string // Cuando el usuario da click en el botón ticket se lo redirecciona con este url al sitio donde puede adquirir tickets
}

export const Fecha: React.FC = (): JSX.Element => {
  const [fechas, setFechas] = useState<Fechas[]>([])

  useEffect(() => {
    void obtenerDatos()
  }, [])

  const obtenerDatos = async (): Promise<void> => {
    try {
      const data = await fetch('http://localhost:5173/src/data/fechas.json')
      const fechas: Fechas[] = await data.json()
      setFechas(fechas)
    } catch (error) {
      alert('Se ha producido un error al cargar las fechas')
    }
  }
  
  return (
    <div className="contenedor-de-fechas">
      {fechas.map((fecha, index) => {
        return (
          <div className="fecha-individual" key={index}>
            <figure className='texto-fecha'>
              <h1 className='fecha-lugar'>{fecha.fecha} - {fecha.lugar}</h1>
              <h3 className='horario-show'>Horario: {fecha.horario} HS</h3>
              <h3 className='precio-ticket'>Precio: ${fecha.precioEntrada}</h3>
              <button className='boton-tickets' onClick={() => location.href=fecha.urlAdquirirTickets}>
                Tickets
              </button>
            </figure>
          </div>
        )
      })}
    </div>
  )
}
