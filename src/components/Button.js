import React from 'react';
import { TouchableOpacity, Animated, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { buttonStyles } from '../styles/variables';

const styles = {
  buttonStyle: {
    width: Dimensions.get('window').width * 0.95,
    paddingVertical: 25,
    paddingHorizontal: 25,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#AA00FF',
  },
  textStyle: {
    fontSize: 17,
    ...buttonStyles.primaryButtonStyle.text,
  },
};

type Props = {
  style: Object,
  buttonStyle: Object;
  textStyle: Object,
  title: String,
  facebook: Boolean,
  secondary: Boolean,
  danger: Boolean,
  success: Boolean,
}

export default ({ style, textStyle, title, facebook, secondary,
danger, success, ...props }: Props) => {
  if (facebook) {
    styles.buttonStyle = {
      ...styles.buttonStyle,
      ...buttonStyles.facebookButtonStyle.container,
    };
    styles.textStyle = {
      ...styles.textStyle,
      ...buttonStyles.facebookButtonStyle.text,
    };
  }

  return (
    <TouchableOpacity
      style={[styles.buttonStyle, style]}
      activeOpacity={0.7}
      {...props}
    >
      <Animated.Text style={[styles.textStyle, textStyle]} >
        {title}
      </Animated.Text>
      <Icon color={'#FFF'} name={'logo-facebook'} size={30} />
    </TouchableOpacity>
  );
};
