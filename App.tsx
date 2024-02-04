import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from './components/atoms/Icon'
import InputText from './components/atoms/InputText'
import { useState } from 'react'
import Button from './components/atoms/Button'

export default function App() {
  const [value, setValue] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View style={styles.container}>
      <InputText
        type="emailAddress"
        setValue={setValue}
        value={value}
        placeholder="Email"
        onChangeText={(text: string) => setValue(text)}
      />
      <InputText
        type="password"
        setValue={setPassword}
        value={password}
        placeholder="Password"
        onChangeText={(text: string) => setPassword(text)}
      />
      <Button name="login" minWidth={100} />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
