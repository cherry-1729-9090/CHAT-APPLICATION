// App.jsx
import React from 'react';
import Messenger from './components/Messenger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './context/AccountProvider'; 

function App() {
  const clientId = '330778451618-i6u8sdollal3n629krs678sgo4fqguj3.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider> {/* Ensure AccountProvider wraps the entire app */}
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
