import { Header } from './shopComponents/Header'
import { ListaDeProductos } from './shopComponents/ListaDeProductos'
import { useState } from 'react'

export const Shop: React.FC = (): JSX.Element => {
  const [total, setTotal] = useState(0)
  const [contadorProductos, setContadorProductos] = useState(0)

  return (
    <div className='contenedor-principal-toda-tienda'>
      <Header
      total={total}
      contadorProductos={contadorProductos} />
      <ListaDeProductos
      total={total}
      setTotal={setTotal}
      contadorProductos={contadorProductos}
      setContadorProductos={setContadorProductos}
      />
    </div>
  )
}
