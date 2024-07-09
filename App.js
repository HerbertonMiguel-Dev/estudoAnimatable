// Importando as dependências necessárias do React e React Native
import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated, TouchableOpacity } from "react-native";

// Importando a biblioteca de animações 'react-native-animatable'
import * as Animatable from 'react-native-animatable';

// Criando um componente animado a partir do TouchableOpacity usando a biblioteca 'react-native-animatable'
const ButtonAnimated = Animatable.createAnimatableComponent(TouchableOpacity);

export default function App() {
  const buttonRef = useRef(null); // Criando uma referência para o botão animado

  // Função para lidar com o clique do botão, disparando a animação 'bounce'
  function handleClick() {
    buttonRef.current.bounce(); // Dispara a animação 'bounce' no botão
  }

  return (
    // Container principal que centraliza seu conteúdo
    <View style={styles.container}>
      {/* Texto animado com animação 'bounce' */}
      <Animatable.Text 
        style={styles.title} // Estilo aplicado ao texto
        animation="bounce" // Animação 'bounce'
        duration={3000} // Duração da animação em milissegundos (3 segundos)
        iterationCount={3} // Número de repetições da animação
      >
        Herberton Miguel
      </Animatable.Text>

      {/* Botão animado com animação 'pulse' */}
      <ButtonAnimated 
        style={styles.button} // Estilo aplicado ao botão
        animation="pulse" // Animação 'pulse'
        ref={buttonRef} // Referência ao botão para manipulação futura
        onPress={handleClick} // Função chamada ao pressionar o botão
      >
        {/* Texto do botão */}
        <Text style={{ color: '#fff' }}>Animar</Text> 
      </ButtonAnimated>
    </View>
  );
}

// Definindo os estilos do container principal e seus elementos
const styles = StyleSheet.create({
  container: {
    flex: 1, // O container ocupa todo o espaço disponível
    justifyContent: "center", // Centraliza o conteúdo verticalmente
    alignItems: "center", // Centraliza o conteúdo horizontalmente
  },
  title: {
    fontSize: 25, // Tamanho da fonte do texto
  },
  button: {
    width: '70%', // Largura do botão
    height: 30, // Altura do botão
    backgroundColor: '#121212', // Cor de fundo do botão
    justifyContent: 'center', // Centraliza o texto verticalmente
    alignItems: 'center', // Centraliza o texto horizontalmente
    marginTop: 25, // Margem superior do botão
  },
});
