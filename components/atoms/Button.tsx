import React, { useState } from 'react'
import { Text, StyleSheet, Animated, TouchableOpacity } from 'react-native'

interface Props {
  name: string
  minWidth?: number
}

const Button = (props: Props) => {
  const { name, minWidth } = props
  const [pressed, setPressed] = useState(false)
  const backgroundColor = new Animated.Value(pressed ? 1 : 0)

  const handlePressIn = () => {
    Animated.timing(backgroundColor, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start()
    setPressed(true)
  }

  const handlePressOut = () => {
    Animated.timing(backgroundColor, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start()
    setPressed(false)
  }

  const buttonStyles = {
    ...styles.button,
    minWidth: minWidth || ('auto' as any),
    backgroundColor: backgroundColor.interpolate({
      inputRange: [0, 1],
      outputRange: ['transparent', 'rgb(255,0,0)'],
    }),
  }

  const textStyles = {
    ...styles.text,
    color: pressed ? 'white' : 'rgb(255,0,0)',
  }

  return (
    <TouchableOpacity
      onPress={() => {}}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View style={buttonStyles}>
        <Text style={textStyles}>{name}</Text>
      </Animated.View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginVertical: 10,
    display: 'flex',
    alignItems: 'center',
    borderColor: 'rgb(255,0,0)',
    borderWidth: 1,
    borderRadius: 25,
    overflow: 'hidden',
    textAlign: 'center',
  },
  text: {
    color: 'rgb(255,0,0)',
  },
})

export default Button
