import { useState, useRef } from "react";
import Title from "./Title";
import testimonialImg from "../../assets/testimonialImg.jpg";
import testimonialImg2 from "../../assets/testimonialImg2.jpg";
import testimonialImg3 from "../../assets/testimonialImg3.jpg";
import testimonialImg4 from "../../assets/testimonialImg4.jpg";
import testimonialImg5 from "../../assets/testimonialImg5.jpg";
import testimonialImg6 from "../../assets/testimonialImg6.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// import "swiper/css";
import "swiper/css/pagination";
// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";
// import "swiper/modules/pagination/pagination.min.css";
const testimonialData = [
  {
    id: 1,
    img: testimonialImg,
    Name: "Nur Islam",
    role: "MERN Stack Developer",
    Description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia quod deleniti non dolor totam laborum odio commodi aliquam, quidem repellat necessitatibus odit quasi repudiandae, aut dolorum quae eaque iure sequi!",
  },
  {
    id: 2,
    img: testimonialImg2,
    Name: "Ethan Carter ",
    role: "Software Engineer",
    Description:
      "From early letterpress techniques to contemporary digital printing, Lorem Ipsum has adapted to countless technologies. This dummy text is beloved by designers for its natural flow, ensuring that content spacing and font choices can be tested thoroughly.",
  },
  {
    id: 0,
    img: testimonialImg3,
    Name: "Sophia Mitchell",
    role: "Graphic Designer",
    Description:
      "Modern web developers and graphic artists continue to use Lorem Ipsum for wireframes, style guides, and prototypes. It effectively mimics real text without distracting from the overall design, maintaining focus on structure and aesthetics.",
  },
  {
    id: 3,
    img: testimonialImg4,
    Name: "Liam Rodriguez",
    role: "Data Analyst",
    Description:
      "Although it appears nonsensical, Lorem Ipsum contains fragments of classic Latin works. Over time, it has become an indispensable tool for demonstrating the visual form of a document or website without relying on meaningful content.",
  },
  {
    id: 4,
    img: testimonialImg5,
    Name: "Olivia Bennett",
    role: " Cybersecurity Specialist",
    Description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia quod deleniti non dolor totam laborum odio commodi aliquam, quidem repellat necessitatibus odit quasi repudiandae, aut dolorum quae eaque iure sequi!",
  },
  {
    id: 5,
    img: testimonialImg6,
    Name: "Noah Sullivan ",
    role: "UX/UI Designer",
    Description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia quod deleniti non dolor totam laborum odio commodi aliquam, quidem repellat necessitatibus odit quasi repudiandae, aut dolorum quae eaque iure sequi!",
  },
];
const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const paginationRef = useRef(null);

  return (
    <div className="container py-36">
      <div className="text-center">
        <Title firstText={"Our"} secondText={"Testimonial"} />
      </div>
      <Swiper
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        onBeforeInit={(swiper) => {
          swiper.params.pagination.el = paginationRef.current; // point pagination to our custom element
          swiper.pagination.init();
          swiper.pagination.render();
          swiper.pagination.update();
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          320: { slidesPerView: 3 },
          768: { slidesPerView: 5 },
        }}
        className="relative py-12 flex flex-center overflow-hidden max-w-[1000px] mx-auto"
        wrapperClass="text-center flex justify-center items-center"
      >
        {testimonialData.map((data, index) => (
          <SwiperSlide key={data.id}>
            <div className="relative transition-all duration-300 flex justify-center">
              <div
                className={`rounded-full transition-all duration-300 w-40 h-40  ${
                  index === activeIndex
                    ? "border-primary border-4 object-cover overflow-hidden scale-125"
                    : "border-transparent scale-100 opacity-50"
                }`}
              >
                <img
                  src={data.img}
                  alt={data.Name}
                  className=" rounded-full object-cover mx-auto w-40 h-40 "
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div>
        <p className="description w-1/2 text-center mx-auto py-8">
          {testimonialData[activeIndex].Description}
        </p>
        <div className="flex items-center justify-center">
          <h3 className="text-2xl font-bold pr-4 border-r-2">
            {testimonialData[activeIndex].Name}
          </h3>
          <span className="pl-3 tracking-[0.85px]">
            {testimonialData[activeIndex].role}
          </span>
        </div>
      </div>
      <div
        ref={paginationRef}
        className="my-swiper-pagination flex justify-center mt-6"
      />
    </div>
  );
};

export default Testimonial;
