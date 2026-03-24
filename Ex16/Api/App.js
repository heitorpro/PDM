import { useEffect, useState } from "react";
import { View } from "react-native";
import styles from "./estilos";

import Busca from "./componentes/Busca";
import Loading from "./componentes/Loading";
import ListagemUFs from "./componentes/UFs";

import { servico_buscaUFs, servico_retornaUFs } from "./servico/consultaUFs";

export default function App() {
  const [listaUFs, setListaUFs] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Alterado de null para false

  // Correção da sintaxe do useEffect
  useEffect(() => {
    retornaListaUFs();
  }, []);

  function retornaListaUFs() {
    servico_retornaUFs(setListaUFs, setIsLoading);
  }

  function buscaUFs(termo) {
    servico_buscaUFs(termo, setListaUFs, setIsLoading);
  }

  return (
    <View style={styles.Container}>
      <Busca 
        mostraBotao={!isLoading && listaUFs === null} 
        retornaListaUFs={retornaListaUFs} 
        buscaUFs={buscaUFs} 
      />
      <ListagemUFs listaUFs={listaUFs} />
      <Loading isLoading={isLoading} />
    </View>
  );
};