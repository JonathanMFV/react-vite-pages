
import '../css/EmergentPopUp.css';

const EmergentPopUp = ({ title, message, type }) => {
  const backgroundColor = type === 'error' ? '#f44336' : '#4caf50';

  return (
    <div className="popup-container" style={{ backgroundColor }}>
      <h4>{title}</h4>
      <p>{message}</p>
    </div>
  );
};

export default EmergentPopUp;
