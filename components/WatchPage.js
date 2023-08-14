import * as React from 'react';
import {
  StyleSheet,
  useWindowDimensions,
  SafeAreaView
} from 'react-native';
import { Video } from 'expo-av';
import { firebase } from '../Firebase/firebase';
import { 
  GestureHandlerRootView,
  PanGestureHandler, 
  TapGestureHandler 
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing
} from 'react-native-reanimated';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const WatchPage = ({navigation}) => {

  const video = React.useRef(null);
  const [users, setUsers] = React.useState([]);
  const videosRef = firebase.firestore().collection('videos');
  const y = useSharedValue(0);
  const { height } = useWindowDimensions;

  const videos = [
    'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
    'https://storage.cloud.google.com/my-diall-app-videos/testVideo.mp4'
  ]

  const animatedStyleContainer = useAnimatedStyle(() => ({
    transform: [{ translateY: withTiming(y.value, { duration: 100, easing: Easing.linear }) }],
  }))

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('Focus');
      if (this.video) {
        this.video.playAsync();
      }
    });

    return unsubscribe;
  }, [navigation]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      console.log('Blur');
      if (this.video) {
        this.video.pauseAsync();
      }
    });

    return unsubscribe;
  }, [navigation]);

  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePlaying = () => {
    if (this.video) {
      if (isPlaying) {
        this.video.pauseAsync();
      } else {
        this.video.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  }

  React.useEffect(() => {
    videosRef
      .onSnapshot(
        querySnapShot => {
          const users = []
          querySnapShot.forEach((doc) => {
            const { url } = doc.data()
            users.push({
              id: doc.id,
              url
            })
          })
          setUsers(users)
        }
      )
  }, [])

  state = {
    paused: true
  }

  const swipeVideo = useAnimatedGestureHandler({
    onStart: () => {
      console.log("Started")
    },
    onActive: (event) => {
      console.log(event)
      y.value = event.translationY;
    },
    onEnd: () => {
      if (y.value > 50) {
        y.value = withTiming(0, { easing: Easing.linear });
      } else {
        y.value = withTiming(-height, { easing: Easing.linear });
      }
    }
  })

  return (
    <SafeAreaView style={styles.container2}>

    <GestureHandlerRootView style={styles.container}>
      <PanGestureHandler onGestureEvent={swipeVideo}>
        <Animated.View           style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            //backgroundColor: "red",
            bottom: 0,
            left: 0,
          }}>
          <TapGestureHandler onHandlerStateChange={handlePlaying}>
          <Animated.View style={animatedStyleContainer}>
          {/* {isPlaying ? null : (
              <Animated.View style={{justifyContent:"center", alignItems:"center", backgroundColor:"black"}}>
                <MaterialCommunityIcons name="pause" color="black" size={30} />
              </Animated.View>
            )} */}
            <Video
              //data = {users}
              ref={ref => { this.video = ref }}
              style={styles.video}
              source={{
                uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}}
              useNativeControls={false}
              resizeMode="cover"
              isLooping
              shouldPlay={true}
            />
          </Animated.View>
        </TapGestureHandler>
        </Animated.View>
      </PanGestureHandler>
    </GestureHandlerRootView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CCC',
  },
  container2: {
    flex: 1,
    backgroundColor:'black'
  },
  video: {
    alignSelf: 'center',
    width: '100%',
    height: "100%",
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fakeContent: {
    height: 900,
    backgroundColor: '#ecf0f1',
    paddingTop: 250,
    alignItems: "center"
  },
});

export default WatchPage;