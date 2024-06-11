import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Navigation } from '../App'

const App1 = () => {
  const navigation = useNavigation<Navigation>();

  const app2Handler = () => {
    navigation.navigate('App1')
  }


  return (
    <View>
      <Text>App1</Text>
    </View>
  )
}

export default App1

const styles = StyleSheet.create({})