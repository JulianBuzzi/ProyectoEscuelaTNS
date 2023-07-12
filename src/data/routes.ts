import { Home } from '../components/Home/Home'
import { ProximasFechas } from '../components/Fechas/ProximasFechas'

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
