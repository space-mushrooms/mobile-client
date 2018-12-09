import React from 'react';
import {
  View,
  StatusBar,
  Platform,
  StatusBarProps,
} from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

export interface Props {
  backgroundColor: string;
}

export default ({backgroundColor, ...props}: Props & StatusBarProps) => (
  <View style={{
    backgroundColor,
    height: STATUSBAR_HEIGHT,
  }}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);
