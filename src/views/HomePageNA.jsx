
import '../css/HomePageNA.css'

import BackgroundBanner from "../components/BackgroundBanner";
import Fallback from "../assets/img/fallback.png";
import PromoCard from "../components/PromoCard";

import PromoCardFallBack from "../assets/img/fallback-740-840.png";
import PromoCardTienda from "../assets/img/promo-card-tienda.jpg";
import PromoCardCursos from "../assets/img/promo-card-cursos.png";

import DuendeMainProfilePic from "../assets/img/duende-main-00.png";

function HomePageNA() {
  return (
    <div>
      <BackgroundBanner imgUrl={Fallback}/>
      <div className="promo-cards">
        <PromoCard
          title="Galería"
          text="Descubre nuestras últimas colecciones y tendencias."
          imgSrc={PromoCardFallBack}
        />
        <PromoCard
          title="Tienda"
          text="Lo último en moda y belleza."
          imgSrc={PromoCardTienda}
        />
        <PromoCard
          title="Cursos"
          text="Aprende de los mejores con nuestros cursos online."
          imgSrc={PromoCardCursos}
        />
      </div>

      <div className="owner-profile">
        <img className="owner-image" src={DuendeMainProfilePic} alt="Duende"/>
        <div className="owner-info">
          <h2>Conoce a "La Duende"</h2>
          <p>
            Soy Duende, maquilladora profesional, creadora de contenido y comerciante. Ofrezco clases privadas y también tengo mi propia tienda en Miami: @latiendadeduende. Orgullosamente, fui galardonada con el primer lugar en <i>Maestros del Maquillaje</i> en Canal 7.
            <br></br>
            <br></br>
            Aquí en Duende's Beauty Shop, mi misión es brindarte lo último en belleza y moda, y compartir mi pasión y experiencia contigo. 
            Gracias por acompañarme en esta emocionante travesía.
          </p>
        </div>
      </div>
    </div>
  )
}



export default HomePageNA;
