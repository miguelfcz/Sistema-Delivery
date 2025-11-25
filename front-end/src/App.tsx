import React, { useState, type FormEvent} from 'react';
import './App.css';


// Função principal da tela de login
function App() {
  const [email, setEmail] = useState('');
  const [senha, setsenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const API_URL = 'http://localhost:3000/api/auth/login';

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
    setMensagem('Tentando login...');
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email: email,
          senha: senha 
        }),
    });

    if(response.ok) {
      const data = await response.json();

      const token = data.token;

      if (token) {
        localStorage.setItem('userToken', token);
        setMensagem('Login bem-sucedido!');
      } else {
        setMensagem('Login bem-sucedido, mas nenhum token foi recebido.');
      }
    } else {
      const errorData = await response.json();
      setMensagem(`Falha no login: ${errorData.message || 'Email ou senha incorretos.'}`);
    }
  } catch (error) {
    console.error('Erro de requisição:', error);
    setMensagem('Erro ao conectar ao servidor, por favor tente novamente mais tarde.');
  }
}

  return (
    <div className="login-container">
        <h1>Login</h1>
    <form onSubmit={handleLogin} className="login-form">
      <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>
      </div>

      <div className="input-group">
        <label htmlFor="senha">Senha</label>
        <input type="senha"
        id="senha"
        value={senha}
        onChange={(e) => setsenha(e.target.value)}/>

        {mensagem && <p className="mensagem">{mensagem}</p>}
      </div>

      <button type="submit" className="submit-button">Entrar</button>
  </form>
  </div>
  );
}

export default App;