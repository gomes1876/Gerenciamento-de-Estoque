import { StatusBar } from 'expo-status-bar';
import { FlatList, NativeBaseProvider, ScrollView, View } from 'native-base';
import { useEffect } from 'react';
// import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ItemMenu from './src/components/ItemMenu';
import { img01 } from './src/testData/images';
import Colors from './src/utils/styles/Colors';

export default function App() {
  const image = ``
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
  useEffect(() => {

  }, [])
  return (
    <NativeBaseProvider>
      {/* <SafeAreaView> */}
        <View flex={1} padding={'4'} backgroundColor={Colors.lightBlue}>
          {/* <Text>Open up App.tsx to start working on your app!</Text> */}
          <View marginTop={'4'}>
            
            <FlatList data={data} 
            numColumns={2}
            renderItem={({item})=>{
              return <ItemMenu 
              flex={1} mt={'2'} ml={'1'} image={item.image} price={item.price} inventory={item.inventory} title={item.title} />
            }}/>
          </View>
          <StatusBar style="auto" />
        </View>
      {/* </SafeAreaView> */}
    </NativeBaseProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
