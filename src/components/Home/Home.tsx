import ElmesLogo from '../../images/ElmesLogo.png'
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
      <FotosDeIntegrantes />
      </div>
  </>
  )
}
