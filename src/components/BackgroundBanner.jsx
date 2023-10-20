
import PropTypes from 'prop-types';
import '../css/BackgroundBanner.css';

const BackgroundBanner = ({ imgUrl }) => (
  <div className="background-banner" style={{ backgroundImage: `url(${imgUrl})` }}></div>
);

BackgroundBanner.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};

export default BackgroundBanner;
