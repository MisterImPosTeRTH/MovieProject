import {StyleSheet, Text, View} from 'react-native'
import {Video} from 'expo-av';
import YoutubePlayer from 'react-native-youtube-iframe';

export const VideoPlayer = () => {
    return(
        <View style={{flex:1}}>
            <View style={{flex:2,height:200,borderColor:'red',borderWidth:1}}>
            </View>
            <View style={{flex:1,borderColor:'black',borderWidth:1}}>
                <YoutubePlayer
                height={'100%'}
                play={false}
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