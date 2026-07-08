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
  Modal
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  // États de saisie et de configuration
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Citoyen');
  const [modalVisible, setModalVisible] = useState(false);

  // Fonction de gestion de la tentative de connexion
  const handleLogin = () => {
    // TODO: Connecter à l'API du backend
    console.log('Tentative de connexion avec :', username, password, role);
  };

  // Liste des rôles utilisateurs disponibles
  const roles = ['Citoyen', 'Admin', 'Policier'];

  return (
    <ImageBackground 
      source={require('../assets/images/fond_app.jpeg')} 
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      {/* Modal de sélection de rôle */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <TouchableOpacity 
          style={styles.modalOverlay} 
          activeOpacity={1} 
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Choisissez votre rôle</Text>
            {roles.map((r, index) => (
              <TouchableOpacity 
                key={r} 
                style={[styles.modalItem, index < roles.length - 1 && styles.modalItemBorder]} 
                onPress={() => {
                  setRole(r);
                  setModalVisible(false);
                }}
              >
                <Text style={[styles.modalItemText, role === r && styles.modalItemTextSelected]}>
                  {r}
                </Text>
                {role === r && <Ionicons name="checkmark-circle" size={24} color="#3b82f6" />}
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>

      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.overlay}>
          {/* Section Logo */}
          <View style={styles.logoContainer}>
            <Image 
              source={require('../assets/images/Logo1.jpeg')} 
              style={styles.logo} 
              resizeMode="contain"
            />
          </View>

          {/* Section Formulaire */}
          <View style={styles.formContainer}>
            
            {/* Saisie Nom d'utilisateur */}
            <View style={styles.inputContainer}>
              <Ionicons name="person-outline" size={24} color="#000" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="User name"
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
                placeholder="Password"
                placeholderTextColor="#666"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>

            {/* Sélecteur personnalisé pour le Rôle */}
            <TouchableOpacity 
              style={styles.inputContainer} 
              activeOpacity={0.8}
              onPress={() => setModalVisible(true)}
            >
              <Ionicons name="people-outline" size={24} color="#000" style={styles.icon} />
              <Text style={[styles.input, { color: role ? '#333' : '#666' }]}>
                {role}
              </Text>
              <Ionicons name="chevron-down" size={24} color="#666" />
            </TouchableOpacity>

            {/* Bouton de Connexion */}
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            {/* Lien d'Inscription */}
            <View style={styles.signupContainer}>
              <View style={styles.line} />
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.signupText}>S'inscrire</Text>
              </TouchableOpacity>
              <View style={styles.line} />
            </View>

            {/* Lien de Retour à l'accueil */}
             <View style={styles.signupContainer}>
              <View style={styles.line} />
              <TouchableOpacity onPress={() => navigation.navigate('Acceuil')}>
                <Text style={styles.signupText}>Retour à l'accueil</Text>
              </TouchableOpacity>
              <View style={styles.line} />
            </View>

          </View>
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
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logoContainer: {
    width: 180,
    height: 180,
    backgroundColor: 'white',
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  logo: {
    width: 150,
    height: 150,
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
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
    marginBottom: 20,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#3b82f6',
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
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupContainer: {
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
  signupText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  modalItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  modalItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  modalItemText: {
    fontSize: 16,
    color: '#555',
  },
  modalItemTextSelected: {
    color: '#3b82f6',
    fontWeight: 'bold',
  },
});
