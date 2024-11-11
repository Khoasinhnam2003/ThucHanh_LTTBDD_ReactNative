import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>A premium online store for {"\n"} sporter and their stylish choice</Text>
      <View style={{width:'100%', height:300,    backgroundColor: '#F8E6E5',borderRadius:10, alignContent:'center', justifyContent:'center', alignItems:'center'}}>
      <Image 
        source={require('./assets/XeDapXanh.png')}
        style={styles.image}
      />
      </View>
      <Text style={styles.shopName}>POWER BIKE {"\n"} SHOP</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ProductList')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFF'
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: '80%',
    marginBottom: 20,
    resizeMode: 'contain', 
    marginTop: 40,
  },
  shopName: {
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#FF4D4D',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '90%',
    alignItems:'center',
    borderRadius: 30,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});