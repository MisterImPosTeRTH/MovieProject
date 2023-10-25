import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Decoy } from '../Decoy'
import { LoginScreen } from '../Login'
import { SignUpScreen } from '../Register'
import { RecoverScreen } from '../Forget'
import { BottomTabNav } from './bottomTabNav'
import { MoviePage } from '../MoviePage'

export const StackNav = () => {
  const Stack = createNativeStackNavigator()

  return(
    <Stack.Navigator initialRouteName = 'Decoy' screenOptions={{headerShown: false}}>
      <Stack.Screen name="Decoy" component={Decoy} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Recover" component={RecoverScreen} />
      <Stack.Screen name="BottomTab" component={BottomTabNav}/>
      <Stack.Screen name="Movie" component={MoviePage}/>
    </Stack.Navigator>
  )
}