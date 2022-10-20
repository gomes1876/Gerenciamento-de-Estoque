import { Flex, Image, Input, Pressable, Text, View, VStack } from "native-base";
import { useState } from "react";
import ButtonForm from "../components/ButtonForm";
import ItemForm from "../components/ItemForm";
import Colors from "../utils/styles/Colors";
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function AddItem() {
    const [formData, setData] = useState({});
    const [image, setImage] = useState(null);
    const navigation = useNavigation();

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result?.uri);
        }
    };


    return (
        <View mt={'6'} flex={1} backgroundColor={Colors.lightBlue} >
            <Pressable backgroundColor={Colors.darkBlue} p={'1'} borderRadius={'md'}
                alignSelf={'flex-start'} marginLeft={'3%'} marginTop={'3%'}
                onPress={() => navigation.goBack()}
            >
                <MaterialIcons name="arrow-forward-ios" size={24} color={Colors.lightBlue}
                    style={{ transform: [{ rotateY: '180deg' }], width: '100%', }}
                />
            </Pressable>

            <Text mt={'3'} color={Colors.darkBlue} fontWeight={'bold'} fontSize={'2xl'} ml={'6'}>Adicionar item</Text>
            <ItemForm title="Título" onChangeText={value => setData({ ...formData, titulo: value })} />
            <ItemForm title="Quantidade" onChangeText={value => setData({ ...formData, quantidade: value })} />
            <ItemForm title="Valor" onChangeText={value => setData({ ...formData, valor: value })} />

            {image &&
                <View
                    mt={'6'} ml={'6'} w={'30%'} h={'32'}
                    backgroundColor={Colors.white}
                    borderRadius={'md'}
                >
                    <Pressable alignSelf={'flex-end'} mr={'2'} mb={'2'} mt={'2'} onPress={() => setImage(null)}>
                        <FontAwesome name="trash-o" size={20} color={Colors.darkBlue} />
                    </Pressable>

                    <Image w={'100%'} h={'100%'} borderRadius={'md'}
                        source={{ uri: image }} alt="Alternate Text"
                        size="md" alignSelf={'center'} />
                </View>
            }

            <ButtonForm text="Adicionar Foto" onPress={pickImage} />
            <VStack h={'100%'} >
                <ButtonForm theme="darl" text="Concluir" />
            </VStack>
        </View>
    );
}