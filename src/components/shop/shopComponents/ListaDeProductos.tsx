import { productos } from '../../../data/productos'
import { BotonCarrito } from './BotonCarrito'
import '../../../styles/Shop.css'

interface Props {
  total: number
  setTotal: React.Dispatch<React.SetStateAction<number>>
  contadorProductos: number
  setContadorProductos: React.Dispatch<React.SetStateAction<number>>
}

export const ListaDeProductos: React.FC<Props> = ({ total, setTotal, contadorProductos, setContadorProductos }: Props): JSX.Element => {
  return (
    <div className='contenedor-de-productos'>
      {productos.map((producto) => (
        <div className='producto-item' key={producto.id}>
          <figure className='contenedor-imagen-producto'>
            <img className='imagen-producto' src={producto.urlImagen} alt={producto.nombre} />
          </figure>
          <figure className='contenedor-info-producto'>
            <div className='info-producto'>
              <h4 className='nombre-producto'>{producto.nombre}</h4>
              <p className='precio-producto'>${producto.precio}</p>
              <BotonCarrito
              esAgregar={true} // Si es true, es boton de agregar, si es false es boton de eliminar producto
              producto={producto}
              total={total}
              setTotal={setTotal}
              contadorProductos={contadorProductos}
              setContadorProductos={setContadorProductos}
              />
              <BotonCarrito
              esAgregar={false} // Si es true, es boton de agregar, si es false es boton de eliminar producto
              producto={producto}
              total={total}
              setTotal={setTotal}
              contadorProductos={contadorProductos}
              setContadorProductos={setContadorProductos}
              />
            </div>
          </figure>
        </div>
      ))}
    </div>
  )
}
