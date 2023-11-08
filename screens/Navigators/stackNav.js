import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Decoy } from '../Decoy'
import { LoginScreen } from '../Login'
import { SignUpScreen } from '../Register'
import { RecoverScreen } from '../Forget'
import { BottomTabNav } from './bottomTabNav'
import { MoviePage } from '../MoviePage'
import { Search } from '../Search'
import { Genre } from '../Genre'
import { GenreMovies } from '../GenreMovies'

export const StackNav = () => {
  const Stack = createNativeStackNavigator()

  const RegisterScreen = ({ navigation, route }) => {
    return(
      <SignUpScreen nav = {navigation} route = {route} />
    )
  }

  const SignInScreen = ({ navigation, route }) => {
    return(
      <LoginScreen nav = {navigation} route = {route} />
    )
  }
  
  const BottomTabScreen = ({ navigation, route }) => {
    return(
      <BottomTabNav nav = {navigation} route = {route} />
    )
  }

  return(
    <Stack.Navigator initialRouteName = 'Decoy' screenOptions={{headerShown: false}}>
      <Stack.Screen name="Decoy" component={Decoy} />
      <Stack.Screen name="Login" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={RegisterScreen} />
      <Stack.Screen name="Recover" component={RecoverScreen} />
      <Stack.Screen name="BottomTab" component={BottomTabScreen}/>
      <Stack.Screen name="Movie" component={MoviePage}/>
      <Stack.Screen name="Search" component={Search}/>
      <Stack.Screen name="Genre" component={Genre}/>
      <Stack.Screen name="GenreMovies" component={GenreMovies}/>
    </Stack.Navigator>
  )
}