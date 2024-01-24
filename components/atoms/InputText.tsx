import React, { useState } from 'react'
import {
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native'
import { Icon } from './Icon'
import { textContentType } from '../../interfaces/simple'
import { InputConstant } from '../../utilities/constants'

interface Props {
  type?: textContentType
  placeholder: string
  onChangeText: (text: string) => void
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

const InputText = (props: Props) => {
  const { placeholder, onChangeText, value, setValue, type } = props

  const [isPressed, setIsPressed] = useState(false)
  const borderColor = isPressed ? '#c3d1e3' : '#eeeeee'
  const borderWidth = isPressed ? 3 : 1

  const scaleValue = new Animated.Value(1)

  const handlePressIn = () => {
    Animated.timing(scaleValue, {
      toValue: 0.9,
      duration: 150,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start()
  }

  const handlePressOut = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 150,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start()
  }

  const handleFocus = () => {
    setIsPressed(true)
  }

  const handleBlur = () => {
    setIsPressed(false)
  }

  return (
    <Animated.View
      onTouchStart={handlePressIn}
      onTouchEnd={handlePressOut}
      onTouchCancel={handlePressOut}
      style={[
        styles.container,
        {
          borderColor,
          borderRadius: 8,
          padding: 10,
          transform: [{ scale: scaleValue }],
        },
      ]}
    >
      <TextInput
        secureTextEntry={type === InputConstant.PASSWORD}
        textContentType={type}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#666"
        onChangeText={onChangeText}
        value={value}
      />
      {value.length > 0 && (
        <TouchableOpacity style={styles.close} onPress={() => setValue('')}>
          <Icon icon="close" />
        </TouchableOpacity>
      )}
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    height: 40,
    width: '65%',
    borderRadius: 8,
  },
  input: {
    paddingHorizontal: 10,
    width: '80%',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    fontSize: 16,
    color: '#333',
  },
  close: {
    alignItems: 'center',
    width: '20%',
    padding: 5,
  },
})

export default InputText
