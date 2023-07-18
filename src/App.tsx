import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Enrutador } from './components/Enrutador/Enrutador';
import { NavBar } from './components/Navbar/Navbar';


const App = (): JSX.Element => {
  const { pathname } = window.location;
  let pagina = pathname.slice(1).toLowerCase(); 
  return (
    <>
      <NavBar />
      <Enrutador pagina={pagina}/>
    </>
  );
};

export default App;
