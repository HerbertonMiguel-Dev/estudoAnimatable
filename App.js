// Importando as dependências necessárias do React e React Native
import React, {useEffect, useRef} from "react";
import { View, Text, StyleSheet, Animated } from "react-native";

export default function App(){
  // Criando referências animadas para largura e altura usando useRef
  const larAnimada = useRef(new Animated.Value(150)).current; // Valor inicial da largura é 150
  const altAnimada = useRef(new Animated.Value(50)).current; // Valor inicial da altura é 50

  // useEffect é usado para iniciar a animação assim que o componente for montado
  useEffect(() =>{
    Animated.timing(altAnimada,{
      toValue: 300, // Valor final da altura é 300
      duration: 2000, // A animação dura 2 segundos
      useNativeDriver: false // Desativando o driver nativo
    }).start(); // Iniciando a animação
  }, []) // A lista de dependências vazia significa que o efeito só roda uma vez, quando o componente é montado

  return(
    // Container principal que centraliza seu conteúdo
    <View style={styles.container}>
      
      {/* View animada que muda de altura */}
      <Animated.View style={{
        width: larAnimada, // Largura animada
        height: altAnimada, // Altura animada
        backgroundColor: '#4169e1', // Cor de fundo azul
        justifyContent: 'center' // Centraliza o texto verticalmente
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
})
