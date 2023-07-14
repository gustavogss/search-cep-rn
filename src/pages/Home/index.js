import { View, Text, TextInput, TouchableOpacity, FlatList, ScrollView, Keyboard } from 'react-native'
import React, { useRef, useState } from 'react'
import styles from './styles';
import api from '../../services/api';

export function Home() {
    const [cep, setCep] = useState('');
    const [cepUser, setCepUser] = useState(null);
    const inputRef = useRef(null);

    function handlerClean() {
        setCep('');        
        inputRef.current.focus();
        setCepUser(null);
    }

    async function handleSearch() {
        if (cep === ''){
            alert('Digite um CEP válido');
            setCep('');
            return;
        }
        try {
        const response = await api.get(`/${cep}/json`)
        setCepUser(response.data);
        Keyboard.dismiss();
        } catch (error) {
            console.log('ERROR: ' + error);
        }
        
    }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Digite o CEP desejado</Text>
      <TextInput 
      placeholder='11111111'
      keyboardType='numeric'
      style={styles.input}
      value={cep}
      onChangeText={setCep}
      ref={inputRef}
      />
      <View style={styles.areaBtn}>
        <TouchableOpacity 
        style={[styles.btn,  {backgroundColor: '#26e914'}]}
        onPress={handleSearch}
        >
            <Text style={styles.text}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={[styles.btn, {backgroundColor: '#ea2424'}]}
        onPress={handlerClean}
        >
        <Text style={styles.text}>Limpar</Text>
        </TouchableOpacity>
      </View>
     {
        cepUser && 
        <View style={styles.resultado}>
        <Text style={styles.itemText}>CEP: {cepUser.cep} </Text>
        <Text style={styles.itemText}>Logradouro: {cepUser.logradouro}</Text>
        <Text style={styles.itemText}>Bairro: {cepUser.bairro}</Text>
        <Text style={styles.itemText}>Cidade: {cepUser.localidade}</Text>
        <Text style={styles.itemText}>Estado: {cepUser.uf}</Text>
      </View>
     }
    </View>
  )
}