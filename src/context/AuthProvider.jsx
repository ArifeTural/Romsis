import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [language, setLanguage] = useState('tr'); // Varsayılan dil Türkçe

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'tr' ? 'en' : 'tr'));
  };

  return (
    <AuthContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;


