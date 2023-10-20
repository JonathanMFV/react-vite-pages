import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import '../css/Navbar.css';

const Navbar = () => {

  const bounce = useSpring({
    from: { transform: 'translate3d(0,-40px,0)' },
    to: { transform: 'translate3d(0,0px,0)' },
  });

  const [hoverProps, setHover] = useSpring(() => ({
    transform: 'scale(1)',
    color: 'var(--texto-seccion)'
  }));

  const handleMouseEnter = () => {
    setHover({ transform: 'scale(1.1)', color: 'var(--enlace-hover)' });
  };

  const handleMouseLeave = () => {
    setHover({ transform: 'scale(1)', color: 'var(--texto-seccion)' });
  };

  const createAnimatedLink = (to, text) => {
    return (
      <animated.div style={bounce}>
        <li className="nav-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <animated.div style={hoverProps}>
            <Link to={to} className="nav-links">
              {text}
            </Link>
          </animated.div>
        </li>
      </animated.div>
    );
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Duende's Beauty Shop
        </Link>
        <ul className="nav-menu">
          {createAnimatedLink("/", "Inicio")}
          {createAnimatedLink("/galeria", "Galería")}
          {createAnimatedLink("/tienda", "Tienda")}
          {createAnimatedLink("/cursos", "Cursos")}
          {createAnimatedLink("/sobre-mi", "Sobre mí")}
          {createAnimatedLink("/login", "Autenticarse")}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
