import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Produtos from './components/Produtos';
import Produto from './components/Produto';
import Contato from './components/Contato';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='produto' element={<Produtos />} />
        <Route path='produto/:id' element={<Produto />} />
        <Route path='contato' element={<Contato />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
