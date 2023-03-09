import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function App() {
  return (
    <View style={aparencia.view_principal}>
      <Text style={aparencia.titulo}>Bunitão</Text>

      <View style={aparencia.box_subTitulo}>
        <Text style={aparencia.subtex1}>Criando um primeiro aplicativo</Text>
        <Text style={aparencia.subtex2}>Agora vai</Text>
      </View>
      <Image source={{uri:'https://www.imagensempng.com.br/wp-content/uploads/2020/12/0025-1.png'}} 
             style={aparencia.teste_imagem}
      />
      
    </View>
  );
}

const aparencia = StyleSheet.create({
  teste_imagem:{
    marginTop: 80,
    width: 200,
    height: 150

  },
  view_principal:{
    backgroundColor:'rgba(255, 33, 55, 0.5)',
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
  },
  titulo:{
  fontSize:30,
  color:'#FFF',
  fontWeight:'bold',
  },
  box_subTitulo:{
    width:'80%',
    backgroundColor:'#f1f1f1',
    padding:20,
    marginTop:50,
    borderTopRightRadius:50,
    borderBottomLeftRadius:50,
  },
  subtex1:{
    fontSize:15,
    fontWeight:'bold',
    color:'rgba(255, 33, 55, 0.5)',
  },
  subtex2:{
    fontSize:15,
    fontWeight:'bold',
    color:'rgba(255, 33, 55, 0.5)',
  },
}
);
