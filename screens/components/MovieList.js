import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import { image500 } from '../../api/movieDB'

const RenderMovies = ({item, pressMethod}) => {
    return(
        <View style={{flex:1, marginLeft: 10, width: 120}}>
            <TouchableOpacity
                onPress={() => pressMethod(item)}
                >
                <Image 
                    source={{uri: image500(item.poster_path)}} 
                    style={{
                        width: "100%",
                        height: "100%",
                    }} 
                />
            </TouchableOpacity>
        </View>
    )
}

export const MovieList = ({movie, navigation, text}) => {
    const pressMethod = (item) => {
        navigation.push("Movie", item)
    }

    return(
        <View style={{flex:1, height: 230}}>
            <Text style={{color:'white', fontSize: 30, fontWeight: 'bold', marginLeft: 15}}>{text}</Text>
            <View style={{flex:2,marginHorizontal: 10, marginTop: 10}}>
                <FlatList
                    horizontal
                    data={movie}
                    renderItem={({item})=> <RenderMovies pressMethod={pressMethod} item={item} />}
                />
            </View>
        </View>
    )
}