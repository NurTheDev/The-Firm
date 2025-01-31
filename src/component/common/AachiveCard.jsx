import PropTypes from "prop-types";
const AchiveCard = ({ img, heading, descript }) => {
  return (
    <div className="px-7 py-13 bg-transparent flexCol items-center text-center space-y-3 w-72 rounded-4xl border border-[rgba(250,202,16,0.40)] hover:bg-white transition duration-300 hover:shadow-lg">
      <div>
        <img src={img} alt="" />
      </div>
      <h3 className="mt-3 heading2">{heading}</h3>
      <p className="description">{descript}</p>
    </div>
  );
};
AchiveCard.propTypes = {
  img: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  descript: PropTypes.string.isRequired,
};
export default AchiveCard;
