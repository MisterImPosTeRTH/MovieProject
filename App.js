import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { StackNav } from './screens/Navigators/stackNav'
import { Provider } from 'react-redux';
import { store } from './screens/Redux/Store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNav/>
      </NavigationContainer>
    </Provider>
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
