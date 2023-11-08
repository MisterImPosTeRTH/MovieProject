import {
    Text,
    SafeAreaView,
    StyleSheet,
    View,
    Dimensions,
    TextInput,
    TouchableOpacity,
    Alert,
    } from 'react-native';
  import { AntDesign, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
  import { login } from './Firebase/auth';
  import { useState } from 'react';
  import { useDispatch } from 'react-redux';
  import { addProfile } from './Redux/AuthSlice';
  
  export const LoginScreen = (props) => {
    const navigation = props.nav

    const dispatch = useDispatch()

    const [credential, setCredential] = useState({email:'', password:''})
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const success = (firstname, lastname, email) => {
      console.log(`Login success: ${email}, ${firstname}, ${lastname}`)

      dispatch(addProfile({firstname:firstname, lastname:lastname, email:email}))
      navigation.navigate({
        name:'BottomTab',
        param: {
          user:email
        }
      })
    }

    const unsuccess = (msg) => {
      console.log(msg)
    }

    const onSignInPress = () => {
      if(email == '' & password == '')
      {
        Alert.alert('Pless enter your email and password')
      } else if(email == '') {
        Alert.alert('Pless enter your email')
      } else if(password == '') {
        Alert.alert('Pless enter your password')
      } else {
      login(email, password, success, unsuccess)
      }
    }

    const onSignUpPress = () => {
      navigation.push('SignUp')
    }
  
    const onForgetPress = () => {
      navigation.push('Recover')
    }
  
    return (
      <SafeAreaView style={styles.container}>
        <View style = {{
          width: '100%',
          height: Dimensions.get('window').height * 0.14,
        }}>
          <View style = {styles.circleTopRight}></View>
        </View>
        <View style = {{flex:4, alignItems:'center', justifyContent:'center'}}>
          <View style = {styles.fromBox}>
            <View style = {{
              flex:1,
              alignItems:'center',
              justifyContent:'center',
              paddingTop:75
            }}>
              <Text style = {{fontSize:50, fontWeight:'bold', color:'#DE703C'}}>LOGIN</Text>
            </View>
  
            <View style = {{
              flex:1,
              alignItems:'center',
              justifyContent:'center',
              paddingVertical:10,
              paddingHorizontal:25
              }}>
              <View style = {styles.textInput}>
                  <MaterialIcons
                    style = {{margin:17}}
                    name="email"
                    size={24}
                    color="lightgray" />
                <TextInput
                  style = {{
                    width:'100%',
                    height:'100%',
                    fontSize:23,}}
                  placeholder = 'Email'
                  placeholderTextColor = 'darkgray'
                  secureTextEntry = {false}
                  value = {email}
                  onChangeText = {(email) => setEmail(email)} />
              </View>
  
              <View style = {styles.textInput}>
                <MaterialCommunityIcons
                  style = {{margin:17}}
                  name="form-textbox-password"
                  size={24}
                  color="lightgray"
                />
                <TextInput
                  style = {{
                    width:'100%',
                    height:'100%',
                    fontSize:23,
                  }}
                  placeholder = 'Password'
                  placeholderTextColor = 'darkgray'
                  secureTextEntry={true}
                  value = {password}
                  onChangeText = {(password) => setPassword(password)} />
              </View>
            </View>
  
            <View style = {{
              flex:1,
              paddingTop:10,
              alignItems:'center',
            }}>
              <View style = {styles.signIn}>
                <TouchableOpacity
                  style = {{
                    width:'100%',
                    height:'100%',
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:999}}
                  onPress = {onSignInPress}>
                  <Text style = {{fontSize:20, color:'#DE703C'}}>Sign In</Text>
                </TouchableOpacity>
              </View>
              <View style = {styles.signUp}>
                <TouchableOpacity
                  style = {{
                    width:'100%',
                    height:'100%',
                    borderRadius:999,
                    justifyContent:'center',
                    alignItems:'center'}}
                  onPress = {onSignUpPress}
                  >
                  <Text style = {{fontSize:20, color:'white'}}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
  
            <View style = {{flex:1, alignItems:'flex-end', paddingRight:5}}>
              <TouchableOpacity
                onPress = {onForgetPress}>
                <Text style = {{color:'#F21170', textDecorationLine:'underline'}}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style = {{
          width: '100%',
          height: Dimensions.get('window').height * 0.12,
        }}>
          <View style = {styles.circleBottonLeft}></View>
        </View>
      </SafeAreaView>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#320450',
      alignItems:'center',
    },
    fromBox: {
      borderTopLeftRadius:50,
      borderTopRightRadius:10,
      borderBottomRightRadius:50,
      borderBottomLeftRadius:10,
      flex:1,
      width: Dimensions.get('window').width * 0.95,
    },
    textInput: {
      flex:1,
      backgroundColor:'gray',
      marginBottom:10,
      flexDirection:'row',
      borderWidth:1,
      borderColor:'lightgray',
      borderRadius:999,
      marginHorizontal:10,
      alignItems:'center',
    },
    signIn:{
      width:'90%',
      height:'35%',
      borderWidth:1,
      borderColor:'white',
      borderRadius:999,
      marginBottom:10,
      alignItems:'center',
      justifyContent:'center'
    },
    signUp: {
      width:'90%',
      height:'35%',
      borderWidth:1,
      borderColor:'white',
      borderRadius:999,
      marginBottom:10,
      backgroundColor:'#DE703C',
      alignItems:'center',
      justifyContent:'center'
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
  