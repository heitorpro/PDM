import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texttop}>Exibição da Logo!</Text>

      <Image
        source={{uri: "https://w7.pngwing.com/pngs/953/173/png-transparent-red-nike-logo-air-force-nike-swoosh-logo-brand-nike-angle-sticker-shoe.png"}}
        style={styles.logo}
      />

      <Text style={styles.textfooter}>Logo DevMedia</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  texttop: {
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 100,
  },

  textfooter: {
    color: 'darkred',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 200,
    fontStyle: 'italic',
  },

  logo: {
    width: 200,
    height: 100,
  },

  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
