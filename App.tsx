/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MatComicons from 'react-native-vector-icons/MaterialCommunityIcons';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/soseguro_logo.png')} />
      <View style={styles.transparentRectangle}>
        <View style={styles.closeMenu}>
          <TouchableOpacity onPress={() => { }}>
            <Ionicons
              name="ellipsis-vertical-sharp"
              size={49}
              color={'black'}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.menuContainer}>
          <View style={styles.iconContainer}>
            <Ionicons
              name="person-circle-outline"
              size={70}
              color={'#717F7F'}
            />
            <Text style={styles.welcomeText}>Olá, Gilberto!</Text>
          </View>
          <View style={styles.optionsContainer}>
            <TouchableOpacity
              onPress={() => { }}
              style={styles.touchableContainer}>
              <MatComicons
                name="account-edit-outline"
                size={32}
                color={'black'}
              />
              <Text style={styles.text}>Meu Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { }}
              style={styles.touchableContainer}>
              <Ionicons name="timer-outline" size={32} color={'black'} />
              <Text style={styles.text}>Acionamentos</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { }}
              style={styles.touchableContainer}>
              <Ionicons name="exit-outline" size={32} color={'black'} />
              <Text style={styles.textExit}>Sair da conta</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.botton}>
          <TouchableOpacity onPress={() => { }}>
            <Ionicons name="settings-outline" size={42} color={'black'} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { }}>
            <Ionicons name="help-circle-outline" size={42} color={'black'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white', // Cor de fundo
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  transparentRectangle: {
    width: '50%', // Largura total da tela
    height: '100%', // Metade da altura da tela
    backgroundColor: 'rgba(188, 211, 205, 0.5)', // Cor com transparência
    position: 'absolute', // Para garantir que esteja sobreposto ao fundo
    left: 0, // Alinhado à esquerda
    top: 0, // Alinhado ao topo
  },
  logo: {
    width: 100,
    height: 100,
  },
  menuContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 11,
  },
  iconContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 40,
  },
  optionsContainer: {
    flexDirection: 'column',
    gap: 15,
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
  },
  textExit: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'red',
  },
  touchableContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  botton: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 9,
  },
  closeMenu: {
    position: 'absolute',
    right: 0,
    top: 0,
    paddingVertical: 18,
  },
  welcomeText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 18.75,
  },
});

export default App;
