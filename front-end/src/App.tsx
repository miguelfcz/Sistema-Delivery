import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login/login';
import Cadastro from './pages/cadastro/cadastro';
import { AuthProvider } from './context/authContext';
import { PrivateRoute } from './router/privateRoute';
import Apresentation from './pages/apresentation/apresentation';
import Dashboard from './pages/dashboard/dashboard';
import Restaurante from './pages/perfil_Restaurante/restaurante';
import CadastroRestaurante from './pages/cadastroRestaurante/cadastroRestaurante';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro-usuario" element={<Cadastro />} />
          <Route path="/home" element={<Apresentation />} />
          <Route path="/dashboardt" element={<Dashboard />} />
          <Route path="/restaurante" element={<Restaurante/>} />
          <Route path="/cadastro-restaurante" element={<CadastroRestaurante/>} />

          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} /> 
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;