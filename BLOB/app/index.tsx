import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import auth from '@react-native-firebase/auth';

export default function Index() {
  // .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
  // .then(() => {
  //   console.log('User account created & signed in!');
  // })
  // .catch(error => {
  //   if (error.code === 'auth/email-already-in-use') {
  //     console.log('That email address is already in use!');
  //   }

  //   if (error.code === 'auth/invalid-email') {
  //     console.log('That email address is invalid!');
  //   }

  //   console.error(error);
  // });


  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user: React.SetStateAction<undefined>) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <View>
        <Text>Login</Text>
      </View>
    );
  }

  return (
    <ImageBackground
      //source={require('./assets/landingpage.png')} // Ensure the path is correct for your project
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.title}>
          <View style={styles.curvedText}>
            <Text style={styles.letter}>B</Text>
            <Text style={styles.letter}>.</Text>
            <Text style={styles.letter}>L</Text>
            <Text style={styles.letter}>.</Text>
            <Text style={styles.letter}>O</Text>
            <Text style={styles.letter}>.</Text>
            <Text style={styles.letter}>B</Text>
            <Text style={styles.letter}>.</Text>
          </View>
        </View>
        {/* <View style={styles.sloganContainer}> */}
        <View>
          <Text style={styles.slogan}>building lifelong open behaviors</Text>
        </View>
        <View style={styles.containerAlign}>
          <View style={styles.formContainer}>
            <Text style={styles.register}>register</Text>
            <View style={styles.inputAlign}>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.email}
                  placeholder="email"
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.username}
                  placeholder="username"
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.password}
                  placeholder="password"
                  secureTextEntry
                />
              </View>
              <TouchableOpacity style={styles.registerButton}>
                <Text style={styles.buttonText}>register</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.login}>log in</Text>
            <View style={styles.inputAlign}>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.loginusername}
                  placeholder="username"
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.loginpassword}
                  placeholder="password"
                  secureTextEntry
                />
              </View>
              <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.buttonText}>login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: '#B0D0FF',
  },
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center', // Centers horizontally
  },
  title: {
    marginBottom: 0,
  },
  curvedText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '15%',
    fontWeight: 'bold',
    fontSize: 100,
    padding: 15,
    margin: 0,
    fontFamily: 'DynaPuff', // Ensure you load the font correctly in your project
  },
  letter: {
    fontSize: 100,
    fontFamily: 'DynaPuff', // Ensure you load the font correctly in your project
    // display: 'inline-block',
    padding: 0,
    opacity: 0,
    // animation: 'fadeIn 0.4s forwards',
    lineHeight: 1,
    verticalAlign: 'middle',
    textAlign: 'center',
  },
  '@keyframes fadeIn': {
    // from: { opacity: 0 },
    // to: { opacity: 1 },
  },
  '@keyframes moveUp': {
    // from: { transform: [{ translateY: 0 }], opacity: 1 },
    // to: { transform: [{ translateY: -35 }], opacity: 1 },
  },
  letterChild: {
    // animation: 'moveUp 1s forwards',
    // 1: { animationDelay: '0.1s' },
    // 2: { animationDelay: '0.2s' },
    // 3: { animationDelay: '0.3s' },
    // 4: { animationDelay: '0.4s' },
    // 5: { animationDelay: '0.5s' },
    // 6: { animationDelay: '0.6s' },
    // 7: { animationDelay: '0.7s' },
    // 8: { animationDelay: '0.8s' },
  },
  sloganContainer: {
    textAlign: 'center',
  },
  slogan: {
    // display: 'inline-block',
    fontFamily: 'DynaPuff', // Ensure you load the font correctly in your project
    fontSize: 32,
    paddingTop: 0,
    paddingBottom: 15,
  },
  containerAlign: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    width: '100%',
  },
  formContainer: {
    backgroundColor: '#F2CC6C',
    borderRadius: 15,
    width: 330,
    height: 400,
    marginRight: 20,
    alignItems: 'center',
  },
  login: {
    fontSize: 50,
    textAlign: 'center',
    fontFamily: 'Monofett', // Ensure you load the font correctly in your project
  },
  register: {
    fontSize: 50,
    textAlign: 'center',
    fontFamily: 'Monofett', // Ensure you load the font correctly in your project
  },
  inputAlign: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  email: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    width: 200,
  },
  username: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    width: 200,
  },
  password: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    width: 200,
  },
  loginusername: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    width: 200,
  },
  loginpassword: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    width: 200,
  },
  registerButton: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 12,
    fontSize: 16,
    backgroundColor: 'white',
    position: 'absolute',
    top: 190,
  },
  loginButton: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 12,
    fontSize: 16,
    backgroundColor: 'white',
    position: 'absolute',
    top: 190,
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
  },
});
