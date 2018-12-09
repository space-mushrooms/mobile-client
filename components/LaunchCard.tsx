import React, { Fragment, PureComponent } from 'react';
import { Text, View, ImageSourcePropType } from 'react-native';
import ImageCard from '../components/ImageCard';
import { withRoundedCorners } from '../components/RoundedCard';

const RoundedImageCard = withRoundedCorners(ImageCard); 

const wrapperStyle = {
  paddingHorizontal: 12,
  paddingVertical: 28,
};

export interface Props {
  imageSource: ImageSourcePropType;
  mission: string;
  rocket: string;
}

export default class LaunchCard extends PureComponent<Props> {
  static defaultProps = {
    mission: '',
    rocket: '',
  }

  render() {
    const { imageSource, mission, rocket } = this.props;

    return (
      <RoundedImageCard overlay height={250} source={imageSource}>
        <View style={wrapperStyle}>
          {mission && (
            <Fragment>
              <Text style={{color: 'white', fontSize: 14}}>Mission</Text>
              <Text style={{color: 'white', fontSize: 20, fontWeight: '500', marginBottom: 12}}>{mission}</Text>
            </Fragment>
          )}
          {mission && (
            <Fragment>
              <Text style={{color: 'white', fontSize: 14}}>Rocket</Text>
          <Text style={{color: 'white', fontSize: 20, fontWeight: '500'}}>{rocket}</Text>
            </Fragment>
          )}
        </View>
      </RoundedImageCard>
    )
  }
}
