import ElmesLogo from '../../images/ElmesLogo.png'

export const LogoElmes: React.FC = (): JSX.Element => {
  return (
    <div className='contenedor-principal'>
      <img className='logo'
        src={ElmesLogo}
        alt='LogoElmes' />
      </div>
  )
}