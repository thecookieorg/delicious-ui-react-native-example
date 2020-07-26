import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  ActivityIndicator, 
  Platform, 
  StyleSheet, 
  TouchableNativeFeedback
} from 'react-native';
import PropTypes from 'prop-types';

const defaultLoadingProps = (spinnerSize, spinnerColor) => ({
  color: spinnerColor ? spinnerColor : "white",
  size: spinnerSize ? spinnerSize : "small"
});

const Button = (props) => {
  const {
    title,
    isLoading,
    onPress,
    buttonBackground,
    buttonBorderColor,
    buttonMarginBottom, 
    buttonMarginTop,
    type,
    theme,
    variant,
    isRaised,
    titleColor,
    titleSize,
    spinnerColor,
    spinnerSize
  } = props;

  const handleOnPress = () => {
    if (!isLoading) {
      onPress();
    }
  }

  const loadingProps = {
    ...defaultLoadingProps(spinnerSize, spinnerColor)
  }

  const buttonStyles = StyleSheet.flatten([
    styles.button(type, theme, variant, buttonBackground, buttonBorderColor, buttonMarginBottom, buttonMarginTop),
    styles.raised(isRaised)
  ]);

  return (
    <TouchableOpacity 
      style={buttonStyles}
      onPress={handleOnPress}
    >
      {isLoading && (
        <ActivityIndicator 
          color={loadingProps.color}
          size={loadingProps.size}
        />
      )}

      {!isLoading && !!title && (
        <Text style={styles.buttonTitle(titleColor, titleSize)}>
          {title}
        </Text>
      )}
      
    </TouchableOpacity>
  )
}

Button.defaultProps = {
  title: '',
  isLoading: false,
  // ButtonComponent: Platform.select({
  //   android: TouchableNativeFeedback,
  //   default: TouchableOpacity
  // }),
  onPress: () => console.log('Attach a method'),
  buttonBackground: '#1dd1a1',
  buttonBorderColor: '#1dd1a1',
  type: 'solid',
  theme: 'light',
  variant: 'rounded',
  isRaised: false,
  titleColor: '#fff',
  titleSize: 14,
  buttonMarginBottom: 4,
  buttonMarginTop: 0
}

Button.propTypes = {
  title: PropTypes.string,
  isLoading: PropTypes.bool,
  onPress: PropTypes.func,
  buttonBackground: PropTypes.string,
  buttonBorder: PropTypes.string,
  type: PropTypes.oneOf(['solid', 'outline']),
  theme: PropTypes.oneOf(['dark', 'light']),
  variant: PropTypes.oneOf(['rounded', 'sharp']),
  ButtonComponent: PropTypes.elementType,
  isRaised: PropTypes.bool,
  titleColor: PropTypes.string,
  titleSize: PropTypes.number,
  spinnerColor: PropTypes.string,
  spinnerSize: PropTypes.oneOf(['small', 'large']),
  buttonMarginBottom: PropTypes.number,
  buttonMarginTop: PropTypes.number
}

const styles = {
  button: (type, theme, variant, buttonBackground, buttonBorderColor, buttonMarginBottom, buttonMarginTop) => ({
    padding: 8,
    borderRadius: variant === 'rounded' ? 4 : 0,
    backgroundColor: buttonBackground,
    borderWidth: type === 'outline' ? StyleSheet.hairlineWidth : 0,
    borderColor: type === 'outline' ? buttonBorderColor : null,
    marginBottom: buttonMarginBottom,
    marginTop: buttonMarginTop
  }),
  raised: (isRaised) => (
    isRaised && {
      ...Platform.select({
        android: {
          elevation: 5
        },
        default: {
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        }
      })
    }
  ),
  buttonTitle: (titleColor, titleSize) => ({
    color: titleColor, 
    alignSelf: 'center', 
    fontSize: titleSize, 
    fontWeight: '500'
  })
}

export default Button;
