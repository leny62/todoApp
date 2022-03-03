import React from 'react';
import {View, Text, TextInput} from 'react-native';

import {Icon} from '../Icon';
import styles from './styles';

const Input = ({
  label,
  error,
  placeholder,
  keyboardType,
  isLine,
  iconType,
  iconName,
  iconIsRight,
  onChangeText,
  iconPress,
  ...props
}) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={[
          styles.input,
          {
            borderWidth: isLine ? 0 : 1,
            borderBottomWidth: 1,
            paddingLeft: iconType && !iconIsRight ? 15 : 0,
          },
        ]}>
        {iconType && (
          <Icon
            type={iconType}
            name={iconName}
            size={17}
            style={[
              styles.icon,
              {right: iconIsRight && 0, paddingRight: iconIsRight && 2},
            ]}
            onPress={iconPress}
          />
        )}
        <TextInput
          placeholder={placeholder}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          {...props}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;