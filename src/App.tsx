import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Home } from './components/Home/Home'
import { ProximasFechas } from './components/Fechas/ProximasFechas'
import { Redes } from './components/Redes/Redes'
import { Shop } from './components/shop/Shop'
import { NavBar } from './components/Navbar/Navbar'
import { Integrantes } from './components/Integrantes/Integrantes'
import { Error } from './components/Error/Error'

const App = (): JSX.Element => {
  const { pathname } = window.location;
  let pagina = pathname.slice(1).toLowerCase(); 

  const irPagina = (pagina: string): React.ReactNode => {
    switch (pagina) {
      case '':
        return <Home />;
      case 'proximas-fechas':
        return <ProximasFechas />;
      case 'res':
        return <Redes />;
      case 'shop':
        return <Shop />;
      case 'integrantes':
        return <Integrantes />;
      default:
        // Manejo de ruta desconocida
        return <Error />;
    }
  };

  return (
    <>
      <header>
        <NavBar />
      </header>
      {irPagina(pagina)}
    </>
  );
};

export default App;
