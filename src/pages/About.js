import React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as Linking from 'react-native';

export default function About({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://avatars.githubusercontent.com/u/143191040?v=4' }}
            style={styles.image}
          />
        </View>
        
        <Text style={styles.title}>Guilherme Santiago</Text>
        <Text style={styles.text}>
          Desenvolvedor Full Stack apaixonado por criar soluções web eficientes e escaláveis. Experiência com front-end e back-end, integrando tecnologias modernas para projetos completos. Sempre em busca de aprender novas ferramentas e melhorar a experiência do usuário.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL('https://github.com/guicvsub')}
        >
          <FontAwesome name="github" size={20} color="white" style={{ marginRight: 10 }} />
          <Text style={styles.buttonText}>Github</Text>
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
          <Button
            title="Iniciar Calculadora"
            onPress={() => navigation.navigate('Calculadora')}
          />
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>FIAP Turma 3 ESPB</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContent: { alignItems: 'center', padding: 20, paddingBottom: 80 }, // espaço para o footer
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  text: { fontSize: 16, textAlign: 'center', paddingHorizontal: 20, marginBottom: 20 },
  buttonContainer: {
    backgroundColor: '#80EF80',
    width: '60%',
    marginVertical: 10,
  },
  imageContainer: {
    marginBottom:20,
    marginTop: 20,
    alignItems: 'center', 
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 50,
  },
  button: {
    flexDirection: 'row',      
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333', 
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
    width: '60%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
footer: {
  
  position: 'absolute',
  bottom: 0,
  width: '100%',
  backgroundColor: '#000', 
  padding: 10,
  alignItems: 'center',

  },
  footerText: {
  color: '#fff', 
  fontSize: 14,
  }
});
