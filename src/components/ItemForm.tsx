import { IInputProps, Input, Text, VStack } from "native-base";
import Colors from "../utils/styles/Colors";

type props = IInputProps & {
    title: string;
};

export default function ItemForm({ title, ...rest }: props) {
    return (
        <VStack backgroundColor={Colors.lightBlue} paddingX={'6'} paddingTop={4}>
            <Text color={Colors.darkBlue} fontSize={'xl'} fontWeight={'medium'}>{title}:</Text>
            <Input
                backgroundColor={Colors.white}
                color={Colors.darkBlue}
                borderWidth={0}
                _focus={{
                    selectionColor: Colors.lightBlue,
                }}
                {...rest} />
        </VStack>
    );
}