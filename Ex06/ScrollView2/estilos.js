import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 30,
    flex: 1,
    alignItems: 'center',
    backgroundColor:'darkred',
  },
  imagem: {
    width: 300,
    height: 300,
    marginBottom: 20,
    borderRadius: 12,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  subtitulo: {
    fontSize: 22,
    marginBottom: 20
  },
  paragrafo: {
    color: 'white',
    marginBottom: 20,
    fontSize: 18,
    padding: 30,
  },
  Sv: {
    borderRadius: 15,
    backgroundColor: '#EB1E1E',
  }
});

export default estilos;