import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  fundo: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: "center"
  },
  texto: {
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 26,
    textTransform: "uppercase",
    fontWeight: "700",
    textAlign: "center",
    color: "#1f4f66"
  },
  boxBotoes: {
    flexDirection: 'row',
  },
  boxBotao: {
    width: 130,
    marginBottom: 10,
    paddingHorizontal: 5
  }
});

export default estilo;