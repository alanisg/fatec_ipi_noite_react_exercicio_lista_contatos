import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {

  const[nome, setnome] = useState('');
  const[telefone, settelefone] =  useState('');
  const[contatos, setcontatos] = useState([]);
  const[contadorcontatos, setContadorContatos] = useState(0);

  const capturarContatoNome = (nome) => {
    setnome(nome);
  }
  const capturarContatoTelefone = (telefone) => {
    settelefone(telefone);
  }

  const adicionarContato = () => {
    setcontatos(contatos => {
      setContadorContatos(contadorcontatos+1);
      return  [ {key: contadorcontatos.toString(), value: nome}, {key: contadorcontatos.toString(), value: telefone}, ...contatos];
    } );
    
    console.log(contatos);
  }

  return (
    <View style={styles.telaPrincipalView}>
      <View style = {styles.ContatoView}>
        {/* usuario ira inserir lembretes aki */}
        <TextInput placeholder = "Nome" 
        style = {styles.NomeTextInput} onChangeText={capturarContatoNome} value={nome} ></TextInput>
        <TextInput placeholder = "Telefone" 
        style = {styles.TelefoneTextInput} onChangeText={capturarContatoTelefone} value={telefone} ></TextInput>
        </View>
        <View style={{width:'80%', marginTop: 8 , alignSelf: 'center'}}>
        <Button title= "Adicionar Contato"  onPress= {adicionarContato}></Button>
        </View>
        
    <View>

      <FlatList 
      data={contatos}
      renderItem={
        nome =>(
          <View style={styles.itemNaLista}>
              <Text>{nome.item.value}</Text>
          </View>
        ),
        telefone =>(
          <View style={styles.itemNaLista}>
              <Text>{telefone.item.value}</Text>
          </View>
        )          
      }
      />
      
        {/* aki sera exibida a lista de lembretes 
              <ScrollView>
              
              {
                lembretes.map (lembrete =>
                <View key={lembrete} style = {styles.itemNaLista}>
                  <Text style = {{fontSize: 16, textAlign: 'center'}}>{lembrete}</Text></View>)
                
              }
              
              </ScrollView>
              */}
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemNaLista:{
    padding:16,
    backgroundColor: '#EEE',
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 12,
    fontSize: 16,
    alignSelf: 'center'
  },

  telaPrincipalView:{
    padding: 50,
  },
  ContatoView:{
    flexDirection: 'colunm',
    justifyContent: 'space-between',
    alignItems:'center'
  },
  NomeTextInput:{
    width: '80%',
    borderBottomColor:'black',
    borderBottomWidth: 1,
    padding: 2
  },
  TelefoneTextInput:{
    width: '80%',
    borderBottomColor:'black',
    borderBottomWidth: 1,
    padding: 2
  }
});