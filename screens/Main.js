import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react'
import { fetchTrendingMovies, fetchTopRatedMovies, fetchUpcomingMovies } from '../api/movieDB'
import { MovieList } from './components/MovieList'

export const MainScreen = ({navigation}) => {
  const [trending, setTrending] = useState({})
  const [upcoming, setUpcoming] = useState({})
  const [toprated, setTopRated] = useState({})

  useEffect(()=>{
    getTrendingMovies();
    getUpcomingMovies();
    getTopRatedMovies();
  },[]);

  const getTrendingMovies = async() => {
    const data = await fetchTrendingMovies()
    if(data){
      setTrending(data.results)
    }
  }

  const getUpcomingMovies = async() => {
    const data = await fetchUpcomingMovies()
    if(data){
      setUpcoming(data.results)
    }
  }

  const getTopRatedMovies = async() => {
    const data = await fetchTopRatedMovies()
    if(data){
      setTopRated(data.results)
    }
  }

  return (
    <View style={styles.container}>
      <View style={{flex:1, marginTop: 50}}>
        <View style={{flex:1, flexDirection: 'row', width: '100%'}}>
          <View style={{flex: 7}}></View>
          <View style={{flex: 2, justifyContent: 'center', alignItems:'center'}}>
            <TouchableOpacity style={{justifyContent: 'center', alignItems:'center'}}>
              <MaterialCommunityIcons name="movie-search" size={35} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex:10}}>
          <ScrollView>
            <MovieList text={"Trending"} movie={trending} navigation={navigation}/>
            <MovieList text={"Upcoming"} movie={upcoming} navigation={navigation}/>
            <MovieList text={"Top Rated"} movie={toprated} navigation={navigation}/>
          </ScrollView>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#320450',
    alignItems:'center',
  },
});