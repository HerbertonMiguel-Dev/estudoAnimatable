// Importando as dependências necessárias do React e React Native
import React, {useEffect, useRef} from "react";
import { View, Text, StyleSheet, Animated } from "react-native";

export default function App(){
  // Criando referências animadas para largura e altura usando useRef
  const larAnimada = useRef(new Animated.Value(150)).current; // Valor inicial da largura é 150
  const altAnimada = useRef(new Animated.Value(50)).current; // Valor inicial da altura é 50
  const opacidadeAnimada = useRef(new Animated.Value(1)).current; // Valor inicial da opacidade é 1

  // useEffect é usado para iniciar a animação assim que o componente for montado
  useEffect(() =>{
  // Define uma animação em loop
  Animated.loop(
    // Define uma sequência de animações
    Animated.sequence([
      // Animação de 'timing' para aumentar a largura para 300
      Animated.timing(larAnimada, {
        toValue: 300, // Valor final da largura
        duration: 2000, // Duração da animação em milissegundos
        useNativeDriver: false // Animação feita no JavaScript em vez do driver nativo
      }),
      // Animação de 'timing' para diminuir a largura para 150
      Animated.timing(larAnimada, {
        toValue: 150, // Valor final da largura
        duration: 2000, // Duração da animação em milissegundos
        useNativeDriver: false // Animação feita no JavaScript em vez do driver nativo
      }),
    ])
  ).start(); // Iniciando a sequência de animações
}, []); // A lista de dependências vazia significa que o efeito só roda uma vez, quando o componente é montado


      
    
  return(
    // Container principal que centraliza seu conteúdo
    <View style={styles.container}>
      
      {/* View animada que muda de altura, largura e opacidade */}
      <Animated.View style={{
        width: larAnimada, // Largura animada
        height: altAnimada, // Altura animada
        backgroundColor: '#4169e1', // Cor de fundo azul
        justifyContent: 'center', // Centraliza o texto verticalmente
        borderRadius: 50
      }}>
        <Text style={{
          textAlign: 'center', // Centraliza o texto horizontalmente
          fontSize: 22, // Tamanho da fonte do texto
          color: '#fff' // Cor do texto branca
        }}>Carregando...</Text>
      </Animated.View>

    </View>
  );
}

// Definindo os estilos do container principal
const styles = StyleSheet.create({
  container:{
    flex: 1, // O container ocupa todo o espaço disponível
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
    alignItems: 'center' // Centraliza o conteúdo horizontalmente
  }
});
