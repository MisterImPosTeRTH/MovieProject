import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import {fetchMoviesByGenre, image500} from '../api/movieDB'
import { FontAwesome5 } from '@expo/vector-icons';

export const GenreMovies = ({navigation}) => {
    const {params: item} = useRoute()
    const [data,setData] = useState([])
    const [page,setPage] = useState(1)

    useEffect(()=>{
        getMovies(item.id)
    },[page]);
    
    const getMovies = async(id) => {
        const data = await fetchMoviesByGenre(id,page)
        if(data){
          setData(data.results)
          console.log(data)
        }
        console.log("Wow")
    }


    return (
        <View style={styles.container}>
            <View style={{flex:2,width:'100%',flexDirection:'row'}}>
                <View style={{flex:2,alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity
                        onPress={()=>{
                            navigation.goBack()
                        }}
                    >
                        <FontAwesome5 name="angle-left" size={50} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={{flex:5,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:'#FA9905',fontWeight:'bold',fontSize:30,textAlign:'center'}}>{item.name}</Text>
                </View>
                <View style={{flex:2}}>

                </View>
                
            </View>
            <View style={{flex:15,width:'100%'}}>
                <ScrollView>
                    <View style={{flexDirection:'row', flexWrap: 'wrap'}}>
                    {
                        data.map((item,index)=>{
                            return(
                                <TouchableOpacity
                                    style={{width : '50%',paddingHorizontal: 10, marginBottom: 5, height: 350}}
                                    onPress={()=>{
                                        navigation.navigate("Movie",item)
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
                                        <Text style={{marginTop: 1,color:'white',fontSize:18, fontWeight:'bold'}}>{item.title}</Text>
                                    </View>
                                </TouchableOpacity> 
                            )
                        })
                    }
                    </View>
                </ScrollView>
            </View>
            <View style={{flex:2,flexDirection:'row'}}>
                <View style={{flex:2,alignItems:'center',justifyContent:'center'}}>
                {
                    page>1?(
                        <TouchableOpacity
                            onPress={()=>{
                                setPage(page-1)
                            }}
                        >
                            <FontAwesome5 name="angle-left" size={50} color="white" />
                        </TouchableOpacity>
                    ):('')
                }
                </View>
                <View style={{flex:7,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:'white',fontSize:25,fontWeight:'bold'}}>{page}</Text>
                </View>
                <View style={{flex:2,alignItems:'center',justifyContent:'center'}}>
                {
                    page<5?(
                        <TouchableOpacity
                            onPress={()=>{
                                setPage(page+1)
                            }}
                        >
                            <FontAwesome5 name="angle-right" size={50} color="white" />
                        </TouchableOpacity>
                    ):('')
                }
                </View>
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