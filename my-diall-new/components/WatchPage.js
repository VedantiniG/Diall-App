import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Constants } from "react-native";
import { View, Text, SafeAreaView } from "react-native";
import PlayVideo from "./PlayVideo";

const Stack = createNativeStackNavigator();
const WatchPage = () => {
    return (
        // <View>
        //     <Text>Watch Page</Text>
        // </View>
        <Stack.Navigator>
            <Stack.Screen name="Video" component={PlayVideo}/>
        </Stack.Navigator>
    )
}

export default WatchPage;