import { useState } from 'react'
import '../../styles/Contacto.css'

interface Props{
  correoDestinatario: string
  urlDestinoBoton: string
}

export const Contacto: React.FC<Props> = ({correoDestinatario, urlDestinoBoton}: Props) => {
  const [mostrarForm, setMostrarForm] = useState<boolean>(false)
  
  return (
    <div className='contenedor-principal-contacto'>
      {!mostrarForm 
        ?
        (<>
          <h1 className='texto-principal-contacto'>¡Contáctate con nosotros!</h1>
          <p className='texto-secundario-contacto'>Enviá un correo a @{correoDestinatario} para comunicarte</p>
          <button className='boton-para-enviar-correo' onClick={() => {setMostrarForm(true); location.href=urlDestinoBoton}}>
            Clickeá acá
          </button>
        </>)
        :
          ('')
      }
    </div>
  )
}