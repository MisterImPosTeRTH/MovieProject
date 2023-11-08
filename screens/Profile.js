import {
    Text,
    SafeAreaView,
    StyleSheet,
    View,
    Dimensions,
    TextInput,
    TouchableOpacity,
    } from 'react-native';
  import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
  import { useSelector } from 'react-redux';
  import { useState } from 'react';
  import { logOut } from './Firebase/auth';
  
  export const ProfileScreen = (props) => {
    const navigation = props.nav

    let authList = useSelector((state) => state.auths)
    const lastItem = authList.slice(-1)

    const [profile, setProfile] = useState({'firstname': lastItem[0].firstname,
                                            'lastname' : lastItem[0].lastname,
                                            'email': lastItem[0].email})

    const logOutSuccess = () => {
      navigation.navigate('Decoy')
    }

    const unsuccess = (msg) => {
      console.log(msg)
      Alert.alert(msg)
    }

    const onSignOutPress = () => {
      console.log('Logout NOW!')
      logOut(logOutSuccess, unsuccess)
    }

    const onChangePassPress = () => {
      navigation.navigate('ChangePassword')
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
              <Text style = {{fontSize:51, fontWeight:'bold', color:'#DE703C'}}>PROFILE</Text>
            </View>
  
            <View style = {{
              flex:2,
              alignItems:'center',
              justifyContent:'center',
              paddingHorizontal:25,
              }}>
              <View style = {styles.textInput}>
                  <AntDesign
                    style = {{margin:20}}
                    name="user"
                    size={24}
                    color="lightgray" />
                <TextInput
                  style = {{
                    width:'100%',
                    height:'100%',
                    fontSize:23,
                  }}
                  placeholder = 'Firstname'
                  placeholderTextColor = 'darkgray'
                  secureTextEntry = {false}
                  value = {profile.firstname}
                  onChangeText = {() => {}} />
              </View>
  
              <View style = {styles.textInput}>
                <AntDesign
                  style = {{margin:20}}
                  name="user"
                  size={24}
                  color="lightgray"
                />
                <TextInput
                  style = {{
                    width:'100%',
                    height:'100%',
                    fontSize:23,
                  }}
                  placeholder = 'Lastname'
                  placeholderTextColor = 'darkgray'
                  secureTextEntry = {false}
                  value = {profile.lastname}
                  onChangeText = {() => {}} />
              </View>
  
              <View style = {styles.textInput}>
                <MaterialCommunityIcons
                  style = {{margin:20}}
                  name="email"
                  size={24}
                  color="lightgray"
                />
                <TextInput
                  style = {{
                    width:'100%',
                    height:'100%',
                    fontSize:23,
                  }}
                  placeholder = 'Email'
                  placeholderTextColor = 'darkgray'
                  secureTextEntry = {false}
                  value = {profile.email}
                  onChangeText = {() => {}} />
              </View>
            </View>
  
            <View style = {{
              flex:1,
              paddingTop:10,
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
                    onPress={onChangePassPress}
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
                  onPress={onSignOutPress}
                >
                  <Text style = {{fontSize:20, color:'#DE703C'}}>Sign Out</Text>
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
      alignItems:'center'
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
  