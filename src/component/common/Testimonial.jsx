import { useState } from "react";
import Title from "./Title";
import testimonialImg from "../../assets/testimonialImg.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
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
    img: testimonialImg,
    Name: "Nur Islam",
    role: "MERN Stack Developer",
    Description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia quod deleniti non dolor totam laborum odio commodi aliquam, quidem repellat necessitatibus odit quasi repudiandae, aut dolorum quae eaque iure sequi!",
  },
  {
    id: 0,
    img: testimonialImg,
    Name: "Nur Islam",
    role: "MERN Stack Developer",
    Description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia quod deleniti non dolor totam laborum odio commodi aliquam, quidem repellat necessitatibus odit quasi repudiandae, aut dolorum quae eaque iure sequi!",
  },
  {
    id: 3,
    img: testimonialImg,
    Name: "Nur Islam",
    role: "MERN Stack Developer",
    Description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia quod deleniti non dolor totam laborum odio commodi aliquam, quidem repellat necessitatibus odit quasi repudiandae, aut dolorum quae eaque iure sequi!",
  },
  {
    id: 4,
    img: testimonialImg,
    Name: "Nur Islam",
    role: "MERN Stack Developer",
    Description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia quod deleniti non dolor totam laborum odio commodi aliquam, quidem repellat necessitatibus odit quasi repudiandae, aut dolorum quae eaque iure sequi!",
  },
];
const Testimonial = () => {
  // const [activeIndex, setActiveIndex] = useState(0);
  // const nextBtn = () => {
  //   setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
  // };
  return (
    <div className="container">
      <div className="text-center">
        <Title firstText={"Our"} secondText={"Testimonial"} />
      </div>
      {/* <div className="flex items-center justify-center w-full gap-x-6 mt-12 min-h-[200px]">
        {testimonialData.map((data) => (
          <div
            key={data.id}
            className={`rounded-full  transition-all duration-200 ${
              data.id === activeIndex
                ? "w-40 h-40 border-4 border-primary p-2"
                : "w-24 h-full opacity-50"
            } `}
          >
            <img
              src={data.img}
              alt={data.Name}
              className={`rounded-full ${
                data.id === activeIndex
                  ? "border-2 border-primary outline-1 outline-primary p-1"
                  : false
              }`}
            />
          </div>
        ))}
      </div>
      <div>
        <p>{testimonialData[activeIndex].Description}</p>
        <h3>{testimonialData[activeIndex].Name}</h3>
        <p>{testimonialData[activeIndex].role}</p>
      </div>
      <div className="flex gap-x-2 ">
        {testimonialData.map((data) => (
          <span
            key={data.id}
            className={`w-3 h-3 rounded-full ${
              data.id === activeIndex ? "bg-red-400" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
      <button onClick={nextBtn}>next</button> */}
    </div>
  );
};

export default Testimonial;
