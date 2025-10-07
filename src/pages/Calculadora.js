import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Calculadora({ navigation }) {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(null);
  const [operacao, setOperacao] = useState('somar');

  const calcular = () => {
    const n1 = Number(num1);
    const n2 = Number(num2);

    if (operacao === 'somar') setResultado(n1 + n2);
    else if (operacao === 'subtrair') setResultado(n1 - n2);
    else if (operacao === 'multiplicar') setResultado(n1 * n2);
    else if (operacao === 'dividir') {
      if (n2 === 0) {
        Alert.alert('Erro', 'Não é possível dividir por 0');
        setResultado(null);
      } else {
        setResultado(n1 / n2);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>
      <TextInput
        placeholder="Número 1"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
        style={styles.input}
      />
      <TextInput
        placeholder="Número 2"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
        style={styles.input}
      />
      

      {resultado !== null && <Text style={styles.result}>Resultado: {resultado}</Text>}

      {/* Picker para escolher a operação */}
      <Picker
        selectedValue={operacao}
        onValueChange={(itemValue) => setOperacao(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Somar" value="somar" />
        <Picker.Item label="Subtrair" value="subtrair" />
        <Picker.Item label="Multiplicar" value="multiplicar" />
        <Picker.Item label="Dividir" value="dividir" />
      </Picker>
         
      <Button title="Calcular" onPress={calcular} />

     

      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, width: '80%', marginVertical: 10 },
  picker: { width: '80%', marginVertical: 10 },
  result: { fontSize: 18, marginVertical: 10 },
});
