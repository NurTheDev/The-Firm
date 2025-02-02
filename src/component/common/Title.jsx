const title = ({ firstText, secondText }) => {
  return (
    <div>
      <h2 className=" title">
        {firstText} <span className="titleUnderline">{secondText}</span>
      </h2>
    </div>
  );
};

export default title;
