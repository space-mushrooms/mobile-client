import React, { PureComponent } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';


export default class RoundedCard extends PureComponent {
  static propTypes = {
    children: PropTypes.element.isRequired,
    radius: PropTypes.number,
  };

  static defaultProps = {
    radius: 10,
  };

  render() {
    const { radius: borderRadius, children } = this.props;

    return (
      <View style={{
        borderRadius,
        overflow: 'hidden',
      }}>
        {children}
      </View>
    );
  }
}

export const withRoundedCorners = (WrappedComponent, radius) => class extends PureComponent {
  render() {
    return (
      <RoundedCard radius={radius}>
        <WrappedComponent {...this.props} />
      </RoundedCard>
    )
  }
}
