import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function PlacaMae() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Placa Mãe</Text>
      
      <View>
      <Image
            style={styles.imagem}
            source={require('../assets/MOBO.jpg')}
          />
      </View>

      <Text style={styles.subTitulo}>A placa mãe é o componente central de um computador, responsável por interligar todos os outros componentes do sistema, como o processador, a memória RAM, o armazenamento e as placas de expansão. Ela permite que esses componentes se comuniquem entre si e com o exterior, por meio de portas USB, HDMI, e outras interfaces. Além disso, a placa mãe também oferece conectividade para dispositivos externos e pode incluir funcionalidades extras, como áudio e rede.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    justifyContent: 'center'
  },
  titulo:{
      fontSize:30
  },
  subTitulo:{
      fontSize:15
  },
  imagem: {
    height: 300,
    margin: 10
  }
});
