import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Platform,
} from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

export default ({backgroundColor, ...props}) => (
  <View style={{
    backgroundColor,
    height: STATUSBAR_HEIGHT,
  }}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);
