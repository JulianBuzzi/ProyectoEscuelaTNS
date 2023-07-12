import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Home } from './components/Home/Home'
import { ProximasFechas } from './components/Fechas/ProximasFechas'
import { useState } from 'react'
import { Redes } from './components/Redes/Redes'
import { Shop } from './components/shop/Shop'
import { NavBar } from './components/Navbar/Navbar'
// import { routes } from './data/routes'

export const routes = [
  {
    path: '/',
    Component: Home
  },
  {
    path: '/proximas-fechas',
    Component: ProximasFechas
  }
]

const App = (): JSX.Element => {
  const [pagina, setPagina] = useState(() => {
    const { pathname } = window.location
    const page = pathname.slice(1)
    return page
  })

  const irPagina = (): JSX.Element | undefined => {
    if (pagina === '') {
      return <Home />
    } else if (pagina === 'proximas-fechas') {
      return <ProximasFechas />
    } else if (pagina === 'redes') {
      return <Redes />
    } else if (pagina === 'shop') {
      return <Shop />
    }
  }

  const cambioPagina = (newPagina: string) => (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    window.history.pushState(null, '', `/${newPagina}`)
    setPagina(newPagina)
  }

  return (
    <>
      <header>
        <NavBar />
        <a href='/' onClick={cambioPagina('')} />
        <a href='/proximas-fechas' onClick={cambioPagina('proximas-fechas')} />
        <a href='/redes' onClick={cambioPagina('redes')} />
        <a href='/shop' onClick={cambioPagina('shop')} />
      </header>
      {irPagina()}
    </>
  )
}

export default App
