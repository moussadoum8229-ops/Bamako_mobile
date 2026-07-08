import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  ImageBackground, 
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function RegisterScreen({ navigation }) {
  // États locaux pour stocker les informations saisies par l'utilisateur
  const [nomPrenom, setNomPrenom] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [numero, setNumero] = useState('');
  const [ville, setVille] = useState('');
  const [role, setRole] = useState('citoyen'); // Rôle par défaut défini sur citoyen

  // Gestion de la soumission du formulaire d'inscription
  const handleRegister = () => {
    // TODO: Connecter à l'API backend pour l'inscription
    console.log('Tentative d\'inscription avec :', { nomPrenom, username, password, numero, ville, role });
  };

  return (
    <ImageBackground 
      source={require('../assets/images/fond_app.jpeg')} 
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.overlay}>
          <ScrollView 
            contentContainerStyle={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
          >
            {/* Section Logo */}
            <View style={styles.logoContainer}>
              <Image 
                source={require('../assets/images/Logo1.jpeg')} 
                style={styles.logo} 
                resizeMode="contain"
              />
            </View>

            {/* En-tête de la page d'inscription */}
            <View style={styles.headerTextContainer}>
              <Text style={styles.title}>Inscription</Text>
              <Text style={styles.subtitle}>Créez votre compte Bamako-Sira</Text>
            </View>

            {/* Section Formulaire d'inscription */}
            <View style={styles.formContainer}>
              
              {/* Saisie Nom & Prénom */}
              <View style={styles.inputContainer}>
                <Ionicons name="person-outline" size={24} color="#000" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholder="Nom & Prénom"
                  placeholderTextColor="#666"
                  value={nomPrenom}
                  onChangeText={setNomPrenom}
                />
              </View>

              {/* Saisie Nom d'utilisateur */}
              <View style={styles.inputContainer}>
                <Ionicons name="at-outline" size={24} color="#000" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholder="Nom d'utilisateur"
                  placeholderTextColor="#666"
                  value={username}
                  onChangeText={setUsername}
                  autoCapitalize="none"
                />
              </View>

              {/* Saisie Mot de passe */}
              <View style={styles.inputContainer}>
                <Ionicons name="lock-closed-outline" size={24} color="#000" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholder="Mot de passe"
                  placeholderTextColor="#666"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                />
              </View>

              {/* Saisie Téléphone & Ville sur une même ligne */}
              <View style={styles.rowContainer}>
                <View style={[styles.inputContainer, styles.halfInput]}>
                  <Ionicons name="call-outline" size={20} color="#000" style={styles.icon} />
                  <TextInput
                    style={styles.input}
                    placeholder="Téléphone"
                    placeholderTextColor="#666"
                    value={numero}
                    onChangeText={setNumero}
                    keyboardType="phone-pad"
                  />
                </View>

                <View style={[styles.inputContainer, styles.halfInput]}>
                  <Ionicons name="location-outline" size={20} color="#000" style={styles.icon} />
                  <TextInput
                    style={styles.input}
                    placeholder="Ville"
                    placeholderTextColor="#666"
                    value={ville}
                    onChangeText={setVille}
                  />
                </View>
              </View>

              {/* Indicateur de Rôle */}
              <View style={styles.roleContainer}>
                <Text style={styles.roleLabel}>Rôle :</Text>
                <View style={styles.roleBadge}>
                  <Text style={styles.roleBadgeText}>Citoyen</Text>
                </View>
              </View>

              {/* Bouton d'Inscription */}
              <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
                <Text style={styles.registerButtonText}>Créer mon compte</Text>
              </TouchableOpacity>

              {/* Lien vers la page de Connexion */}
              <View style={styles.loginContainer}>
                <View style={styles.line} />
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Text style={styles.loginText}>Se connecter</Text>
                </TouchableOpacity>
                <View style={styles.line} />
              </View>

              {/* Lien vers l'accueil principal */}
              <View style={styles.loginContainer}>
                <View style={styles.line} />
                <TouchableOpacity onPress={() => navigation.navigate('Acceuil')}>
                  <Text style={styles.loginText}>Retour à l'accueil</Text>
                </TouchableOpacity>
                <View style={styles.line} />
              </View>
            </View>

          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  logoContainer: {
    width: 120,
    height: 120,
    backgroundColor: 'white',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  logo: {
    width: 100,
    height: 100,
  },
  headerTextContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#e0e0e0',
    marginTop: 5,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: 'rgba(255, 255, 255, 0.15)', // Glassmorphism
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    width: '100%',
    height: 55,
    marginBottom: 15,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  halfInput: {
    width: '48%',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  roleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  roleLabel: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  roleBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  roleBadgeText: {
    color: 'white',
    fontWeight: 'bold',
  },
  registerButton: {
    backgroundColor: '#3b82f6', // Tailwind blue-500
    borderRadius: 30,
    width: '100%',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#3b82f6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5,
  },
  registerButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    width: '80%',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'white',
    opacity: 0.8,
  },
  loginText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
});
