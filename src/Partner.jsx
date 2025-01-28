import Title from "./component/common/Title";
const Partner = () => {
  const partner = [
    { id: 1, img: "./assets/partner/brave.png" },
    { id: 2, img: "./assets/partner/firefox.png" },
    { id: 3, img: "./assets/partner/opera.png" },
    { id: 4, img: "./assets/partner/google.png" },
    { id: 5, img: "./assets/partner/safari.png" },
    { id: 6, img: "./assets/partner/window.png" },
  ];
  return (
    <div className="text-center mt-24">
      <Title firstText={"Our"} secondText={"Partner"} />
      <div>
        {partner.map((data) => (
          <div key={data.id}>
            <img src={data.img} alt={`Partner ${data.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partner;
