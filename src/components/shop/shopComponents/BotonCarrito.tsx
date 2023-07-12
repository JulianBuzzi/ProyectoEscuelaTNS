import '../../../styles/BotonCarrito.css'

export const BotonCarrito: React.FC = (): JSX.Element => {
  const productoAgregado = (): undefined => {
    console.log('añadido')
  }

  return (
    <button className='boton-carrito' onClick={productoAgregado}>
      Añadir
    </button>
  )
}
