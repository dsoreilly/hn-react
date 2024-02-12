import PropTypes from "prop-types";

/**
 * @param {{ message: string }} props
 * @returns {JSX.Element}
 */

function Placeholder(props) {
  const { message } = props;
  return <div className="mx-auto py-8 text-slate-500">{message}</div>;
}

Placeholder.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Placeholder;
