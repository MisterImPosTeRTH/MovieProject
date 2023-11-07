import { Text, TouchableOpacity, View, StyleSheet, Image, ScrollView } from 'react-native'
import { useRoute } from '@react-navigation/native'
import {useState, useEffect} from 'react'
import { VideoPlayer } from './components/VideoPlayer'
import { fetchMovieDetails, fetchMovieVideo, image500 } from '../api/movieDB'
import { AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';

export const MoviePage = ({navigation}) => {
    const {params: item} = useRoute()
    const [movie, setMovie] = useState({})
    const [video, setVideo] = useState({})

    useEffect(()=>{
        getMovieDetails(item.id)
        getVideoDetails(item.id)
    },[item])

    const getMovieDetails = async(id)=>{
        const data = await fetchMovieDetails(id);
        if(data) {
            setMovie({...movie, ...data});
        }
    }

    const getVideoDetails = async(id)=> {
        const data = await fetchMovieVideo(id)
        if(data) {
            setVideo(data.results)
            console.log(video)
        }
    }

    const goBacktoPrevious = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex:1}}>
                    <TouchableOpacity
                        style={{ width:'100%', height: '100%',justifyContent: 'center', alignItems: 'center'}}
                        onPress = {goBacktoPrevious}
                    >
                        <AntDesign name="leftcircle" size={35} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={{flex:3}}></View>
                <View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="movie-plus" size={40} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex:9,width:'100%'}}>
                <ScrollView>
                    <View style={{height:300, alignItems:'center', width: '100%'}}>
                        {
                            movie?.poster_path?(
                                <Image
                                    source={{uri:image500(movie?.poster_path)}}
                                    style={{width:'60%', height: '100%'}}
                                />
                            ):(
                                <View style={{backgroundColor:'white',height:'100%',width:'50%', justifyContent: 'center', alignItems:'center'}}>
                                    <Text style={{color:'black', fontSize:25}}>No Image</Text>
                                </View>
                            )
                        }

                    </View>
                    <View style={{marginHorizontal:10}}>
                        <View>
                            <Text style={styles.titleText}>{movie?.title}</Text>
                            <Text style={styles.statusText}>{movie?.status} - {movie?.release_date?.split('-')[0]} - {movie?.runtime} min</Text>
                            <Text style={styles.detailText}>
                            {
                                movie?.overview?(movie?.overview):("Coming Soon")
                            }
                            </Text>
                        </View>
                        <View style={{height: 200}}>
                        {
                            <VideoPlayer video={video} />
                        }
                            
                        </View>
                        <View style={{height: 50}}></View>
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
    },
    titleText :{
        fontWeight: 'bold',
        color: 'white',
        textAlign:'center',
        fontSize: 30,
        marginHorizontal: 20,
        marginTop: 10  
    },
    statusText: {
        fontWeight: 'bold',
        color: 'white',
        textAlign:'center',
        fontSize: 15,
        marginTop: 10
    },
    detailText: {
        color: 'lightgray',
        textAlign:'center',
        fontSize: 14,
        marginVertical: 20
    },
})