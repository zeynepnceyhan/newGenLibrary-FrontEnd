import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ChakraProvider } from "@chakra-ui/react";
import { store } from './app/store.js';
import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from "./theme/theme";
import { BrowserRouter } from "react-router-dom";
import { ColorModeScript } from "@chakra-ui/color-mode";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

let persistor = persistStore(store);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider theme={theme}>
          <BrowserRouter>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <App />
          </BrowserRouter>
        </ChakraProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
