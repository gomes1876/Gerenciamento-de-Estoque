import { FlatList, View } from "native-base";
import { useEffect, useState } from "react";

import { AddButton } from "../components/AddButton";
import ItemMenu from "../components/ItemMenu";
import Searchitem from "../components/SearchItem";
import Colors from "../utils/styles/Colors";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { showData } from "../sqlite/services/products.services";
import { item } from "../types/Item";
import ModalItem from "../components/ModalItem";

export default function Home() {
    const image = ``;
    const [search, setSearch] = useState('');
    const navigation = useNavigation();
    const [itemSelect, setItemSelect] = useState<item>(null);
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [data, setData] = useState<item[]>([]);

    const [dataUsable, setDataUsable] = useState<item[]>(data)

    const isFocused = useIsFocused();

    useEffect(() => {
        
        // isFocused && init();
        const unsubscribe = navigation.addListener('focus', () => {
            init();
        });

        return unsubscribe;
    }, [navigation]);

    async function init() {
        const res: any = await showData();
        setData(res);
        setDataUsable(res);
    }

    function searchItems() {

        if (search != "") {
            setDataUsable(data.filter(item => {
                return item.title.includes(search)
            }));

        } else {
            setDataUsable(data);
        }
    }

    function actionModal() {
        setItemSelect(null);
        init();
    }

    return (
        <View flex={'1'} paddingTop={'4'} paddingX={'2'} backgroundColor={Colors.lightBlue}>
            <View flex={'1'} marginTop={'4'} justifyContent={'space-between'}>
                <Searchitem value={search} onChangeText={setSearch} action={searchItems} />
                <FlatList h={'full'} data={dataUsable}
                    numColumns={2}
                    mb={'6'}
                    renderItem={({ item: item }) => {
                        return (<ItemMenu flex={1} mt={'2'} ml={'1'} image={item.image}
                            price={item.price} inventory={item.inventory}
                            title={item.title}
                            onPress={() => {
                                setModalVisible(true);
                                setItemSelect(item);
                            }} />);
                    }}
                />
                <AddButton mb={'20'} onPress={() => navigation.navigate('AddItem')} />
                <ModalItem visible={modalVisible} setVisible={setModalVisible} item={itemSelect} update={actionModal} /> 
            </View>
        </View>
    );
}