import React, {useMemo} from 'react';
import {
  View,
  Text,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback
} from 'react-native';
import PropTypes from 'prop-types';
import { ImageSourceType } from './avatarHelper';

const Avatar = (props) => {
  const {
    size,
    isRounded,
    imageSource,
    position
  } = props;

  const imageStyles = StyleSheet.flatten([
    styles.imagePosition(position),
    {
      width: size,
      height: size,
    }
  ]);

  return (
    <Image 
      source={imageSource}
      borderRadius={isRounded ? size / 2 : null}
      style={imageStyles}
    />
  )
}

Avatar.defaultProps = {
  size: 50,
  isRounded: true,
  position: 'center'
}

Avatar.propTypes = {
  size: PropTypes.number,
  isRounded: PropTypes.bool,
  imageSource: ImageSourceType,
  position: PropTypes.oneOf(['left', 'center', 'right'])
  // onPress: PropTypes.func
}

const styles = {
  imagePosition: (position) => {
    switch(position) {
      case 'left':
        return {
          alignSelf: 'flex-start'
        }
      case 'center':
        return {
          alignSelf: 'center'
        }
      case 'right':
        return {
          alignSelf: 'flex-end'
        }
      default:
        return {
          alignSelf: 'center'
        }
    }
  }
}

export default Avatar;
