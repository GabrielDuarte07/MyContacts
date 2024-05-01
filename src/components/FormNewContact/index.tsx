import React, {useContext, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {IFormContact, ContactContext} from '../../contexts/ContactsContext';

const FormNewContact = (): React.JSX.Element => {
  const [dataForm, setDataForm] = useState<IFormContact>({} as IFormContact);
  const {addContact} = useContext(ContactContext);

  const handleChangeData = (
    field: Exclude<keyof IFormContact, 'id'>,
    value: string,
  ): void => {
    const dataFormTemp = {...dataForm};
    dataFormTemp[field] = value;
    setDataForm(dataFormTemp);
  };

  const handleAddContact = (): void => {
    const dataTemp = {...dataForm};
    const command = addContact(dataTemp);
    if (command) {
      setDataForm({} as IFormContact);
    }
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>My Contacts</Text>
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldTitle}>Name</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="default"
          onChangeText={value => handleChangeData('name', value)}
          value={dataForm.name}
        />
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldTitle}>E-mail</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="email-address"
          onChangeText={value => handleChangeData('email', value)}
          value={dataForm.email}
        />
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldTitle}>Phone</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="phone-pad"
          onChangeText={value => handleChangeData('phone', value)}
          value={dataForm.phone}
        />
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.buttonAdd}
        onPress={handleAddContact}>
        <Text style={styles.buttonAddText}>Add Contact</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    marginBottom: 20,
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
    marginBottom: 15,
  },
  buttonAddText: {
    color: '#e7e4e4',
    fontWeight: 'bold',
  },
});

export default FormNewContact;
