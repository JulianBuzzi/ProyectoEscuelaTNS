import '../../../styles/BotonCarrito.css'

interface Props {
  esAgregar: boolean
  producto: {
    price: number
    cantidad: number
  }
  total: number
  setTotal: React.Dispatch<React.SetStateAction<number>>
  contadorProductos: number
  setContadorProductos: React.Dispatch<React.SetStateAction<number>>
}

export const BotonCarrito: React.FC<Props> = ({ esAgregar, producto, total, setTotal, contadorProductos, setContadorProductos }: Props): JSX.Element => {
  const productoAgregado = (): void => {
    setTotal(total + producto.price)
    setContadorProductos(contadorProductos + 1)
    producto.cantidad += 1
  }

  const productoEliminado = (): void => {
    if (producto.cantidad >= 1) {
      setTotal(total - producto.price)
      setContadorProductos(contadorProductos - 1)
      producto.cantidad -= 1
    }
  }

  return (
    <>
      { esAgregar
        ? (<button className='boton-carrito' onClick={productoAgregado}>
              Añadir
            </button>
          )
        : (<button className='boton-carrito-eliminar' onClick={productoEliminado}>
            Quitar
          </button>
          )
        }
    </>
  )
}

// Esto deberia resolverlo utilizando un contexto, esto es provisorio para comenzar a darle funcionalidad
