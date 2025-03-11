import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function PlacaVideo() {
  return (
    <View style={styles.container}>
      <Text>Placa de Video</Text>
      <Image style={{resizeMode: 'center'}} source={require('../assets/GPU.jpg')} />
      <StatusBar style="auto" />
      <Text>A placa de vídeo, também conhecida como GPU (Unidade de Processamento Gráfico), é responsável pelo processamento e renderização das imagens e vídeos que aparecem no monitor. Ela alivia o processador principal, o CPU, ao lidar com tarefas gráficas complexas, como jogos, design gráfico e edição de vídeos. Placas de vídeo mais avançadas possuem seu próprio processador e memória, otimizando o desempenho gráfico e permitindo uma melhor experiência visual.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
