import { Header } from './shopComponents/Header'
import { ListaDeProductos } from './shopComponents/ListaDeProductos'
import { useState } from 'react'

export const Shop: React.FC = (): JSX.Element => {
  const [todosLosProductos, setTodosLosProductos] = useState([])
  const [total, setTotal] = useState(0)
  const [contadorProductos, setContadorProductos] = useState(0)

  return (
    <>
      <Header total={10} contadorProductos={contadorProductos} />
      <ListaDeProductos />
    </>
  )
}
