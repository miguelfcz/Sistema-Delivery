import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login/login';
import Cadastro from './pages/cadastro/cadastro';
import { AuthProvider } from './context/authContext';
import { PrivateRoute } from './router/privateRoute';
import Apresentation from './pages/apresentation/apresentation';
import Dashboard from './pages/dashboard/dashboard';
import Restaurante from './pages/perfil_Restaurante/restaurante';
import CadastroRestaurante from './pages/cadastroRestaurante/cadastroRestaurante';
import Search from './pages/search/search';
import AdicionarItem from './pages/AdicionarItemCardapio/AdicionarItemCardapio';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro-usuario" element={<Cadastro />} />
          <Route path="/home" element={<Apresentation />} />

          <Route element={<PrivateRoute />}>
            <Route path="/restaurante" element={<Restaurante />} />
            <Route path="/cadastro-restaurante" element={<CadastroRestaurante />} />
            <Route path="/search" element={<Search />} />"
            <Route path="/adicionar-item" element={<AdicionarItem />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="restaurante/:id" element={<Restaurante />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;