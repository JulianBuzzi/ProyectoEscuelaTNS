import { FaShoppingCart } from 'react-icons/fa'
import { useState } from 'react'
import '../../../styles/Header.css'

interface Props {
  total: number
  contadorProductos: number
  setProductosPorPagina: React.Dispatch<React.SetStateAction<number>>
  totalProductos: number
  productosPorPagina: number
}

export const Header: React.FC<Props> = ({ total, contadorProductos, setProductosPorPagina, totalProductos, productosPorPagina }: Props): JSX.Element => {
  const [activo, setActivo] = useState<boolean>(false)

  const handleCantProdInPage = (e: React.ChangeEvent<HTMLInputElement>):  void => {
    const value = parseInt(e.target.value)
    setProductosPorPagina(value)
  }

  return (
    <div className='contenedor-principal-header'>
      <div className='contenedor-carrito-compras'>
        <FaShoppingCart className='icono-carrito' onClick={() => { setActivo(!activo) }} />
      </div>
      <div className='contenedor-filtro-cantidad-productos'>
        <label className='texto-cantidad-prod'>Cantidad de Productos por página</label>
        <input className='barra-cantidad' type='range' id='cantProd' min={1} max={totalProductos} onChange={handleCantProdInPage} />
        <span className='cant-prod-en-pantalla'>{productosPorPagina}</span>
      </div>
      <p className='texto-barra-superior'>Clickeá para ver tu carrito</p>
      {activo
        ? (<div className='contenedor-principal-cartel-carrito'>
            <div className='contenedor-cartel-carrito' >
              <header className='cartel-carrito'>
                {contadorProductos >= 0
                  ? (<p className='texto-cantidad-carrito'>{contadorProductos} productos en carrito</p>)
                  : (<p className='texto-cantidad-carrito'>0 productos en carrito</p>)
                }
              </header>
            </div>
            {total > 0
              ? (<p className='texto-total-carrito'>Total: ${total.toFixed(2)}</p>) // Esto lo tengo que mejorar
              : (<p className='texto-total-carrito'>Carrito Vacio</p>)
            }
          </div>)
        : ('') // Esto no me gusta mucho, pero no se que se podria poner aca para que sea mejor
      }
    </div>
  )
}
