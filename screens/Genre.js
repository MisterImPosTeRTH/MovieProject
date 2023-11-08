import {View, ScrollView, StyleSheet, TouchableOpacity,Text} from 'react-native'
import {useState, useEffect} from 'react'
import { fetchAllGenres } from '../api/movieDB'
import { FontAwesome5 } from '@expo/vector-icons';

export const Genre = ({navigation}) => {
    const [data, setData] = useState([])

    useEffect(()=>{
        getGenre();
    },[])

    const getGenre = async() => {
        const data = await fetchAllGenres()
        if(data){
            console.log(data)
            setData(data.genres)
        }
    }

    return (
        <View style={styles.container}>
            <View style={{width:'100%',flexDirection:'row'}}>
                <View style={{flex:2,justifyContent: 'center'}}>
                    <TouchableOpacity
                        style={{justifyContent: 'center', alignItems:'center'}}
                        onPress={()=>{
                            navigation.goBack()
                        }}
                    >
                        <FontAwesome5 name="angle-left" size={50} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={{flex:5,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'white', fontWeight:'bold', fontSize: 26}}>GENRES</Text>
                </View>
                <View style={{flex:2}}></View>
            </View>
            <View style={{width:'100%',flex:9}}>
                <ScrollView>
                {
                    data.map((item,index)=>{
                        return(
                            <TouchableOpacity
                                key={index}
                                style={{alignItems:'center', marginTop: 15}}
                                onPress={()=>{
                                    navigation.navigate("GenreMovies",item)
                                }}
                            >
                                <Text style={{fontSize: 40, fontWeight: 'bold', color:'#FA9905'}}>{item.name}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
                <View style={{height:50}}>                     
                </View>
                </ScrollView>
                
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