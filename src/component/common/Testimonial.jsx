import Title from "./Title";
import testimonialImg from "../../assets/testimonialImg.jpg";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";
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
          //   pagination={{
          //     clickable: true,
          //   }}
          //   modules={[navigation]}
          //   className="mySwiper"
        >
          <div>
            {testImg.map((data) => (
              <SwiperSlide key={data.id}>
                <div className="w-[250px] h-[250px] rounded-full image-wrapper fourth">
                  <img
                    className="rounded-full object-cover w-full h-full"
                    src={data.name}
                    alt=""
                  />
                </div>
              </SwiperSlide>
            ))}
          </div>
          {/* <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
