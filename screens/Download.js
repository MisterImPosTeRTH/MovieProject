import {
    Text,
    SafeAreaView,
    StyleSheet,
    View,
    Dimensions,
    TextInput,
    TouchableOpacity,
    } from 'react-native';
  import { AntDesign, MaterialCommunityIcons, } from '@expo/vector-icons';
  
  export const DownloadScreen = ({navigation}) => {
  
    return (
      <SafeAreaView style={styles.container}>
        <View style = {{
          width: '100%',
          height: Dimensions.get('window').height * 0.14,
        }}>
          <View style = {styles.circleTopRight}></View>
        </View>
  
        <View style = {{flex:4}}>
          <View style = {styles.fromBox}>
            <View style = {{
              width: Dimensions.get('window').width * 1,
              height: Dimensions.get('window').height * 0.1,
              alignItems:'center',
              justifyContent:'center',
              paddingTop:30,
              }}>
              <Text style = {{fontSize:30, fontWeight:'bold', color:'#DE703C'}}>FORGET PASSWORD</Text>
            </View>
  
            <View style = {{
              width: Dimensions.get('window').width * 0.9,
              height: Dimensions.get('window').height * 0.1,
              alignItems:'center',
              justifyContent:'center',
              paddingVertical:10,
              paddingHorizontal:15,
              }}>
              <View style = {styles.textInput}>
                  <MaterialCommunityIcons
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
                  placeholderTextColor = 'darkgray' />
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
                    borderRadius:999}}>
                  <Text style = {{fontSize:20, color:'white'}}>Recover</Text>
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
                  >
                  <Text style = {{fontSize:20, color:'#DE703C'}}>Cancel</Text>
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
      flex:1,
      width: Dimensions.get('window').width * 0.95,
      justifyContent:'center',
      alignItems:'center',
      paddingTop:100,
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
  