import { LogoElmes } from '../Logo/LogoElmes'
import { FotosDeIntegrantes } from './FotosDeIntegrantes'

export const Home: React.FC = (): JSX.Element => {
  return (
    <>
        <div className='container'>
        <LogoElmes />
        <FotosDeIntegrantes />
        </div>
    </>
  )
}
