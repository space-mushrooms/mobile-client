import React, { Component } from 'react';
import { Dimensions, ScrollView, Text, View } from 'react-native';
import { red } from 'ansi-colors';


class ChildWrapper extends Component {
  render() {
    return (
      <View style={{
        width: this.props.width,
        height: null,
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

const contentInset = {
  top: 0,
  bottom: 0,
  left: 10,
  right: 10,
};

export class ImageCardList extends Component {
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
          {this.props.children.map((child, index) => (
            <ChildWrapper
              width={itemWidth}
              isFirst={index === 0}
              isLast={index === this.props.children.length - 1}
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
