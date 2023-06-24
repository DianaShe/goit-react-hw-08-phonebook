import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <ChakraProvider >
        <BrowserRouter basename='goit-react-hw-08-phonebook'>
          <App />
        </BrowserRouter>
      </ChakraProvider>
      </PersistGate>
      
    </Provider>
  </React.StrictMode>
);
