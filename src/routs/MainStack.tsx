
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddItem from "../screens/AddItem";
import Home from "../screens/Home";
import { RootStackParamList } from "../types/RoutParams";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function MainStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="AddItem" component={AddItem} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}