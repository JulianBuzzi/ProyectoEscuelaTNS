import '../../styles/Error.css'
// import { LogoElmes } from '../Logo/LogoElmes'

export const Error: React.FC = (): JSX.Element => {
  return (
    <div className='contenedor-error'>
      {/* <LogoElmes /> */}
      <h1 className='cartel-error'>Lo sentimos, ha ocurrido un error...</h1>
      <a className='link-inicio' href='/'>Volver a inicio.</a>
    </div>
  )
}