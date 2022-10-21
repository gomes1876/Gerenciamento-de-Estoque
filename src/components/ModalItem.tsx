import { Button, Center, HStack, Image, IModalProps, Input, Modal, Pressable, Text, VStack } from "native-base";
import { useEffect, useState } from "react";
import { item } from "../types/Item";
import Colors from "../utils/styles/Colors";
import ButtonForm from "./ButtonForm";
import { AntDesign } from '@expo/vector-icons';

import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ItemForm from "./ItemForm";
import { delateByName, updateByName } from "../sqlite/services/products.services";


type props = IModalProps & {
    visible: boolean;
    setVisible: (value: any) => any;
    item: item;
    update: () => any;
}

export default function ModalItem({ visible, setVisible, item, update, ...rest }: props) {

    const [item2, setItem2] = useState<item>(item);
    const [inputVisible, setInputVisible] = useState(false)
    function addQuantity() {

        setItem2({
            ...item2,
            inventory: item2 == null || item2.inventory == null ? 1 : item2.inventory + 1,
        });

    }
    function editPriceValue(e: string) {

        if (e != "" && e != undefined) {
            setItem2({ ...item2, price: parseFloat(e) });
        } else {
            setItem2({ ...item2, price: 0 });
        }
    }

    useEffect(() => {
        if (item2 == null) {
            setItem2(item);
        }

        if (item2?.inventory != item?.inventory && item2?.inventory != undefined) {
            item = item2;
        }

    }, [item2, item]);

    return (
        <Center>
            <Modal backgroundColor={Colors.lightBlue_RGBA} isOpen={visible} onClose={() => setVisible(false)} {...rest}>
                <Modal.Content backgroundColor={Colors.white}>
                    <Modal.CloseButton color={Colors.darkBlue} _pressed={{ backgroundColor: Colors.lightBlue }}
                        onPress={() => {
                            update();
                            setItem2(null);
                            setVisible(false);
                        }} />
                    <Modal.Header backgroundColor={Colors.white}>
                        <Text color={Colors.darkBlue} fontWeight={'medium'} fontSize={'xl'}>{item2?.title}</Text>
                    </Modal.Header>

                    <Modal.Body>
                        <Image borderRadius={'md'} alignSelf={'center'} w={'48'} h={'40'} source={{ uri: item2?.image }} alt={'imagem do produto'} />
                        <HStack borderWidth={'1'} padding={'2'} borderRadius={'md'} borderColor={Colors.darkBlue} mt={'4'} justifyContent={'space-between'} alignItems={'center'}>
                            <MaterialIcons name="inventory" size={26} color={Colors.darkBlue} />

                            <HStack space={'4'}>
                                <AntDesign name="minuscircle" size={24} color={Colors.darkBlue} />
                                <Text color={Colors.darkBlue} fontWeight={'medium'} fontSize={'lg'}>{item2?.inventory}</Text>
                                <Pressable onPress={addQuantity}>
                                    <AntDesign name="pluscircle" size={24} color={Colors.darkBlue} />
                                </Pressable>
                            </HStack>
                        </HStack>

                        <HStack borderWidth={'1'} padding={'2'} borderRadius={'md'} borderColor={Colors.darkBlue} mt={'2'} justifyContent={'space-between'} alignItems={'center'}>
                            <MaterialIcons
                                mt={"4"}
                                name="attach-money"
                                size={28}
                                color={Colors.darkBlue}
                            />
                            <HStack space={'3'} >

                                {!inputVisible ? <HStack>
                                    <Text color={Colors.darkBlue} fontWeight={'medium'} fontSize={'lg'}>R$ {item2?.price}</Text>
                                    <Pressable onPress={() => setInputVisible(true)}>
                                        <MaterialCommunityIcons name="pencil-circle" size={28} color={Colors.darkBlue} />
                                    </Pressable>
                                </HStack>
                                    :
                                    <Input

                                        textAlign={'center'} w={'20'} h={'8'} borderWidth={'1'} borderColor={Colors.lightBlue}
                                        value={item2?.price?.toString()} onChangeText={editPriceValue}
                                        onSubmitEditing={() => setInputVisible(false)}
                                    />}

                            </HStack>
                        </HStack>
                        <ButtonForm iconTrash={true} mt={'2'} backgroundColor={'red.300'} onPress={() => { delateByName(item); update(); setVisible(false); }} noBackGround={true} theme={'dark'} text={'Excluir'} />
                    </Modal.Body>

                    <Modal.Footer backgroundColor={Colors.white} >
                        <ButtonForm onPress={() => { updateByName(item2); update(); setVisible(false); setItem2(undefined) }} noBackGround={true} theme={'dark'} text={'Concluir'} />
                    </Modal.Footer>

                </Modal.Content>
            </Modal>
        </Center >
    );
}