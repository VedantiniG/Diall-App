import * as React from 'react';
import { Video } from 'expo-av';
import { firebase } from '../Firebase/firebase';

import {
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  TouchableHighlight,
  Text
} from 'react-native';



let width = Dimensions.get("window");

const WatchPage = () => {
  


  // reference 
  let vidRef = React.useRef(null);

  const [currentVid, setCurrentVid] = React.useState(0);
  const videosRef = firebase.firestore().collection('videos');
  const [users, setUsers] = React.useState([{"id": "", "url": ""}]);

  const viewabilityConfigCallbackPairs = React.useRef(
    ({ changed, viewableItems }) => {
      console.log("CHANGED", changed);
      console.log("VIEWABLE ITEMS", viewableItems);
      if (changed.length > 0) {
        setCurrentVid(changed[0].index);
      }

    }
  );

  React.useEffect(async() => {
    await videosRef
      .onSnapshot(
        querySnapShot => {
          const users = []
          querySnapShot.forEach((doc) => {
            const { url, userName } = doc.data()
            users.push({
              id: doc.id,
              url,
              userName
            })
          })
          setUsers(users)
        }
      )
  },[])

  VideoItem = ({ item, index }) => {
    const onPlayPausePress = () => {
      if (index === currentVid) {
        setCurrentVid(-1);
      } else {
        setCurrentVid(index);
      }
    };
    return (
      <View>
      <TouchableHighlight onPress={onPlayPausePress}>
      <Video
        ref={vidRef}
        source={{ uri: item.url }}
        style={styles.video}
        useNativeControls={false}
        resizeMode="contain"
        shouldPlay={index === currentVid}
        volume={4}
        isLooping
      />
    </TouchableHighlight>
    <View style={styles.textOverlay}>
        <Text style={styles.text}>{item.userName}</Text>
      </View>
    </View>
    )
  }

  const VideoList = ({ data }) => {
    const renderVids = ({ item, index }) => {
      return (
        <VideoItem item={item} isPlaying={index === currentVid}></VideoItem>
      );
    };

    return (
      <FlatList
        data={data}
        renderItem={renderVids}
        style={styles.page}
        keyExtractor={(item) => item}
        pagingEnabled={true}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 95,
        }}
        onViewableItemsChanged={viewabilityConfigCallbackPairs.current}
      />
    );
  }

  return (
    <View style={styles.container}>
      <VideoList data={users} />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  page: {
    width: "100%",
  },
  video: {
    width: width,
    height: 730,
  },
  textOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'baseline',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for text
    height:80,
    display: 'flex'
  },
  text: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 20,
    float: 'right',
  },
});

export default WatchPage;