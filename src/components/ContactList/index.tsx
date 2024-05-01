import React, {useContext} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ContactContext} from '../../contexts/ContactsContext';

const ContactList = () => {
  const {contacts, showContact} = useContext(ContactContext);

  return (
    <FlatList
      data={contacts}
      keyExtractor={item => item.id as string}
      renderItem={({item}) => (
        <TouchableOpacity
          style={styles.buttonContact}
          key={item.id}
          onPress={() => showContact(item.id as string)}>
          <Text style={styles.buttonContactText}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  buttonContact: {
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#0999f967',
    marginBottom: 10,
  },
  buttonContactText: {
    color: '#e7e4e4',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ContactList;
