import React, { PureComponent, ComponentType } from 'react';
import { View } from 'react-native';

export interface Props {
  radius: number;
};

export default class RoundedCard extends PureComponent<Props> {
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

export const withRoundedCorners = <P extends object>(WrappedComponent: ComponentType<P>, radius?: number) =>
  class extends PureComponent<P> {
    render() {
      return (
        <RoundedCard radius={radius}>
          <WrappedComponent {...this.props} />
        </RoundedCard>
      )
    }
  }