
import { Link } from 'react-router-dom';
import '../../css/Login.css';  
import LoginWallpaper from '../../assets/img/login-wp.jpg';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-image">
        <img src={LoginWallpaper} alt="Login wallpaper"/>
      </div>
      <div className="login-form-container">
        <h2>Iniciar sesión</h2>
        <form>
          <input type="text" placeholder="Nombre de usuario" required />
          <input type="password" placeholder="Contraseña" required />
          <button type="submit">Iniciar sesión</button>
        </form>
        <p className='nt'>¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link></p>
      </div>
    </div>
  );
};

export default Login;
