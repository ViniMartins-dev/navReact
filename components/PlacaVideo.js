import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function PlacaVideo() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Placa de Video</Text>
      <Image
        style={styles.imagem}
        source={require('../assets/GPU.jpg')}
      />
      <View style={styles.textContainer}>
        <Text style={styles.subTitulo}>
          A placa de vídeo, também conhecida como GPU (Unidade de Processamento Gráfico), é responsável pelo processamento e renderização das imagens e vídeos que aparecem no monitor. Ela alivia o processador principal, o CPU, ao lidar com tarefas gráficas complexas, como jogos, design gráfico e edição de vídeos. Placas de vídeo mais avançadas possuem seu próprio processador e memória, otimizando o desempenho gráfico e permitindo uma melhor experiência visual.
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    justifyContent: 'center',
    padding: 20, // Adiciona padding geral no container
  },
  titulo: {
    fontSize: 30,
    marginBottom: 20, // Espaço entre o título e a imagem
  },
  subTitulo: {
    fontSize: 15,
  },
  imagem: {
    height: 200, // Reduz o tamanho da imagem
    width: '80%', // Ajusta a largura da imagem
    marginBottom: 20, // Espaço entre a imagem e o texto
    borderRadius: 20, // Borda arredondada na imagem
    shadowColor: '#000', // Cor da sombra
    shadowOffset: { width: 0, height: 4 }, // Posição da sombra
    shadowOpacity: 0.3, // Opacidade da sombra
    shadowRadius: 5, // Tamanho da sombra
    elevation: 5, // Sombra no Android
  },
  textContainer: {
    padding: 10, // Adiciona padding no contêiner do texto
    backgroundColor: '#ffffff', // Fundo branco para destacar o texto
    borderRadius: 10, // Cantos arredondados
    width: '98%', // Largura do contêiner de texto
    shadowColor: '#000', // Sombra para um efeito de elevação
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  }
});
