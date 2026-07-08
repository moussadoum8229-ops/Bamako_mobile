import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

// Récupération des dimensions de l'écran pour le design responsive
const { width, height } = Dimensions.get('window');

const Acceuil = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Section supérieure avec l'image de fond */}
      <View style={styles.topSection}>
        <ImageBackground 
          source={require('../assets/images/MI.jpg')} 
          style={styles.backgroundImage}
          resizeMode="cover"
        />
      </View>

      {/* Section inférieure blanche (formulaire / actions) */}
      <View style={styles.bottomSection}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>Aw bissimilah Bamako Sira Kan</Text>

        {/* Bouton de Connexion */}
        <TouchableOpacity 
          style={styles.loginButton} 
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Bouton d'Inscription */}
        <TouchableOpacity 
          style={styles.signupButton} 
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.signupButtonText}>Sign up</Text>
        </TouchableOpacity>
      </View>

      {/* Logo superposé au milieu de la transition */}
      <View style={styles.logoContainer}>
        <Image 
          source={require('../assets/images/Logo1.jpeg')} 
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default Acceuil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topSection: {
    height: height * 0.65, // Prend 65% de la hauteur de l'écran
    width: '100%',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  bottomSection: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: width, // Effet d'arrondi
    borderTopRightRadius: width,
    marginTop: -80, // Remonte la section pour chevaucher l'image de fond
    alignItems: 'center',
    paddingTop: 80, // Espace pour laisser place au logo superposé
    paddingHorizontal: 20,
  },
  logoContainer: {
    position: 'absolute',
    top: height * 0.65 - 150, // Positionné précisément à l'intersection
    left: (width - 160) / 2, // Centré horizontalement
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, // Ombre pour Android
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    marginTop: 10,
    textAlign: 'center',
  },
  loginButton: {
    width: '80%',
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupButton: {
    width: '80%',
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  signupButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});