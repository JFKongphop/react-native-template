import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { type NavigationProp } from '@react-navigation/native';
import App1 from '@/screens/App1';

// import * as Screens from './router/router'

type RootStackParamList = {
  App1: undefined;
  App2: undefined;
};


export type Navigation = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

// const routes = Object.entries(Screens).map(([name, component]) => ({
//   name,
//   component,
// }));

export default function App() {
  // console.log(routes)
  return (

    <SafeAreaView>
      <App1 />
    </SafeAreaView>
    

    // <NavigationContainer>
    //   <Stack.Navigator>
    //     {/* <Stack.Screen 
    //       name='App1'
    //       component={App1}
    //     />
    //     <Stack.Screen 
    //       name='App2'
    //       component={App2}
    //     /> */}
    //   </Stack.Navigator>
    // </NavigationContainer>
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
