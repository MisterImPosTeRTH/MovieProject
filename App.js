import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView, StyleSheet, View, Platform } from 'react-native';
import { VideoPlayer } from './screens/VideoPlayer';
import { LoginScreen } from './Screen/Login'
import { Decoy } from './Screen/Decoy'
import { SignUpScreen } from './Screen/Register'
import { RecoverScreen } from './Screen/Forget'
import { MainScreen } from './Screen/Main'
import { BottomTabNav } from './Screen/Navigators/bottomTabNav'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StackNav } from './Screen/Navigators/stackNav'

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
  },
});
