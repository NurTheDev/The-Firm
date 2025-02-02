import Title from "./Title";
import testimonialImg from "../../assets/testimonialImg.jpg";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { EffectCoverflow, Navigation } from "swiper/modules";

const Testimonial = () => {
  const testImg = [
    { id: 1, name: testimonialImg },
    { id: 2, name: testimonialImg },
    { id: 3, name: testimonialImg },
    { id: 4, name: testimonialImg },
    { id: 5, name: testimonialImg },
  ];
  return (
    <div className="container">
      <div className="text-center">
        <Title firstText={"Our"} secondText={"Testimonial"} />
      </div>
      <div>
        <Swiper
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={20}
          grabCursor={true}
          loop={true}
          //   navigation
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <div>
            {testImg.map((data) => (
              <SwiperSlide key={data.id}>
                <div
                  className={`w-[250px] h-[250px] rounded-full image-wrapper ${
                    data.id === 3 ? "fourth" : ""
                  }`}
                >
                  <img
                    className="rounded-full object-cover w-full h-full"
                    src={data.name}
                    alt=""
                  />
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
