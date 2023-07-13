import { FaShoppingCart } from 'react-icons/fa'
import { useState } from 'react'
import '../../../styles/Header.css'

interface Props {
  total: number
  contadorProductos: number
}

export const Header: React.FC<Props> = ({ total, contadorProductos }: Props): JSX.Element => {
  const [activo, setActivo] = useState(false)

  return (
    <div className='contenedor-principal-header'>
      <div className='contenedor-carrito-compras'>
        <FaShoppingCart className='icono-carrito' onClick={() => { setActivo(!activo) }} />
      </div>
      {activo
        ? (<div className='contenedor-principal-cartel-carrito'>
            <div className='contenedor-cartel-carrito'>
              <header className='cartel-carrito'>
                <p className='texto-cantidad-carrito'>{contadorProductos} productos en carrito</p>
              </header>
            </div>
            <p className='texto-total-carrito'>Total: ${total}</p>
          </div>)
        : ('') // Esto no me gusta mucho, pero no se que se podria poner aca para que sea mejor
      }
    </div>
  )
}
