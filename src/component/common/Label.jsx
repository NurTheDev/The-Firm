import PropType from "prop-types";
const Label = ({ labelFor, Title, inputId, inputType, placeholder }) => {
  return (
    <div>
      <label
        className="block text-sm text-[#a5a5a5] ml-[10px]"
        htmlFor={labelFor}
      >
        {Title}
      </label>
      <input
        id={inputId}
        className="py-3 px-[10px] text-primaryFont border-b-2 border-b-[#A5A5A5] text-lg w-full"
        type={inputType}
        placeholder={placeholder}
      />
    </div>
  );
};
Label.propTypes = {
  labelFor: PropType.string.isRequired,
  Title: PropType.string.isRequired,
  inputId: PropType.string.isRequired,
  inputType: PropType.string.isRequired,
  placeholder: PropType.string,
};
export default Label;
