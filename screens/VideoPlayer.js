import {StyleSheet, Text, View} from 'react-native'
import {Video} from 'expo-av';
import video from './test.mp4'
import YoutubePlayer from 'react-native-youtube-iframe';

export const VideoPlayer = () => {
    return(
        <View style={{flex:1}}>
            {/* <Video 
            source={video}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay
            isLooping
            style={{ width: 300, height: 300 }}
        /> */}
        <View style={{borderColor:'black',borderWidth:1}}>
            <YoutubePlayer
            height={'50%'}
            play={true}
            videoId={'I0OUR7axHyM'}
            width={300}
            style={{borderColor:'red',borderWidth:1}}
            />
        </View>
        <Text>Wow</Text>
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