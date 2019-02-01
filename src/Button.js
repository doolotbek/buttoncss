import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";
import buttonStyle from './Button.css';
import {withStyles} from "@material-ui/core";

function RegularButton(props) {
  const {
    classes,
    color,
    round,
    fullWidth,
    size,
    link,
    text,
    rootStyle
  } = props;
  console.log("className", rootStyle)
  return (
    <button className={rootStyle}>
    {text}
    </button>
    
  );
}

RegularButton.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    "red",
    "blue",
    "black",
  ]),
  size: PropTypes.oneOf(["sm", "lg"]),
  small: PropTypes.bool,
  average: PropTypes.bool,
  big: PropTypes.bool,

};

export default withStyles(buttonStyle)(RegularButton); 