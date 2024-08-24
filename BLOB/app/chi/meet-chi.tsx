import React from 'react';
import { View, Text, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';

const App: React.FC = () => {

  const handleOptionPress = (option: string) => {
    if (option === 'wrong') {
      Alert.alert('Option 3', "It's not worth your time");
    } else {
      console.log(`Option ${option} pressed`);
    }
  };

  return (
    <View style={styles.optionsPage}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.optionButton} onPress={() => handleOptionPress('1')}>
          <Text style={styles.buttonText}>option 1: ask questions about what is confusing you</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={() => handleOptionPress('2')}>
          <Text style={styles.buttonText}>option 2: remind yourself that being confused is a normal part of the learning process</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButtonWrong} onPress={() => handleOptionPress('wrong')}>
          <Text style={styles.buttonText}>option 3: give up, it's not worth your time</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textBoxAlign}>
        <View style={styles.textBox}>
          <Text style={styles.title}>chi is confused</Text>
          <Text style={styles.paragraph}>huh? oh, uhm. hi, my name is chi. i'm feeling very... lost. i can't focus on anything, nothing makes sense to me, and this leaves me overall feeling very frustrated and confused.</Text>
          <Text style={styles.paragraph}>what should i do?</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  optionsPage: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  optionButtonWrong: {
    backgroundColor: '#FFCCCC',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
  },
  textBoxAlign: {
    alignItems: 'center',
  },
  textBox: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'Varela Round',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Varela Round',
  },
});

export default App;