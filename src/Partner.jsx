import Title from "./component/common/Title";
import brave from "./assets/partner/brave.png";
import firefox from "./assets/partner/firefox.png";
import opera from "./assets/partner/opera.png";
import google from "./assets/partner/google.png";
import safari from "./assets/partner/safari.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Partner = () => {
  const partner = [
    { id: 1, img: brave },
    { id: 2, img: firefox },
    { id: 3, img: opera },
    { id: 4, img: google },
    { id: 5, img: safari },
    // { id: 6, img: window },
  ];
  console.log(partner);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
  };
  return (
    <div className="text-center my-24 container">
      <Title firstText={"Our"} secondText={"Partner"} />
      <Slider {...settings} className=" mt-16">
        {partner.map((data) => (
          <div key={data.id} className="px-8 ">
            {" "}
            {/* Add padding for gap */}
            <div className="bg-[#F6F6F6] p-6 rounded-xl flex items-center justify-center shadow-md hover:shadow-2xl transition">
              <img
                className="w-[120px] h-[120px] object-contain imgGrayscale"
                src={data.img}
                alt={`Partner ${data.id}`}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Partner;
