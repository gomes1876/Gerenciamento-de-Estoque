import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { useEffect } from 'react';
import MainRout from './src/routs/MainRout';
import { createData } from './src/sqlite/services/products.services';


export default function App() {

  useEffect(() => {
    createData();
  }, []);

  return (
    <NativeBaseProvider>
      <MainRout />
      <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}
