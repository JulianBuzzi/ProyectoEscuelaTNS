import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Home } from './components/Home/Home'
import { ProximasFechas } from './components/Fechas/ProximasFechas'
import { useState } from 'react'
import { Redes } from './components/Redes/Redes'
import { Shop } from './components/shop/Shop'
import { NavBar } from './components/Navbar/Navbar'
import { Integrantes } from './components/Integrantes/Integrantes'

const App = (): JSX.Element => {
  const [pagina, setPagina] = useState(() => {
    const { pathname } = window.location
    const page = pathname.slice(1)
    return page
  })

  // Esto se puede resolver mejor con react router, pero los tutoriales que vi en youtube estaban desactualizados y no me funcionaba

  const irPagina = (): JSX.Element | undefined => {
    if (pagina === '') {
      return <Home />
    } else if (pagina === 'proximas-fechas') {
      return <ProximasFechas />
    } else if (pagina === 'redes') {
      return <Redes />
    } else if (pagina === 'shop') {
      return <Shop />
    } else if (pagina === 'integrantes') {
      return <Integrantes />
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
        <a href='/integrantes' onClick={cambioPagina('integrantes')} />
      </header>
      {irPagina()}
    </>
  )
}

export default App
