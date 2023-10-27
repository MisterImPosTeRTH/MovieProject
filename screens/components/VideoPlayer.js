import {StyleSheet, Text, View, FlatList} from 'react-native'
import YoutubePlayer from 'react-native-youtube-iframe'

const videoRender = ({item,index}) => {
    return(
        <View style={{width: 340, marginRight: 20}}>
        <YoutubePlayer
            height={'100%'}
            play={true}
            videoId={item.key}
        />
        </View>
    )
}

export const VideoPlayer = ({video}) => {
    return (
        <View>
            <FlatList
                horizontal
                data={video}
                renderItem={videoRender}
                keyExtractor={(item) => item.id}
            >
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
})