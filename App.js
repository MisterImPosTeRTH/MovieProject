import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { StackNav } from './screens/Navigators/stackNav'

export default function App() {
  return (
    <NavigationContainer>
      <StackNav/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? StatusBar.currentHeight + 50 : StatusBar.currentHeight
  },
});
