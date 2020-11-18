import React, { useContext } from "react";
import { auth } from "../firebase";

interface ContextValueType {
  currentUser: firebase.default.User | null;
  signUp: (user: string, email: string) => Promise<any>;
  login: (
    user: string,
    email: string
  ) => Promise<firebase.default.auth.UserCredential>;
  logout: () => Promise<void>;
}

const AuthContext = React.createContext({} as ContextValueType);

export const AuthProvider: React.FC = ({ children }) => {
  const [
    currentUser,
    setCurrentUser,
  ] = React.useState<firebase.default.User | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  const signUp = (email: string, password: string) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const login = (email: string, password: string) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    return auth.signOut();
  };

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);

      return unsubscribe;
    });
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, signUp, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export function useAuthProvider() {
  const context = useContext(AuthContext);
  return context;
}
