import {SafeAreaView, View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Home(props) {
    return (
        <SafeAreaView style={estilo.container}>
            <View style={estilo.principal}>
                <Text style={estilo.titulo}>Partes do Computador</Text>
                <Text style={estilo.subTitulo}>As partes mais importantes do Computador</Text>
            </View>

            <View>
                <TouchableOpacity style={estilo.button} onPress={()=>{props.navigation.navigate('PlacaMae')}}>
                    <Text style={estilo.textButton}>Placa-Mãe</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estilo.button} onPress={()=>{props.navigation.navigate('PlacaVideo')}}>
                    <Text style={estilo.textButton}>Placa de Video</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const estilo = StyleSheet.create({
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
    button:{
        margin:10,
        padding:5,
        backgroundColor: '#add8e6',
        borderRadius:5,
        alignItems: 'center'
    },
    textButton:{
        fontSize:15
    },
    principal:{
        alignItems: 'center',
        marginBottom:50,
        borderWidth:2,
        padding:10,
        backgroundColor: '#4f5a'
    }
});