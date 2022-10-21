import { IInputProps, Input, IPressableProps, Pressable, Text, View, VStack } from "native-base";
import { FontAwesome } from '@expo/vector-icons';

import Colors from "../utils/styles/Colors";

type props = IPressableProps & {
    text: string;
    theme?: string;
    noBackGround?: boolean;
    iconTrash?: boolean;
};

export default function ButtonForm({ text, theme, noBackGround, iconTrash, ...rest }: props) {
    return (
        <>
            {!noBackGround ? <VStack backgroundColor={Colors.lightBlue} paddingX={'6'} paddingTop={6}>
            <Pressable backgroundColor={theme != undefined && theme != 'light' ? Colors.darkBlue : Colors.white} _pressed={{ backgroundColor: theme != undefined && theme != 'light' ? Colors.lightBlue : Colors.darkBlue }}
                borderWidth={0} w={'100%'} p={'3'}
                borderRadius={'md'} {...rest}>
                <Text alignSelf={'center'} fontSize={'md'}
                    color={theme != undefined && theme != 'light' ? Colors.white : Colors.darkBlue}>{text}</Text>
            </Pressable>
        </VStack >
                :
                <Pressable flexDirection={'row'} justifyContent={iconTrash ? 'space-between' : 'center'}
                    backgroundColor={theme != undefined && theme != 'light' ? Colors.darkBlue : Colors.white}
                    _pressed={{ backgroundColor: theme != undefined && theme != 'light' ? Colors.lightBlue : Colors.darkBlue }}
                    borderWidth={0} w={'100%'} p={'3'}
                    borderRadius={'md'} {...rest}>
                    <Text alignSelf={'center'} fontSize={'md'}
                        color={theme != undefined && theme != 'light' ? Colors.white : Colors.darkBlue}>{text}</Text>
                    {iconTrash &&

                        <FontAwesome name="trash-o" size={24} color={Colors.white} />
                    }
                </Pressable>
            }
        </>
    );
}