import PropTypes from "prop-types";

const Container = ({ children, className = "" }) => {
  return <div className={className}>{children}</div>;
};
Container.propTypes = {
  children: PropTypes.node.isRequired, // node is a type that can be any valid React node, including primitive values, React elements, or an array of React elements.
  className: PropTypes.string.isRequired, // string is a type that can be any valid string.
};
export default Container;
