import ElmesLogo from '../images/ElmesLogo.png'
import { BarraDeOpciones } from './BarraDeOpciones'
import { FotosDeIntegrantes } from './FotosDeIntegrantes'

export const Home: React.FC = (): JSX.Element => {
  return (
  <>
      <div className='container'>
      <div className='contenedor-principal'>
          <img className='logo'
          src={ElmesLogo}
          alt='LogoElmes' />
      </div>
      <BarraDeOpciones />
      <FotosDeIntegrantes />
      </div>
  </>
  )
}
