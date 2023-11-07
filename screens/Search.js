import { View, TextInput, TouchableOpacity, StyleSheet, Text, ScrollView, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useState, useEffect } from 'react'
import { searchMovies, image500 } from '../api/movieDB'

export const Search = ({navigation}) => {
    const [loading, isLoading] = useState()
    const [data, setData] = useState([])
    const [text, setText] = useState("")

    useEffect(()=>{
        searchMovies({
            query: text,
            include_adult: 'false',
            language: 'en-US',
            page: '1'
        }).then((data)=>{
            if(data){
                setData(data.results)
            }
        })
        console.log(text)
    },[text]);

    return (
        <View style={styles.container}>
            <View style={{flex:1, width: '100%', justifyContent:'center'}}>
                <TextInput
                    style={{borderColor: 'white', borderWidth:2, borderRadius: 50, height:'80%', paddingLeft: 30, marginHorizontal: 10, fontSize: 16, fontWeight: 'bold', color: 'white'}}
                    placeholder={"Search Here!!"}
                    placeholderTextColor={"white"}
                    onChangeText={(input)=>{
                        setText(input)
                    }}
                />
                <View style={{width:'100%',alignItems: 'flex-end',position: 'absolute'}}>
                    <TouchableOpacity onPress={()=>{
                        navigation.navigate("Main")
                    }}>
                        <AntDesign style={{marginRight: 30}} name="closecircle" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex:10, width: '100%'}}>
            {
                data.length > 0?(
                    <ScrollView>
                        <View style={{flexDirection: "row",flexWrap:'wrap'}}>
                            {
                                data.map((item, index)=>{
                                    return(
                                        <TouchableOpacity
                                            style={{ width : '50%',paddingHorizontal: 10, marginBottom: 5, height: 350}}
                                            onPress={()=>{
                                                navigation.navigate("Movie", item)
                                            }}
                                            key={index}    
                                        >
                                            <View style={{height: 250, marginVertical: 20}}>
                                                {
                                                    item.poster_path?(
                                                        <Image 
                                                            source={{uri: image500(item.poster_path)}} 
                                                            style={{
                                                                height: "100%",
                                                            }} 
                                                        />
                                                    ):(
                                                        <View style={{backgroundColor:'white',height:'100%', justifyContent: 'center', alignItems:'center'}}>
                                                            <Text style={{color:'black', fontSize:25}}>No Image</Text>
                                                        </View>
                                                    )
                                                }
                                                <Text style={{marginTop: 5,color:'white',fontSize:20,fontWeight:'bold'}}>{item.title}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                })                    
                            }
                        </View>
                        <View style={{height: 50}}></View>
                    </ScrollView>
                ):text!=""?(        
                    <View style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{color:'white', fontWeight:'bold', fontSize: 45}}>Not found</Text>
                        <Text style={{color:'white',fontSize:16}}>Please try another word</Text>
                    </View>
                ):(
                    <View style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                    </View>
                )
            }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#320450',
        paddingTop: 50,
        alignItems:'center',
    }
})