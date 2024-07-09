// Importando as dependências necessárias do React e React Native
import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";

export default function App() {
  // Criando referências animadas para largura e altura usando useRef
  const larAnimada = useRef(new Animated.Value(0)).current; // Valor inicial da largura é 150
  const altAnimada = useRef(new Animated.Value(0)).current; // Valor inicial da altura é 50

  // useEffect é usado para iniciar a animação assim que o componente for montado
  useEffect(() => {
  // Define uma sequência de animações que são executadas uma após a outra
  Animated.sequence([
    // Animação de 'timing' para a largura animada (larAnimada)
    Animated.timing(larAnimada, {
      toValue: 100, // Valor final da largura
      duration: 4000, // Duração da animação em milissegundos (4 segundos)
      useNativeDriver: false, // Animação feita no JavaScript em vez do driver nativo
    }),

    // Animação de 'timing' para a altura animada (altAnimada)
    Animated.timing(altAnimada, {
      toValue: 100, // Valor final da altura
      duration: 4000, // Duração da animação em milissegundos (4 segundos)
      useNativeDriver: false, // Animação feita no JavaScript em vez do driver nativo
    }),
  ]).start(); // Inicia a sequência de animações
}, []); // A lista de dependências vazia significa que o efeito só roda uma vez, quando o componente é montado

// Interpolação da largura animada (larAnimada) para porcentagem
let porcentagemLargura = larAnimada.interpolate({
  inputRange: [0, 100], // Intervalo de entrada dos valores animados
  outputRange: ["0%", "100%"], // Intervalo de saída correspondente em porcentagem
});

// Interpolação da altura animada (altAnimada) para porcentagem
let porcentagemAltura = altAnimada.interpolate({
  inputRange: [50, 100], // Intervalo de entrada dos valores animados
  outputRange: ["5%", "100%"], // Intervalo de saída correspondente em porcentagem
});


  return (
    // Container principal que centraliza seu conteúdo
    <View style={styles.container}>
      {/* View animada que muda de altura, largura e opacidade */}
      <Animated.View
        style={{
          width: porcentagemLargura, // Largura animada
          height: porcentagemAltura, // Altura animada
          backgroundColor: "#4169e1", // Cor de fundo azul
          justifyContent: "center", // Centraliza o texto verticalmente
        }}
      ></Animated.View>
    </View>
  );
}

// Definindo os estilos do container principal
const styles = StyleSheet.create({
  container: {
    flex: 1, // O container ocupa todo o espaço disponível
    justifyContent: "center", // Centraliza o conteúdo verticalmente
    alignItems: "center", // Centraliza o conteúdo horizontalmente
  },
});
