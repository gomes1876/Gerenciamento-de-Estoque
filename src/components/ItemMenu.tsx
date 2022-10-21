import { VStack, IPressableProps, Text, HStack, Image, Pressable, IStackProps } from "native-base";
import Colors from "../utils/styles/Colors";

import { MaterialIcons } from "@expo/vector-icons";
import { item } from "../types/Item";

type props = IStackProps & item & {
  onPress: () => any;
};

export default function ItemMenu({ title, inventory, price, image, onPress, ...rest }: props) {

  return (
    <VStack w={"1/2"}
      backgroundColor={Colors.white}
      borderRadius={"md"}
      _pressed={{ backgroundColor: Colors.darkBlue }}
      // onPress={() => { console.log('oi') }}
      {...rest}>
      <Pressable
        borderRadius={"md"}
        onPress={onPress}
        padding={"4"}
        _pressed={{ backgroundColor: Colors.lightBlue_RGBA }}
      >

        <Text fontSize={"xl"} color={Colors.darkBlue}>
          {title}
        </Text>
        <Image alignSelf={'center'} h={'32'} w={'100%'} borderRadius={'md'} source={{ uri: image }} alt={'sem imagem'} />
        <VStack mt={'4'} space={'1'}>
          <HStack>
            <MaterialIcons name="inventory" size={26} color={Colors.darkBlue} />
            <Text ml={"2"} fontSize={"lg"} color={Colors.darkBlue}>
              {inventory}
            </Text>
          </HStack>
          <HStack>
            <MaterialIcons
              mt={"4"}
              name="attach-money"
              size={28}
              color={Colors.darkBlue}
            />
            <Text fontSize={"lg"} color={Colors.darkBlue}>
              {price}
            </Text>
          </HStack>
        </VStack>
      </Pressable>
    </VStack>
  );
}
