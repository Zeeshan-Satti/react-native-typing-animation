import React from "react";
import { View } from "react-native";
import PropTypes from 'prop-types';

import styles from "./styles";

const getStyles = ({ x, y, radius, dotColor }) => ({
  left: x,
  top: y,
  width: radius * 2,
  height: radius * 2,
  borderRadius: radius,
  backgroundColor: dotColor
});

const Dot = (props) => (
  <View style={[styles.container, props.dotStyles, props.dotStyles1, props.dotStyles2, getStyles(props)]} />
);

Dot.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  radius: PropTypes.number,
  dotStyles: PropTypes.object,
  dotStyles1: PropTypes.object,
  dotStyles2: PropTypes.object,
  dotColor: PropTypes.string,
  dotColor1: PropTypes.string,
  dotColor2: PropTypes.string,
};

export default Dot;
