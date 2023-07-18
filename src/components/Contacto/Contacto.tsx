import { useState } from 'react'
import '../../styles/Contacto.css'

export const Contacto: React.FC = () => {
  const [mostrarForm, setMostrarForm] = useState(false)
  
  return (
    <div className='contenedor-principal-contacto'>
      {!mostrarForm 
        ?
        (<>
          <h1 className='texto-principal-contacto'>¡Contáctate con nosotros!</h1>
          <p className='texto-secundario-contacto'>Enviá un correo a @elmesok.com para comunicarte</p>
          <button className='boton-para-enviar-correo' onClick={() => {setMostrarForm(true); location.href='/formulario-correo'}}>
            Clickeá acá
          </button>
        </>)
        :
          ('')
      }
    </div>
  )
}