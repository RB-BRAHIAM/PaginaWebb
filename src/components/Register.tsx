import '../style/register2.css'
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import user_icon from '../assets/Person.png'
import email_icon from '../assets/Email.png'
import password_icon from '../assets/Password.png'

const Register: React.FC = () => {
  const [action, setAction] = useState<string>("Crea una cuenta");
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>(''); // Para el registro
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (action === "Crea una cuenta") {
        // Llamada al registro
        const res = await axios.post('http://localhost:5000/api/auth/register', { name, email, password });
        localStorage.setItem('token', res.data.token);
        navigate('/home');
      } else if (action === "Iniciar sesión") {
        // Llamada al login
        const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
        localStorage.setItem('token', res.data.token);
        navigate('/home');
      }
    } catch (err: any) {
      setError('Error al enviar la solicitud');
      console.error(err);
      if (err.response) {
        setError(err.response.data.message);
      }
    }
  };

  return (
    <body className='bodyPrin'>
      <form onSubmit={handleSubmit}>
        <div className='container'>
          <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
            <div className="submit-container">
            <div className={action === "Iniciar sesión" ? "submit gray" : "submit"} onClick={() => { setAction("Crea una cuenta") }}>Crea una cuenta</div>
          <div className={action === "Crea una cuenta" ? "submit gray" : "submit"} onClick={() => { setAction("Iniciar sesión") }}>Iniciar sesión</div>
          {error && <p>{error}</p>}
          </div>
          
          <div className="inputs">
            {action === "Iniciar sesión" ? null : (
              <div className="input">
                <img src={user_icon} alt="User icon" />
                <input
                  type="text"
                  placeholder="Nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required={action === "Crea una cuenta"}
                />
              </div>
            )}
            <div className="input">
              <img src={email_icon} alt="Email icon" />
              <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input">
              <img src={password_icon} alt="Password icon" />
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          {action === "Iniciar sesión" && (
            <div className="forgot-password">
              <span>¿Olvidaste tu contraseña?</span>
            </div>
          )}
          <div className="submit-container">
            <button
              type="submit"
              className="submit"
            >
              {action}
            </button>
          </div>
        </div>
       </div>
      </form>
    </body> 
  );
};

export default Register;
