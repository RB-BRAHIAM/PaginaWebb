import '../style/login.css'
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      console.log('Login exitoso:', res.data);
      localStorage.setItem('token', res.data.token);
      navigate('/home'); 
    } catch (err: any) {
      console.error(err);
      if (err.response) {
        setError(err.response.data.message || 'Error desconocido');
      } else if (err.request) {
        setError('No se recibió respuesta del servidor');
      } else {
        setError('Error al configurar la solicitud: ' + err.message);
      }
    }
  };

  return (
    <body className='bodyLogin'>
      <div className='divLogin'>
        <h1 className='h1Login'>Iniciar Sesión</h1>
        {error && <p>{error}</p>}
        <form className='formLogin' onSubmit={handleLogin}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Contraseña:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className='btnLogin' type="submit">Iniciar Sesión</button>
        </form>
      </div>
    </body>
  );
};

export default Login;
