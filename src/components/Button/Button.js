import React from 'react';
import {Text, TouchableOpacity, View, ActivityIndicator} from 'react-native';
import { appColors } from '../../assets/theme/Colors';
import styles from './styles';

const Button = ({primary, secondary, danger, disabled, title, loading, onPress}) => {
  const get_bg = () => {
    return primary
      ? appColors.primary
      : secondary
      ? appColors.secondary
      :danger
      ? appColors.danger
      : disabled
      ? appColors.disabled
      : appColors.primary;
  };

  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <View style={[styles.button_wrapper, {backgroundColor: get_bg()}]}>
        {loading && (
          <ActivityIndicator size="small" color="red" style={styles.loading} />
        )}
        {title && (
          <Text
            style={[
              styles.btn_text,
              {color: disabled ? appColors.primary : appColors.white},
            ]}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
