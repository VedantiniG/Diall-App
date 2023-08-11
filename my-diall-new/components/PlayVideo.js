import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import VideoPlayer from 'react-native-video-player';
import Video from 'react-native-video';
import video from '../video/testVideo.mp4'

const PlayVideo = () => {
  return (
    <View style={styles.container}>
      <Text>kdvkdhv</Text>
      <Video  
            source={video}                  // the video file
            paused={false}                  // make it start    
            repeat={true}                   // make it a loop
        />
      {/* <VideoPlayer
    video={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
    videoWidth={1600}
    videoHeight={900}
    thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    flex: 1,
    width: '100%',
  },
});

export default PlayVideo;
