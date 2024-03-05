import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const AuthorizationPage = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [registerName, setRegisterName] = useState('');
  const [registerSurname, setRegisterSurname] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerError, setRegisterError] = useState('');

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('backendAPI/authentication/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });

      const data = await response.json();

      if (data.success) {
        // Giriş başarılıysa ana sayfaya yönlendir
        navigate('/home');
      } else {
        setLoginError(data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleRegister = async () => {
    try {
      const response = await fetch('backendAPI/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: registerName,
          surname: registerSurname,
          email: registerEmail,
          password: registerPassword,
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Kayıt başarılıysa alert göster ve kutucukları temizle
        alert('Registration successful!');
        setRegisterName('');
        setRegisterSurname('');
        setRegisterEmail('');
        setRegisterPassword('');
      } else {
        setRegisterError(data.message);
      }
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="main-container" >
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            
            <form className='form'>
            <h2 className="text1">Register</h2>
              <div className="mb-3">
                <label className="form-label">Name:</label>
                <input type="text" className="form-control" value={registerName} onChange={(e) => setRegisterName(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">Surname:</label>
                <input type="text" className="form-control" value={registerSurname} onChange={(e) => setRegisterSurname(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">Email:</label>
                <input type="email" className="form-control" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">Password:</label>
                <input type="password" className="form-control" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} />
              </div>
              <button type="button" className="btn btn-primary" onClick={handleRegister}>
                Register
              </button>
              {registerError && <div style={{ color: 'red' }}>{registerError}</div>}
            </form>
          </div>

          <div className="col-md-6">
            
            <form className='form'>
            <h2 className="text1" >Login</h2>  
              <div className="mb-3">
                <label className="form-label">Email:</label>
                <input type="email" className="form-control" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">Password:</label>
                <input type="password" className="form-control" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
              </div>
              <button type="button" className="btn btn-primary" onClick={handleLogin}>
                Login
              </button>
              {loginError && <div style={{ color: 'red' }}>{loginError}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorizationPage;
