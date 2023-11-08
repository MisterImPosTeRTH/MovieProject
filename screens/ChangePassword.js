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
  import { AntDesign, MaterialCommunityIcons, } from '@expo/vector-icons';
  import { resetPassword } from './Firebase/auth';
  import { useState } from 'react';
  import { changeUserPassword, logOut } from './Firebase/auth';
  import { useSelector } from 'react-redux';
  
  export const ChangePassword = (props) => {
    const navigation = props.nav
    const user = useSelector((state) => state.auths.slice(-1))
    const email = user[0].email

    const [password, setPassword] = useState({'oldPassword':'', 'newPassword':'', 'confirmPassword':''})

    const setOldPassword = (text) => {
        setPassword(oldValue => ({
            ...oldValue,
            oldPassword:text
        }))
    }

    const setNewPassword = (text) => {
        setPassword(oldValue => ({
            ...oldValue,
            newPassword:text
        }))
    }

    const setConfirmPassword = (text) => {
        setPassword(oldValue => ({
            ...oldValue,
            confirmPassword:text
        }))
    }

    const success = (msg) => {
        console.log(msg)
        logOut(logOutSuccess, unsuccess)
    }

    const logOutSuccess = () => {
        navigation.navigate('Decoy')
    }

    const unsuccess = (msg) => {
      console.log(msg)
      Alert.alert(msg)
    }
    
    const onChangePress = () => {
      console.log('Change password NOW!')
      changeUserPassword(email, password.oldPassword, password.newPassword, success, unsuccess)
    }

    const onCancelPress = () => {
        navigation.goBack()
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
                        justifyContent:'center',
                        alignItems:'center',
                        paddingTop:50,
                        paddingBottom:10
                    }}>
                        <Text style = {{fontSize:50, fontWeight:'bold', color:'#DE703C'}}>CHANGE PASSWORD</Text>
                    </View>
        
                    <View style = {{
                        flex:1,
                        alignItems:'center',
                        justifyContent:'center',
                        paddingHorizontal:25,
                        paddingVertical:10,
                    }}>
                        <View style = {styles.textInput}>
                            <MaterialCommunityIcons
                                style = {{margin:20}}
                                name="form-textbox-password"
                                size={24}
                                color="lightgray" />
                            <TextInput
                            style = {{
                                width:'100%',
                                height:'100%',
                                fontSize:23,
                            }}
                            placeholder = 'Old Password'
                            placeholderTextColor = 'darkgray'
                            secureTextEntry = {false}
                            value = {password.oldPassword}
                            onChangeText = {(text) => setOldPassword(text)} />
                        </View>
            
                        <View style = {styles.textInput}>
                            <MaterialCommunityIcons
                            style = {{margin:20}}
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
                            placeholder = 'New Password'
                            placeholderTextColor = 'darkgray'
                            secureTextEntry = {false}
                            value = {password.newPassword}
                            onChangeText = {(text) => setNewPassword(text)}/>
                        </View>
            
                        <View style = {styles.textInput}>
                            <MaterialCommunityIcons
                            style = {{margin:20}}
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
                            placeholder = 'Confirm Password'
                            placeholderTextColor = 'darkgray'
                            secureTextEntry = {false}
                            value = {password.confirmPassword}
                            onChangeText = {(text) => setConfirmPassword(text)}/>
                        </View>
                    </View>
        
                    <View style = {{
                        flex:1,
                        paddingTop:10,
                        alignItems:'center',
                    }}>
                        <View style = {styles.recover}>
                            <TouchableOpacity
                                style = {{
                                    width:'100%',
                                    height:'100%',
                                    justifyContent:'center',
                                    alignItems:'center',
                                    borderRadius:999}}
                                onPress = {onChangePress}
                            >
                            <Text style = {{fontSize:20, color:'white'}}>Change Password</Text>
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
                                onPress = {onCancelPress}
                            >
                            <Text style = {{fontSize:20, color:'#DE703C'}}>cancel</Text>
                            </TouchableOpacity>
                        </View>
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
        width: Dimensions.get('window').width * 0.85,
        height: Dimensions.get('window').height * 0.65,
    //   borderTopLeftRadius:50,
    //   borderTopRightRadius:10,
    //   borderBottomRightRadius:50,
    //   borderBottomLeftRadius:10,
    //   flex:1,
    //   width: Dimensions.get('window').width * 0.95,
    //   justifyContent:'center',
    //   alignItems:'center',
    //   paddingTop:100,
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
      alignItems:'center'
    },
    recover:{
      borderWidth:1,
      borderColor:'white',
      borderRadius:999,
      marginBottom:10,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#DE703C',
      width: Dimensions.get('window').width * 0.78,
      height: Dimensions.get('window').height * 0.07,
      },
    cancel: {
      borderWidth:1,
      borderColor:'white',
      borderRadius:999,
      marginBottom:10,
      alignItems:'center',
      justifyContent:'center',
      width: Dimensions.get('window').width * 0.78,
      height: Dimensions.get('window').height * 0.07,
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
  