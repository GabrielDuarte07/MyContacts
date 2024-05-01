import React, {ReactNode, createContext, useState} from 'react';
import {Alert} from 'react-native';

export type IFormContact = {
  id?: string;
  name: string;
  email: string;
  phone: string;
};

interface IContactContext {
  contacts: IFormContact[];
  addContact(contact: IFormContact): boolean;
  showContact(id: string): void;
}

type Iprops = {
  children: ReactNode;
};

export const ContactContext = createContext<IContactContext>(
  {} as IContactContext,
);

const ContactsProvider = ({children}: Iprops): React.JSX.Element => {
  const [contacts, setContacts] = useState<IFormContact[]>([]);

  const showContact = (id: string): void => {
    const contactsTemp = [...contacts];
    const findContact = contactsTemp.find(contact => contact.id === id);
    if (!findContact) {
      Alert.alert('Erro', 'Contato não encontrado');
      return;
    }
    const {name, phone, email} = findContact;
    Alert.alert(name, `E-mail: ${email}\n\nTelefone:${phone}`);
    return;
  };

  const addContact = (contact: IFormContact): boolean => {
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
    return true;
  };

  return (
    <ContactContext.Provider value={{contacts, addContact, showContact}}>
      {children}
    </ContactContext.Provider>
  );
};

export default ContactsProvider;
