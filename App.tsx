import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import MainRout from './src/routs/MainRout';


export default function App() {

  return (
    <NativeBaseProvider>
      <MainRout />
      <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}
