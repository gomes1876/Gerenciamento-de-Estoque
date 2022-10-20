import {
    NavigatorScreenParams,
} from "@react-navigation/native";

export type RootStackParamList = {
    Root: NavigatorScreenParams<RootTabParamList> | undefined;
}

export type RootTabParamList = {
    AddItem: undefined;
};