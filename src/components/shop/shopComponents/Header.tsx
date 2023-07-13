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
      <div className='contenedor-principal-cartel-carrito'>
      {activo
        ? (<div className='contenedor-cartel-carrito'>
            <header className='cartel-carrito'>
              <p className='texto-cantidad-carrito'>Usted tiene {contadorProductos} productos en carrito</p>
            </header>
          </div>)
        : (<div>
            <p className='texto-cantidad-carrito'>Carrito Vacio</p>
          </div>)
      }
      <p className='texto-total-carrito'>Total: ${total}</p>
      </div>
    </div>
  )
}
