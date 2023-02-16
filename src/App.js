import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Produtos from './components/Produtos';
import Contato from './components/Contato';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Produtos />} />
        <Route path='produtos' element={<Produtos />} />
        <Route path='contato' element={<Contato />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;