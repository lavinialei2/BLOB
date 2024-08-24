import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

// Add navigation here if you're using a navigation library like React Navigation
// import { useNavigation } from '@react-navigation/native';

export default function Intro() {
  // const navigation = useNavigation();

  return (
    <View style={styles.storybook}>
      <View style={styles.page}>
        <Text style={styles.heading}>meet bob!</Text>
        {/* <Image source={require('./assets/blob_h1.png')} style={styles.bobImage} /> */}
        <View style={styles.textBox}>
          <Text style={styles.textLarge}>This is <Text style={styles.bold}>Bob</Text>.</Text>
        </View>
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.buttonText}>→Let's Go!</Text>
        </TouchableOpacity>
      </View>
      {/* Add other pages similarly */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#49A7BC',
  },
  storybook: {
    position: 'relative',
    width: '90%',
    height: '85%',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    overflow: 'hidden',
  },
  title: {
    fontFamily: 'DynaPuff',
    fontSize: '5vw', // This may need adjustment in RN, consider using a fixed number or scale.
    textAlign: 'center',
    marginTop: '10%',
  },
  bob: {
    maxWidth: '20vw', // React Native uses fixed sizes in percentages or numbers; adjust based on the screen size
    maxHeight: '20vw',
    alignSelf: 'center',
  },
  textBox: {
    width: '80%',
    maxHeight: 600,
    backgroundColor: '#f0f0f0',
    padding: '5%',
    marginVertical: '5%',
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  nextButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#49A7BC',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20, // Adjust this value as needed
  },
});