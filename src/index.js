import React from "react";
import ReactDOM from "react-dom/client"; // Doğru import
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import { TranslationProvider } from 'react-google-multi-lang';

// Uygulamanızın root elemanını oluşturun
const root = ReactDOM.createRoot(document.getElementById('root'));

// Root'u render edin
root.render(
  <TranslationProvider apiKey={process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY} defaultLanguage="en">
    <App />
  </TranslationProvider>
);

