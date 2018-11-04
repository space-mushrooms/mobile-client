import React, { Component } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { ImageSource as ImageSourceShape } from '../shapes';


const imageBackgroundStyle = {
  flex: 1,
  width: null,
  height: null,
};

const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'black',
  opacity: 0.6,
};

export default class ImageCard extends Component {
  static propTypes = {
    height: PropTypes.number.isRequired,
    overlay: PropTypes.bool,
    source: ImageSourceShape,
  };

  render() {
    const { height, overlay, source } = this.props;

    return (
      <View style={{
        flex: 1,
        width: null,
        height,
      }}>
        <ImageBackground source={source} style={imageBackgroundStyle}>
          {overlay && <View style={overlayStyle} />}
          {this.props.children}
        </ImageBackground>
      </View>
    );
  }
}
