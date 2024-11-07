import React, { createContext, useState } from 'react';


interface User {
  username: string;
  email: string;
  person1: string;
  person2: string;
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  login(username: string, password: string): Promise<void>;
  logout(): void;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);


export const AuthProvider: React.FC<any> = ({ children }) => {

  const [user, setUser] = useState<User | null>(null);

  async function login(username: string, password: string) {
    if ((username === 'admin' || username === 'primeiro') && password === 'a') {
      setUser({ username, email: 'teste@gmail.com', person1: '', person2: '' });
    } else {
      throw new Error('Login ou senha está incorreto!');
    }
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, login, logout }}>
      { children }
    </AuthContext.Provider>
  );
};
