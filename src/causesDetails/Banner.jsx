import PropTypes from "prop-types";
import Title from "../component/common/Title";
import Button from "../component/common/Button";
import reaserhImg from "../assets/Causes/card3Banner.png";
import HeadingImg from "../assets/Rectangle 64.png";
import HeadingImg2 from "../assets/secondsCard.png";
import HeadingImg3 from "../assets/thirdCard.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className={"nextArrow"} onClick={onClick}>
      <IoIosArrowForward />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className={"prevArrow"} onClick={onClick}>
      <IoIosArrowBack />
    </div>
  );
}
const Research = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const ResearchImg = [
    { id: 1, name: reaserhImg },
    { id: 2, name: HeadingImg },
    { id: 3, name: HeadingImg2 },
    { id: 4, name: HeadingImg3 },
  ];
  return (
    <div className="bg-[#f6f6f6] pb-10">
      <div className="container">
        <div className=" flexRowBetween py-16 ">
          <div className="flexCol items-start w-1/3 space-y-4 ">
            <Title firstText={"Find Your"} secondText={"Solution"} />
            <p className="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry&apos;s
              standard dummy text ever since the 1500s, when an unknown printer
              took. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type Lorem Ipsum is simply dummy text of
              the printing and typesetting industry.
            </p>
            <div className="flex gap-x-5 mt-10">
              <Button btnContant={"Digital Partners"} />
              <Button btnContant={"Coaching"} />
            </div>
          </div>
          <div className="slider-container w-[50%] relative bgCircle">
            <Slider {...settings} className="bg-white rounded-3xl p-3 ">
              {ResearchImg.map((data) => {
                return (
                  <div key={data.id}>
                    <img
                      className="w-full rounded-3xl object-contain"
                      src={data.name}
                      alt=""
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};
Research.propTypes = {
  className: PropTypes.string,
};
SampleNextArrow.propTypes = {
  onClick: PropTypes.func,
};
SamplePrevArrow.propTypes = {
  onClick: PropTypes.func,
};
export default Research;
