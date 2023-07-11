import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Home } from './componets/Home'
import { ProximasFechas } from './componets/ProximasFechas'
import { useState } from 'react'
import { Redes } from './componets/Redes'
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
        <a href='/' onClick={cambioPagina('')} />
        <a href='/proximas-fechas' onClick={cambioPagina('proximas-fechas')} />
        <a href='/redes' onClick={cambioPagina('redes')} />
      </header>
      {irPagina()}
    </>
  )
}

export default App
