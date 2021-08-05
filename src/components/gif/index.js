import React from "react";
import PropTypes from "prop-types";

const Gif = ({url, title}) => {
    return (
        <div>
             <img src={url} alt={title}></img>
        </div>
    )
};

Gif.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.any.isRequired,
};

export default Gif;