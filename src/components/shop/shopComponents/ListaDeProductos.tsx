import { productos } from '../../../data/productos'
import { BotonCarrito } from './BotonCarrito'
import '../../../styles/Shop.css'

export const ListaDeProductos: React.FC = (): JSX.Element => {
  return (
    <div className='contenedor-de-productos'>
      {productos.map((producto) => (
        <div className='producto-item' key={producto.id}>
          <figure className='contenedor-imagen-producto'>
            <img className='imagen-producto' src={producto.urlImagen} alt={producto.nombre} />
          </figure>
          <figure className='contenedor-info-producto'>
            <div className='info-producto'>
              <h2>{producto.nombre}</h2>
              <p>${producto.precio}</p>
              <BotonCarrito />
            </div>
          </figure>
        </div>
      ))}
    </div>
  )
}
