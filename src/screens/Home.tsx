import { FlatList, View } from "native-base";
import { useState } from "react";

import { AddButton } from "../components/AddButton";
import ItemMenu from "../components/ItemMenu";
import Searchitem from "../components/SearchItem";
import { img01 } from "../testData/images";
import Colors from "../utils/styles/Colors";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
    const image = ``;
    const [search, setSearch] = useState('');
    const navigation = useNavigation();

    const data = [
        {
            title: 'prod01',
            inventory: '10',
            price: '12.5',
            image: img01,
        },
        {
            title: 'prod02',
            inventory: '0',
            price: '27.5',
            image: img01,
        },
        {
            title: 'prod03',
            inventory: '18',
            price: '16',
            image: img01,
        },
        {
            title: 'prod03',
            inventory: '18',
            price: '16',
            image: img01,
        },
        {
            title: 'prod03',
            inventory: '18',
            price: '16',
            image: img01,
        },
    ]

    const [dataUsable, setDataUsable] = useState(data)

    function searchItems() {
        setDataUsable(data.filter(item => {
            console.log(item.title.includes(search));
            return item.title.includes(search)
        }));
    }

    return (
        <View flex={1} padding={'4'} backgroundColor={Colors.lightBlue}>
            <View marginTop={'4'}>
                <Searchitem value={search} onChangeText={setSearch} action={searchItems} />
                <AddButton mb={'20'} onPress={() => navigation.navigate('AddItem')} />
                <FlatList data={dataUsable}
                    numColumns={2}
                    mb={'20'}
                    renderItem={({ item }) =>
                        <ItemMenu flex={1} mt={'2'} ml={'1'} image={item.image}
                            price={item.price} inventory={item.inventory}
                            title={item.title} />}
                />
            </View>
        </View>
    );
}