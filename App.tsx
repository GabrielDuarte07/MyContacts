import React from 'react';
import Home from './src/pages/Home';
import ContactsProvider from './src/contexts/ContactsContext';

const App = (): React.JSX.Element => {
  return (
    <ContactsProvider>
      <Home />
    </ContactsProvider>
  );
};

export default App;
