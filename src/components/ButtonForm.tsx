import { IInputProps, Input, IPressableProps, Pressable, Text, View, VStack } from "native-base";

import Colors from "../utils/styles/Colors";

type props = IPressableProps & {
    text: string;
    theme?: string;
};

export default function ButtonForm({ text, theme, ...rest }: props) {
    return (
        <VStack backgroundColor={Colors.lightBlue} paddingX={'6'} paddingTop={6}>
            <Pressable backgroundColor={theme != undefined && theme != 'light' ? Colors.darkBlue : Colors.white} _pressed={{ backgroundColor: theme != undefined && theme != 'light' ? Colors.lightBlue : Colors.darkBlue }}
                borderWidth={0} w={'100%'} p={'3'}
                borderRadius={'md'} {...rest}>
                <Text alignSelf={'center'} fontSize={'md'}
                    color={theme != undefined && theme != 'light' ? Colors.white : Colors.darkBlue}>{text}</Text>
            </Pressable>
        </VStack >
    );
}