import axios from "axios";
import { trataErro } from "../servicos/tratarErros";
import { BUSCA_UFS, LISTA_UFS } from "../variaveis_globais/endpoints";

export function servico_retornaUFs(setListaUFs, setIsLoading) {
  setIsLoading(true);

  axios.get(LISTA_UFS, { timeout: 10000 }) // Reduzi o timeout para 10s
    .then((response) => {
      console.log("API: Lista carregada com sucesso!");
      setListaUFs(response.data);
      setIsLoading(false);
    })
    .catch((error) => {
      setIsLoading(false);
      trataErro(error);
    });
}

export function servico_buscaUFs(termo, setListaUFs, setIsLoading) {
  if (termo === "") {
    setListaUFs(null);
    return;
  }

  setIsLoading(true);

  axios.get(BUSCA_UFS + termo, { timeout: 10000 })
    .then((response) => {
      console.log(`API: Busca por "${termo}" concluída.`);
      setListaUFs(response.data);
      setIsLoading(false);
    })
    .catch((error) => {
      setIsLoading(false);
      trataErro(error, () => { setListaUFs(null); });
    });
}