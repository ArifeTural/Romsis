import { createContext, useState } from "react";

export const AuthContext = createContext();
// export const {Provider} = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
