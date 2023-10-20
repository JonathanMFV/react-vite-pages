

import '../css/Footer.css'

import FacebookIcon from '../assets/img/facebook-svgrepo-com.svg';
import InstagramIcon from '../assets/img/instagram-svgrepo-com.svg';
import TwitterIcon from '../assets/img/twitter-svgrepo-com.svg';
import LinkTreeIcon from '../assets/img/linktree-svgrepo-com.svg';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-column">
        <h3>Categorías</h3>
        <ul>
          <li>Moda</li>
          <li>Belleza</li>
          <li>Accesorios</li>
          <li>Cursos</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Subcategorías</h3>
        <ul>
          <li>Vestidos</li>
          <li>Maquillaje</li>
          <li>Joyería</li>
          <li>Cursos Online</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Síguenos</h3>
        <ul className="social-media-icons">
          <li><img src={FacebookIcon} alt="Facebook"/></li>
          <li><img src={InstagramIcon} alt="Instagram"/></li>
          <li><img src={TwitterIcon} alt="Twitter"/></li>
          <li><img src={LinkTreeIcon} alt="LinkedIn"/></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
