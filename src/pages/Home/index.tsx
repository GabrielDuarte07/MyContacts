import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import FormNewContact from '../../components/FormNewContact';
import ContactList from '../../components/ContactList';

const Home = (): React.JSX.Element => {
  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <FormNewContact />
        <ContactList />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: '#27272a',
  },
  container: {
    flex: 1,
    padding: 15,
  },
});

export default Home;
