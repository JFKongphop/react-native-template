import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { FC } from 'react'

interface ICustomButton {
  onPress: () => void;
}

const CustomButton: FC<ICustomButton> = ({
  onPress
}) => {
  return (
    <Pressable
      onPress={onPress}
    >
      <View style={styles.button}>
        <Text>CustomButton</Text>
      </View>
    </Pressable>
  );
}

export default CustomButton

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderColor: 'red'
  }
})