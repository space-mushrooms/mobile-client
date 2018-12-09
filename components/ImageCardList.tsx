import React, { Component, Children, ReactNode } from 'react';
import {
  Dimensions,
  ScrollView,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native';

export interface ChildWrapperProps {
  width: number;
  isFirst: boolean;
  isLast: boolean;
}

class ChildWrapper extends Component<ChildWrapperProps> {
  render() {
    return (
      <View style={{
        width: this.props.width,
        marginLeft: this.props.isFirst ? 20 : 5,
        marginRight: this.props.isLast ? 20 : 5,
      }}>
        {this.props.children}
      </View>
    )
  }
}

const scrollViewStyle = {
  // paddingLeft: 20,
  // paddingRight: 20,
  // flex: 1,
};

// const contentInset = {
//   top: 0,
//   bottom: 0,
//   left: 10,
//   right: 10,
// };

export interface Props {
  style?: StyleProp<ViewStyle>;
}

export class ImageCardList extends Component<Props> {
  render() {
    const {width} = Dimensions.get('window');
    const itemWidth = width - 20 * 2;

    return (
      <View style={this.props.style}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={itemWidth + 10}
          scrollEventThrottle={32}
          decelerationRate="fast"
          snapToAlignment="start"
          contentContainerStyle={scrollViewStyle}
        >
          {Children.map(this.props.children, (child, index) => (
            <ChildWrapper
              width={itemWidth}
              isFirst={index === 0}
              isLast={index === (this.props.children as ReactNode[]).length - 1}
              key={index}
            >
              {child}
            </ChildWrapper>
          ))}
        </ScrollView>
      </View>
    );
  }
}
