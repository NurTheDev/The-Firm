import PropTypes from "prop-types";

const button = ({ btnContant }) => {
  return <div className="btn">{btnContant}</div>;
};
button.propTypes = {
  btnContant: PropTypes.string.isRequired,
};
export default button;
