/** @format */

import React from "react";
import PropTypes from "prop-types";

function Placeholder(props) {
  const { message } = props;
  return <div className="mx-auto py-8 text-slate-500">{message}</div>;
}

Placeholder.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Placeholder;
