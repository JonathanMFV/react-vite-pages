import '../css/PromoCard.css';

const PromoCard = ({ title, text, imgSrc, imgSide }) => {
  const orientation = imgSide === "reverse" ? "reverse" : "normal";
  return (
    <div className={`promo-card ${orientation}`}>
      <div className="promo-image">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="promo-content">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default PromoCard;
