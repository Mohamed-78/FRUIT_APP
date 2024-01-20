import React, { useState, useEffect } from 'react';
import { TextInput, View } from 'react-native';
import styles from './inputline.style';

const InputLine = ({
    placeholder,
    index,
    onChange = () => {},
    value,
    width,
    style,
    error = null,
    onBlur,
    variant,
    editable = true,
    keyboardType = 'default',
    secureTextEntry = false,
  }) => {

    const [inputValue, setInputValue] = useState(value);

    useEffect(() => {
        setInputValue(value);
    }, [value]);

    const handleChange = (text) => {
        setInputValue(text);
        onChange(text, index);
    };

  return (
    <View>
      <TextInput
        style={[
          styles.input(variant),
          { ...style },
          width && { width: width },
        ]}
        placeholder={placeholder}
        onChangeText={handleChange}
        value={inputValue}
        selectionColor={variant && variant === 'secondary' && COLORS.secondary}
        placeholderTextColor={
          variant && variant === 'secondary' && COLORS.secondary
        }
        onBlur={onBlur}
        editable={editable}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

export default InputLine