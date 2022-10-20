import { HStack, Icon, Input, IInputProps, VStack } from "native-base";
import Colors from "../utils/styles/Colors";
import { Feather } from '@expo/vector-icons';
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

type props = IInputProps & {
    value: string;
    action: any;
};

export default function Searchitem({ value, action, ...rest }: props) {

    useEffect(() => {
        if (value.length > 0) {
            action()
        }
    }, [value]);

    return (
        <SafeAreaView>
            <VStack w={'100%'} h={'12'} backgroundColor={Colors.white} borderRadius={'md'} borderWidth={'1'} borderColor={Colors.darkBlue}>
                <Input w={'100%'} h={'100%'} color={Colors.darkBlue}
                    _focus={{
                        backgroundColor: Colors.darkBlue, borderWidth: 0,
                        color: Colors.lightBlue, selectionColor: Colors.white,
                    }}
                    value={value}

                    rightElement={<Icon
                        as={<Feather name="search" size={24} color="black" />}
                        size={5}
                        mr="2"
                        color={Colors.darkBlue}
                    />}
                    {...rest}
                />

            </VStack>
        </SafeAreaView>
    );
}