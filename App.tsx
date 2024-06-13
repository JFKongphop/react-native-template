import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { type NavigationProp } from '@react-navigation/native';
import routes from 'router/router';
import { App1 } from 'router';

type RootStackParamList = {
  App1: undefined;
  App2: undefined;
};

export type Navigation = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='dark' />
      <Stack.Navigator
        screenOptions={{
          title: 'Hello world',
          headerBackTitle: 'back'
        }}
      >
        {
          routes.map(({ name, component }) => (
            <Stack.Screen
              key={name}
              name={name}
              component={component}
            />
          ))
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
