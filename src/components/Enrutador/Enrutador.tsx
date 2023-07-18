import { Home } from '../Home/Home'
import { ProximasFechas } from '../Fechas/ProximasFechas'
import { Redes } from '../Redes/Redes'
import { Shop } from '../shop/Shop'
import { Integrantes } from '../Integrantes/Integrantes'
import { Error } from '../Error/Error'
import { Contacto } from '../Contacto/Contacto'
import { FormularioCorreo } from '../Contacto/FormularioCorreo/FormularioCorreo'

interface Props {
  pagina: string
}

export const Enrutador: React.FC<Props> = ({pagina}: Props): JSX.Element => {
  switch (pagina) {
    case '':
      return <Home />;
    case 'proximas-fechas':
      return <ProximasFechas />;
    case 'redes':
      return <Redes />;
    case 'shop':
      return <Shop />;
    case 'integrantes':
      return <Integrantes />;
    case 'contacto':
      return <Contacto />;
    case 'formulario-correo':
        return <FormularioCorreo />
    default:
      // Manejo de ruta desconocida
      return <Error />;
  }
};