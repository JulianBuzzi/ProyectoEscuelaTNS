// import { productos } from '../../../data/productos'
import { BotonCarrito } from './BotonCarrito'
import '../../../styles/Shop.css'
import { useState, useEffect } from 'react'
import { Paginacion } from './Paginacion'
import { Header } from './Header'

interface Props {
  total: number
  setTotal: React.Dispatch<React.SetStateAction<number>>
  contadorProductos: number
  setContadorProductos: React.Dispatch<React.SetStateAction<number>>
}

interface Producto {
  id: number
  title: string
  price: number
  image: string
  cantidad: number
}

export const ListaDeProductos: React.FC<Props> = ({ total, setTotal, contadorProductos, setContadorProductos }: Props): JSX.Element => {
  const [productos, setProductos] = useState<Producto[]>([])
  const [paginaActual, setPaginaActual] = useState<number>(1)
  const [productosPorPagina, setProductosPorPagina] = useState<number>(3)
  
  
  const ultimoProductoPagina = productosPorPagina * paginaActual //Operación aritmética que determina el último producto del array de productos que se muestra en la pagina
  const primerProductoPagina = ultimoProductoPagina - productosPorPagina //Determina el primer producto del array de productos que se muestra en la página

  useEffect(() => {
    void obtenerDatos()
  }, [])

  const obtenerDatos = async (): Promise<void> => {
    try {
      const data = await fetch('https://fakestoreapi.com/products')
      const users: Producto[] = await data.json()
      const productosConCantidadInicial = users.map((producto) => ({ ...producto, cantidad: 0 }))
      setProductos(productosConCantidadInicial)
    } catch (error) {
      alert('Se ha producido un error al cargar los productos')
    }
  }

  return (
    <>
      <Header
      total={total}
      contadorProductos={contadorProductos}
      productosPorPagina={productosPorPagina}
      setProductosPorPagina={setProductosPorPagina}
      totalProductos={productos.length}
      />
      <div className='contenedor-de-productos'>
        {productos.map((producto) => (
          <div className='producto-item' key={producto.id}>
            <figure className='contenedor-imagen-producto'>
              <img className='imagen-producto' src={producto.image} alt={producto.title} />
            </figure>
            <figure className='contenedor-info-producto'>
              <div className='info-producto'>
                <h3 className='nombre-producto'>{producto.title}</h3>
                <p className='precio-producto'>${producto.price}</p>
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
        )).slice(primerProductoPagina, ultimoProductoPagina)}
      </div>
      <Paginacion 
      paginaActual={paginaActual}
      setPaginaActual={setPaginaActual}
      productosPorPagina={productosPorPagina}
      totalProductos={productos.length}
      />
    </>
  )
}
