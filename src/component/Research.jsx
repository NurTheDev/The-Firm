import PropTypes from "prop-types";
import Title from "./common/Title";
import Button from "./common/Button";
import reaserhImg from "../assets/research.png";
import HeadingImg from "../assets/Rectangle 64.png";
import HeadingImg2 from "../assets/secondsCard.png";
import HeadingImg3 from "../assets/thirdCard.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={"nextArrow"} onClick={onClick}>
      <IoIosArrowForward />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
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
    <div className="bg-white py-24 ">
      <div className="container">
        <div className="flexCol items-center">
          <Title firstText={"Our Research & Case "} secondText={"Studies"} />
          <p className="description mt-7 w-2/3 text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries,
          </p>
        </div>
        <div className="mt-14 flex justify-around items-center ">
          <div className="flexCol items-start w-1/3 space-y-4">
            <h3 className="heading2">Lorem Ipsum is simply</h3>
            <p className="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry&apos;s
              standard dummy text ever since the 1500s, when an unknown printer
              took.
            </p>
            <Button btnContant={"Read More"} />
          </div>
          <div className="slider-container w-1/3 relative bgCircle">
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
  onclick: PropTypes.string,
};
export default Research;
