import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView, StyleSheet, View, Platform } from 'react-native';
import { VideoPlayer } from './screens/VideoPlayer';
import { LoginScreen } from './screens/Login'
import { Decoy } from './screens/Decoy'
import { SignUpScreen } from './screens/Register'
import { RecoverScreen } from './screens/Forget'
import { MainScreen } from './screens/Main'
import { BottomTabNav } from './screens/Navigators/bottomTabNav'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StackNav } from './screens/Navigators/stackNav'

export default function App() {
  return (
<<<<<<< HEAD
    <NavigationContainer>
      <StackNav/>
    </NavigationContainer>
=======
    <View style={styles.container}>
      <VideoPlayer />
    </View>
>>>>>>> main
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
