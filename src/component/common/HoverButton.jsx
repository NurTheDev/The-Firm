import PropTypes from "prop-types";
const HoverButton = ({ content }) => {
  return (
    <div className="flex items-center hover cursor-pointer">
      <div className="relative">
        <div className=" hoverBar"></div>
      </div>
      <div>
        <p className="bg-[#F6F6F6] py-3 px-9 text-[#C4C4C4] text-lg font-black hover:bg-primary transition-all duration-300 hover:text-white">
          {content}
        </p>
      </div>
    </div>
  );
};
HoverButton.propTypes = {
  content: PropTypes.string.isRequired,
};
export default HoverButton;
