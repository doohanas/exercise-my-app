import React from "react";
import PropTypes from "prop-types";

const Title = (title) => {
  return (
    <div>
      <h1>{title.title}</h1>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.any.isRequired,
};

export default Title;
