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
import { useState } from 'react';
import { signUp } from './Firebase/auth';
  
  export const SignUpScreen = (props) => {
    const navigation = props.nav

    const [profile, setProfile] = useState({'firstname':'', 'lastname':'', 'email':'', 'password':''})

    const setFirstname = (text) => {
      setProfile(oldValue => ({
        ...oldValue,
        firstname:text
      }))
    }
  
    const setLastname = (text) => {
      setProfile(oldValue => ({
        ...oldValue,
        lastname:text
      }))
    }
    
    const setEmail = (text) => {
      setProfile(oldValue => ({
        ...oldValue,
        email:text
      }))
    }

    const setPassword = (text) => {
      setProfile(oldValue => ({
        ...oldValue,
        password:text
      }))
    }
    
    const unsuccess = (msg) => {
      console.log(msg)
      Alert.alert(msg)
    }

    const allSuccess = (doc) => {
      Alert.alert(`${doc.email} has been added to system`)
      navigation.goBack()
    }

    const onSignUpPress = () => {
      console.log(`profile ${profile.firstname}`)
      signUp(profile, allSuccess, unsuccess)
    }
    
    const onCancelPress = () => {
      navigation.goBack()
    }
  
    return (
      <SafeAreaView style={styles.container}>
        <View style = {{width:'100%', height:Dimensions.get('window').height * 0.12}}></View>
  
        <View style = {{flex:1}}>
          <View style = {styles.fromBox}>
            <View style = {{
              alignItems:'center',
              paddingVertical:25,
              }}>
              <Text style = {{fontSize:51, fontWeight:'bold', color:'#DE703C'}}>REGISTER</Text>
            </View>
  
            <View style = {{
              flex:1,
              alignItems:'center',
              justifyContent:'center',
              paddingHorizontal:25,
              }}>
              <View style = {styles.textInput}>
                  <AntDesign
                    style = {{margin:10}}
                    name="user"
                    size={24}
                    color="lightgray" />
                <TextInput
                  style = {{
                    width:'100%',
                    height:'100%',
                    fontSize:23,}}
                  placeholder = 'Firstname'
                  placeholderTextColor = 'darkgray'
                  secureTextEntry = {false}
                  value = {profile.firstname}
                  onChangeText = {(text) => setFirstname(text)} />
              </View>

              <View style = {styles.textInput}>
                  <AntDesign
                    style = {{margin:10}}
                    name="user"
                    size={24}
                    color="lightgray" />
                <TextInput
                  style = {{
                    width:'100%',
                    height:'100%',
                    fontSize:23,}}
                  placeholder = 'Lastname'
                  placeholderTextColor = 'darkgray'
                  secureTextEntry = {false}
                  value = {profile.lastname}
                  onChangeText = {(text) => setLastname(text)} />
              </View>

              <View style = {styles.textInput}>
                  <MaterialIcons
                    style = {{margin:10}}
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
                  value = {profile.email}
                  onChangeText = {(text) => setEmail(text)} />
              </View>
  
              <View style = {styles.textInput}>
                <MaterialCommunityIcons
                  style = {{margin:10}}
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
                  secureTextEntry = {true}
                  value = {profile.password}
                  onChangeText = {(text) => setPassword(text)} />
              </View>
            </View>
  
            <View style = {{
              flex:1,
              paddingTop:20,
              alignItems:'center',
            }}>
              <View style = {styles.signUp}>
                <TouchableOpacity
                  style = {{
                    width:'100%',
                    height:'100%',
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:999}}
                  onPress = {onSignUpPress}>
                  <Text style = {{fontSize:20, color:'white'}}>Sign Up</Text>
                </TouchableOpacity>
              </View>
              <View style = {styles.cancel}>
                <TouchableOpacity
                  style = {{
                    width:'100%',
                    height:'100%',
                    borderRadius:999,
                    justifyContent:'center',
                    alignItems:'center'}}
                  onPress = {onCancelPress}>
                  <Text style = {{fontSize:20, color:'#DE703C'}}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
  
        <View style = {{width:'100%', height:Dimensions.get('window').height * 0.12}}></View>
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
      margin: 20,
      backgroundColor:'rgba(242, 17, 112, 0.5)',
    },
    textInput: {
      flex:1,
      backgroundColor:'gray',
      marginBottom:10,
      flexDirection:'row',
      borderWidth:1,
      borderColor:'lightgray',
      borderRadius:999,
      marginHorizontal:15,
      alignItems:'center',
    },
    signUp:{
      width:'90%',
      height:'35%',
      borderWidth:1,
      borderColor:'white',
      borderRadius:999,
      marginBottom:10,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#DE703C',
    },
    cancel: {
      width:'90%',
      height:'35%',
      borderWidth:1,
      borderColor:'white',
      borderRadius:999,
      marginBottom:10,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#320450',
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
  