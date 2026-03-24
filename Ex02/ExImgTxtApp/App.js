import { StatusBar } from 'expo-status-bar';
import { Image,StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textlg}>NIKE</Text>
       <Image
        source={{ uri : 'https://w7.pngwing.com/pngs/953/173/png-transparent-red-nike-logo-air-force-nike-swoosh-logo-brand-nike-angle-sticker-shoe.png'}}
        style={styles.image}
      />

      <Text style={styles.text}>A Nike é a principal fabricante mundial de calçados, roupas e equipamentos esportivos,
        sendo reconhecida globalmente pelo icônico logotipo "Swoosh" e pelo slogan "Just Do It". No Brasil, a operação
        da marca é distribuída oficialmente pela Fisia (Grupo SBF), que gerencia o e-commerce e diversas lojas físicas.
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 100
  },

  textlg: {
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  
  text: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 50,
    textAlign: 'justify',
    fontStyle: 'italic',
    width: 350,
    height: 200,
  },

  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
