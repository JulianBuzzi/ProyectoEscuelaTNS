import { Header } from './shopComponents/Header'
import { ListaDeProductos } from './shopComponents/ListaDeProductos'

export const Shop: React.FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <ListaDeProductos />
    </>
  )
}
