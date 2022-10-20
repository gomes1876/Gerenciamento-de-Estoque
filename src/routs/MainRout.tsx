import {
    NavigationContainer,
} from "@react-navigation/native";

import MainStack from "./MainStack";

export default function MainRout() {
    return (
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    );
}
