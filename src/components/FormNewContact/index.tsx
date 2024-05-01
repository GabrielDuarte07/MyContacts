import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const FormNewContact = (): React.JSX.Element => {
  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>My Contacts</Text>
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldTitle}>Name</Text>
        <TextInput style={styles.textInput} keyboardType="default" />
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldTitle}>E-mail</Text>
        <TextInput style={styles.textInput} keyboardType="email-address" />
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldTitle}>Phone</Text>
        <TextInput style={styles.textInput} keyboardType="phone-pad" />
      </View>
      <TouchableOpacity activeOpacity={0.7} style={styles.buttonAdd}>
        <Text style={styles.buttonAddText}>Add Contact</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
  },
  title: {
    color: '#e7e4e4',
    fontSize: 32,
    paddingVertical: 10,
    fontWeight: 'bold',
  },
  fieldContainer: {
    paddingVertical: 15,
  },
  fieldTitle: {
    fontSize: 16,
    color: '#e7e4e4',
  },
  textInput: {
    backgroundColor: '#707070',
    borderRadius: 8,
    marginTop: 10,
    fontSize: 16,
    color: '#e7e4e4',
  },
  buttonAdd: {
    alignItems: 'center',
    backgroundColor: '#3c92e7dc',
    borderRadius: 8,
    paddingVertical: 10,
  },
  buttonAddText: {
    color: '#e7e4e4',
    fontWeight: 'bold',
  },
});

export default FormNewContact;
