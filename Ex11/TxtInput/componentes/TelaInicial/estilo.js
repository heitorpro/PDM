import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  tela: {
    width: '100%',
    justifyContent: "center",
    alignItems: 'center',
  },

  boxNumero: {
    borderColor: 'red',
    backgroundColor: 'red',
    borderWidth: 5,
    height: 150,
    width: 150,
    borderRadius: 75,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
    marginTop:30,
  },

  titulo: {
    fontSize: 20,
    marginVertical: 30,
    paddingHorizontal: 20,
    textAlign: "center"
  },

  numero: {
    fontSize: 70,
    color: '#fff',
  },

  boxBotao: {
    width: 200,
    marginTop:50,
  }
});

export default estilo;