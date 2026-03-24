import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
      <View style={{
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
      }  }>

      <Text style={{
        color: 'red',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 100,
      }}>
      Exibição da Logo!</Text>

      <Image
        source={{uri: "https://w7.pngwing.com/pngs/953/173/png-transparent-red-nike-logo-air-force-nike-swoosh-logo-brand-nike-angle-sticker-shoe.png"}}
        style={{
          width: 200,
          height: 100,}}
      />

      <Text style={{
        color: 'darkred',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 200,
        fontStyle: 'italic',}}>
      Logo DevMedia com estilização inline</Text>


      <StatusBar style="auto" />
    </View>
  );
}
