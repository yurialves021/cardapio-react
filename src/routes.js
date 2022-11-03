import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio/indext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function AppRouter() {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<Inicio />}/>
        <Route path='/cardapio' element={<Cardapio />} />
      </Routes>
    </Router>


  );
}