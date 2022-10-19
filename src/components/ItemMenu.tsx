import { VStack, IStackProps, Text, HStack, Image } from "native-base";
import Colors from "../utils/styles/Colors";

import { MaterialIcons } from "@expo/vector-icons";

type props = IStackProps & {
  title: string;
  inventory: string;
  price: string;
  image: string;
};

export default function ItemMenu({ title, inventory, price, image, ...rest }: props) {
  return (
    <VStack
      w={"1/2"}
      backgroundColor={Colors.white}
      paddingX={"4"}
      paddingTop={'4'}
      paddingBottom={'4'}
      borderRadius={"md"}
      {...rest}
    >
      <Text fontSize={"xl"} color={Colors.darkBlue}>
        {title}
      </Text>
      {/* <Image source={{uri: '../testData/img01'}}/> */}
      {/* { image && */}
        <Image alignSelf={'center'} h={'32'} source={{uri:`data:image/jpeg;base64,${image}`}} alt={'any'}/>
      {/* } */}
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
    </VStack>
  );
}
