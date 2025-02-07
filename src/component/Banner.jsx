import PropTypes from "prop-types";
import Button from "./common/Button";
const Banner = ({ title, description, img }) => {
  return (
    <div className="bannerImg ">
      <div className="container z-10 py-[176px] relative">
        <div className="flexRowBetween ">
          <div className="w-1/2 flexCol items-start space-y-7 z-10">
            <h1 className="text-5xl font-black tracking-[0.96px] text-shadow text-primaryFont leading-16 w-4/5">
              {title}
            </h1>
            <p className="description leading-8 w-1/2">{description}</p>
            <Button btnContant={"Get in Touch"} />
          </div>
          <div className=" absolute -right-20 top-0 h-full">
            <picture>
              <img
                src={img}
                alt=""
                className="rounded-4xl object-cover h-full "
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};
Banner.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string,
};
export default Banner;
