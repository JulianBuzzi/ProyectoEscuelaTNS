import '../../../styles/BotonCarrito.css'

interface Props {
  precio: number
  total: number
  setTotal: React.Dispatch<React.SetStateAction<number>>
  contadorProductos: number
  setContadorProductos: React.Dispatch<React.SetStateAction<number>>
}

export const BotonCarrito: React.FC<Props> = ({ precio, total, setTotal, contadorProductos, setContadorProductos }: Props): JSX.Element => {
  const productoAgregado = (): void => {
    setTotal(total + precio)
    setContadorProductos(contadorProductos + 1)
  }

  return (
    <button className='boton-carrito' onClick={productoAgregado}>
      Añadir
    </button>
  )
}
