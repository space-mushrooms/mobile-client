import React, { Fragment, PureComponent } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { ImageSource as ImageSourceShape } from '../shapes';
import ImageCard from '../components/ImageCard';
import { withRoundedCorners } from '../components/RoundedCard';


const RoundedImageCard = withRoundedCorners(ImageCard); 

const wrapperStyle = {
  paddingHorizontal: 12,
  paddingVertical: 28,
};

export default class LaunchCard extends PureComponent {
  static propTypes = {
    imageSource: ImageSourceShape,
    mission: PropTypes.string.isRequired,
    rocket: PropTypes.string.isRequired,
  };

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
              <Text style={{color: 'white', fontSize: 24, fontWeight: '500', marginBottom: 12}}>{mission}</Text>
            </Fragment>
          )}
          {mission && (
            <Fragment>
              <Text style={{color: 'white', fontSize: 14}}>Rocket</Text>
          <Text style={{color: 'white', fontSize: 24, fontWeight: '500'}}>{rocket}</Text>
            </Fragment>
          )}
        </View>
      </RoundedImageCard>
    )
  }
}
