import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {ReactNode, createContext, useEffect, useState} from 'react';
import {Alert} from 'react-native';

export type IFormContact = {
  id?: string;
  name: string;
  email: string;
  phone: string;
};

type IContactContext = {
  contacts: IFormContact[];
  addContact: (contact: IFormContact) => Promise<boolean>;
  showContact: (id: string) => void;
  removeContact: (id: string) => Promise<void>;
};

type Iprops = {
  children: ReactNode;
};

export const ContactContext = createContext<IContactContext>(
  {} as IContactContext,
);

const keyStorage = '@MyContacts:contactId';

const ContactsProvider = ({children}: Iprops): React.JSX.Element => {
  const [contacts, setContacts] = useState<IFormContact[]>([]);

  useEffect(() => {
    async function loadContacts() {
      const data = await AsyncStorage.getItem(keyStorage);
      if (data) {
        setContacts(JSON.parse(data));
      }
    }
    loadContacts();
  }, []);

  const showContact = (id: string): void => {
    const contactsTemp = [...contacts];
    const findContact = contactsTemp.find(contact => contact.id === id);
    if (!findContact) {
      Alert.alert('Erro', 'Contato não encontrado');
      return;
    }
    const {name, phone, email} = findContact;
    Alert.alert(name, `E-mail: ${email}\n\nTelefone:${phone}`, [
      {
        text: 'ok',
        onPress: () => {},
      },
      {
        text: 'remove',
        onPress: () => removeContact(id),
      },
    ]);
    return;
  };

  const removeContact = async (id: string): Promise<void> => {
    const contactsTemp = [...contacts];
    const newContacts = contactsTemp.filter(contact => contact.id !== id);
    await AsyncStorage.setItem(keyStorage, JSON.stringify(newContacts));
    setContacts(newContacts);
  };

  const addContact = async (contact: IFormContact): Promise<boolean> => {
    if (!contact.id) {
      contact.id = String(new Date().getTime());
    }
    if (!contact.name) {
      Alert.alert('Erro', 'Digite o nome do contato');
      return false;
    }
    if (!contact.email) {
      Alert.alert('Erro', 'Digite o email do contato');
      return false;
    }
    if (!contact.phone) {
      Alert.alert('Erro', 'Digite o telefone do contato');
      return false;
    }
    const contactTemp = [...contacts, contact];
    setContacts(contactTemp);
    await AsyncStorage.setItem(keyStorage, JSON.stringify(contactTemp));
    return true;
  };

  return (
    <ContactContext.Provider
      value={{contacts, addContact, showContact, removeContact}}>
      {children}
    </ContactContext.Provider>
  );
};

export default ContactsProvider;
