import React, { Component } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { ImageSource as ImageSourceShape } from '../shapes';


const imageBackgroundStyle = {
  flex: 1,
  width: null,
  height: null,
};

export default class ImageCard extends Component {
  static propTypes = {
    height: PropTypes.number.isRequired,
    source: ImageSourceShape,
  };

  render() {
    const { height, source } = this.props;

    return (
      <View style={{
        flex: 1,
        width: null,
        height,
      }}>
        <ImageBackground source={source} style={imageBackgroundStyle}>
          <Text>Inside</Text>
        </ImageBackground>
      </View>
    );
  }
}
