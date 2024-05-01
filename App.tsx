import React from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';

const App = (): React.JSX.Element => {
  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <Text style={styles.title}>My Contacts</Text>
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
    padding: 10,
  },
  title: {
    color: '#e7e4e4',
    fontSize: 32,
    paddingVertical: 15,
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
});

export default App;
