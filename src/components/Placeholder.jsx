import PropTypes from "prop-types";

/**
 * @param {{ message: string }} props
 * @returns {JSX.Element}
 */

export default function Placeholder(props) {
  const { message } = props;
  return <div className="mx-auto py-8 text-slate-500">{message}</div>;
}

Placeholder.propTypes = {
  message: PropTypes.string.isRequired,
};
