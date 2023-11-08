import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { useEffect } from 'react'
import { getCurrentSignInUser } from './Firebase/auth'

export const Decoy = (props) => {
  const navigation = props.nav

  useEffect(() => {
    const currentUser = getCurrentSignInUser()

      setTimeout(() => {
        if( currentUser == null){
          navigation.navigate('Login')
          navigation.reset({ index:0, routes: [{ name: 'Login' }] })
        } else {
          navigation.reset({ index:0, routes: [{ name:  'BottomTab' }] })
        }
      }, 1500)
  }, [navigation])

  return (
    <SafeAreaView style={styles.welcome}>
      <View style={styles.circleTopRight}></View>

      <View style = {{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text style = {{color:'#DE703C', fontSize:50, fontWeight:'bold'}}>Movie Do DEE</Text>
        <Text style = {{color:'#DE703C', fontSize:10}}>by POP & BRIGHT</Text>
      </View>

      <View style={styles.circleBottonLeft}></View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  welcome: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#320450'
  },
  circleTopRight: {
    width: 400,
    height: 400,
    borderRadius: 200,
    aspectRatio:1,
    backgroundColor: '#F21170',
    position: 'absolute',
    top:-170,
    right:-150,
  },
  circleBottonLeft: {
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: '#007965',
    position: 'absolute',
    bottom: -125,
    left:-115,
  },
});