import mapImg from "../assets/map.png";
const GetinTouch = () => {
  return (
    <div className="relative">
      <div className="w-full h-64 ">
        <picture>
          <img className="object-cover w-full" src={mapImg} alt="" />
        </picture>
      </div>
    </div>
  );
};

export default GetinTouch;
