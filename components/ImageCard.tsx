import React, { Component } from 'react';
import { ImageBackground, View, ImageSourcePropType, ViewStyle } from 'react-native';

const imageBackgroundStyle = {
  flex: 1,
};

const overlayStyle: ViewStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'black',
  opacity: 0.6,
};

export interface Props {
  height: number;
  overlay?: boolean;
  source: ImageSourcePropType;
};

export default class ImageCard extends Component<Props> {
  render() {
    const { height, overlay, source } = this.props;

    return (
      <View style={{
        flex: 1,
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
