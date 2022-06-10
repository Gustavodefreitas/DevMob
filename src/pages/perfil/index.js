import React,{useState} from 'react';
import { StyleSheet, Text, TextInput , View ,Image} from 'react-native';



export default function Perfil() {

  const [nome,setNome]=useState("EX:Gustavo")
  const [numero,setNumero]=useState("(xx)xxxx-xxx")
  const [Email,setEmail]=useState("E-mail")
  return(
  <View  >

      

      <Text style={styles.nametext} >Nome:</Text>
      <TextInput
        style={{borderWidth:1,borderColor:'#000000'}}
        value={nome}
        onChangeText={text=>setNome(text)}
        />

      <Text style={styles.nametext}>número:</Text>
      <TextInput
        style={{borderWidth:1,borderColor:'#000000'}}
        value={numero}
        onChangeText={text=>setNumero(text)}
        />

      <Text style={styles.nametext}>email:</Text>
      <TextInput
        style={{borderWidth:1,borderColor:'#000000'}}
        value={Email}
        onChangeText={text=>setEmail(text)}
        />


        
        
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#d8d8d8',
  },
  container: {
  
    marginBottom: 10,
    width: '95%',
    marginLeft: '2.5%',
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10
  },
  imageContainer: {
    flex: 1,
    width: 80,
    height: 80,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nametext: {
    marginLeft: 10,
    marginTop:30,
    fontWeight: 'bold',
  }
});
