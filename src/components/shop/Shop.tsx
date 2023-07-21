// import { Header } from './shopComponents/Header'
import { ListaDeProductos } from './shopComponents/ListaDeProductos'
import { useState } from 'react'

export const Shop: React.FC = (): JSX.Element => {
  const [total, setTotal] = useState<number>(0)
  const [contadorProductos, setContadorProductos] = useState<number>(0)

  return (
    <div className='contenedor-principal-toda-tienda'>
      <ListaDeProductos
      total={total}
      setTotal={setTotal}
      contadorProductos={contadorProductos}
      setContadorProductos={setContadorProductos}
      />
    </div>
  )
}
