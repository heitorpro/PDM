import React from 'react';
import { Text, ScrollView, View, Image } from 'react-native';

import Capa from './assets/Cr7.jpg';
import estilos from './estilos';

export default function App() {
  return (
    <View style={estilos.container}>
      <Image source={ Capa } style={ estilos.imagem }/>

      <Text style={estilos.titulo}>Cristiano Ronaldo</Text>
      <Text style={estilos.subtitulo}>Leia Abaixo</Text>

      <ScrollView style={estilos.Sv}>
        <Text style={estilos.paragrafo}>
          Cristiano Ronaldo dos Santos Aveiro, o "Robozão", nasceu na Madeira 
          e conquistou o mundo com uma disciplina inabalável.
        </Text>

        <Text style={estilos.paragrafo}>
          Diferente de muitos talentos naturais, o CR7 é o símbolo máximo do esforço. 
          Desde o Sporting até o Manchester United, onde se tornou o melhor do mundo 
          pela primeira vez sob o comando de Sir Alex Ferguson.
        </Text>

        <Text style={estilos.paragrafo}>
          No Real Madrid, ele quebrou todos os recordes possíveis. 
          Foram 450 gols em 438 jogos, vencendo 4 Champions League 
          e travando uma das maiores rivalidades da história contra Lionel Messi.
        </Text>

        <Text style={estilos.paragrafo}>
          "Eu não sigo os recordes, os recordes é que me seguem". 
          Essa frase define sua mentalidade competitiva, que o levou a ser 
          o maior artilheiro da história das seleções nacionais e da Champions League.
        </Text>

        <Text style={estilos.paragrafo}>
          Mesmo após os 30 anos, quando muitos duvidavam, ele brilhou na Juventus 
          e continua balançando as redes no Al-Nassr, mostrando que a idade é apenas um número 
          para quem cuida do corpo como um templo.
        </Text>

        <Text style={estilos.paragrafo}>
          Sua marca, CR7, vai além das quatro linhas. É um ícone de moda, 
          o rei das redes sociais e um exemplo de filantropia e foco absoluto.
        </Text>

        <Text style={estilos.paragrafo}>
          SIIIUUU! O grito que ecoa em todos os estádios é o lembrete de que, 
          com trabalho duro, um menino da Ilha da Madeira pode se tornar 
          o maior artilheiro da história do futebol oficial.
        </Text>
      </ScrollView>
    </View>
  );
}