import React from "react";
import PropTypes from "prop-types";

const Gif = ({url, title}) => {
    return (
      <div>
        <img src={url} alt="pictures"></img>
        <p>{title}</p>
      </div>
    );
};

Gif.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.any.isRequired,
};

export default Gif;