import { Flex, Image, Input, Pressable, Text, View, VStack } from "native-base";
import { useState } from "react";
import ButtonForm from "../components/ButtonForm";
import ItemForm from "../components/ItemForm";
import Colors from "../utils/styles/Colors";
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { insertData } from "../sqlite/services/products.services";
import { image, item } from "../types/Item";


export default function AddItem() {
    const defaultItemValue: item = {
        image: '',
        inventory: 0,
        price: 0,
        title: ""
    }
    const [formData, setData] = useState<item>(defaultItemValue);
    const [image, setImage] = useState<string | ''>('');
    const navigation = useNavigation();

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        // console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    async function save() {
        console.log(image);

        await insertData({
            image,
            inventory: formData.inventory,
            price: formData.price,
            title: formData.title
        });

        navigation.navigate('Home');
    }

    return (
        <View flex={1} backgroundColor={Colors.lightBlue} paddingTop={'6'}>
            <Pressable backgroundColor={Colors.darkBlue} p={'1'} borderRadius={'md'}
                alignSelf={'flex-start'} marginLeft={'3%'} marginTop={'3%'}
                onPress={() => navigation.goBack()}
            >
                <MaterialIcons name="arrow-forward-ios" size={24} color={Colors.lightBlue}
                    style={{ transform: [{ rotateY: '180deg' }], width: '100%', }}
                />
            </Pressable>

            <Text mt={'3'} color={Colors.darkBlue} fontWeight={'bold'} fontSize={'2xl'} ml={'6'}>Adicionar item</Text>
            <ItemForm title="Título" onChangeText={value => setData({ ...formData, title: value })} />
            <ItemForm keyboardType="number-pad" title="Quantidade" onChangeText={value => setData({ ...formData, inventory: parseInt(value) })} />
            <ItemForm keyboardType="number-pad" title="Valor" onChangeText={value => setData({ ...formData, price: parseFloat(value) })} />

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
                        source={{ uri: image.toString() }} alt="imagem do produto"
                        size="md" alignSelf={'center'} />
                </View>
            }

            <ButtonForm text="Adicionar Foto" onPress={pickImage} />
            <ButtonForm theme="darl" text="Concluir" onPress={save} />
        </View>
    );
}