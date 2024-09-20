import React from "react";
import { View } from "react-native";
import PropTypes from 'prop-types';

import Dot from "./Dot";
import styles from "./styles";

class TypingAnimation extends React.Component {
  constructor(props) {
    super(props);

    const { dotAmplitude, dotSpeed, dotY } = props;
    this.state = {
      currentAnimationTime: 0
    };

    this._animation = () => {
      this.setState(prevState => ({
        y1: dotY + dotAmplitude * Math.sin(prevState.currentAnimationTime),
        y2: dotY + dotAmplitude * Math.sin(prevState.currentAnimationTime - 1),
        y3: dotY + dotAmplitude * Math.sin(prevState.currentAnimationTime - 2),
        currentAnimationTime: prevState.currentAnimationTime + dotSpeed
      }));
      this.frameAnimationRequest = requestAnimationFrame(this._animation);
    };
    this.frameAnimationRequest = requestAnimationFrame(this._animation);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.frameAnimationRequest);
  }

  render() {
    const { dotStyles, dotStyles1, dotStyles2, style, dotColor, dotColor1, dotColor2, dotMargin, dotRadius, dotX } = this.props;

    return (
      <View style={[styles.container, style]}>
        <Dot x={dotX - dotRadius - dotMargin} y={this.state.y1} radius={dotRadius} dotStyles={dotStyles} dotColor={dotColor} />
        <Dot x={dotX} y={this.state.y2} radius={dotRadius} dotStyles={dotStyles1} dotColor={dotColor1} />
        <Dot x={dotX + dotRadius + dotMargin} y={this.state.y3} radius={dotRadius} dotStyles={dotStyles2} dotColor={dotColor2} />
      </View>
    );
  }
}

TypingAnimation.defaultProps = {
  style: {},
  dotStyles: {},
  dotStyles1: {},
  dotStyles2: {},
  dotColor: "black",
  dotColor1: "white",
  dotColor2: "green",
  dotMargin: 3,
  dotAmplitude: 3,
  dotSpeed: 0.15,
  dotRadius: 2.5,
  dotY: 6,
  dotX: 12
};

TypingAnimation.propTypes = {
  style: PropTypes.object,
  dotStyles: PropTypes.object,
  dotStyles1: PropTypes.object,
  dotStyles2: PropTypes.object,
  dotColor: PropTypes.string,
  dotColor1: PropTypes.string,
  dotColor2: PropTypes.string,
  dotMargin: PropTypes.number,
  dotAmplitude: PropTypes.number,
  dotSpeed: PropTypes.number,
  dotRadius: PropTypes.number,
  dotY: PropTypes.number,
  dotX: PropTypes.number
};

export default TypingAnimation;
