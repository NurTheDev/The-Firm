import Title from "./Title";
import testimonialImg from "../../assets/testimonialImg.jpg";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { EffectCoverflow, Navigation } from "swiper/modules";

const Testimonial = () => {
  const testImg = [
    { id: 1, img: testimonialImg },
    { id: 2, img: testimonialImg },
    { id: 3, img: testimonialImg },
    { id: 4, img: testimonialImg },
    { id: 5, img: testimonialImg },
  ];

  return (
    <div className="container">
      <div className="text-center">
        <Title firstText={"Our"} secondText={"Testimonial"} />
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: -50,
          depth: 100,
          modifier: 4,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Navigation]}
        className="relative py-16"
        navigation={{
          nextEl: ".next-button",
          prevEl: ".prev-button",
        }}
      >
        {testImg.map((data) => (
          <SwiperSlide key={data.id} className="!w-[250px]">
            <div className="relative transition-all duration-300">
              <div className="w-[250px] h-[250px] rounded-full overflow-hidden border-4 border-white/20 transition-all duration-300">
                <img
                  className="w-full h-full object-cover"
                  src={data.img}
                  alt="Testimonial"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Buttons */}
        <div className="flex gap-4 justify-center mt-8">
          <button className="prev-button text-white bg-indigo-400 rounded-md py-2 px-4">
            Back
          </button>
          <button className="next-button text-white bg-indigo-400 rounded-md py-2 px-4">
            Next
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default Testimonial;
