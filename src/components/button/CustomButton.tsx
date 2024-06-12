import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomButton = () => {
  return (
    <View style={styles.button}>
      <Text>CustomButton</Text>
    </View>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderColor: 'red'
  }
})