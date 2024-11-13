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
  addFirstForm(person1: string, person2: string): void;
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

  function addFirstForm(person1: string, person2: string) {
    const u = user;
    if (u) {
      u.person1 = person1;
      u.person2 = person2;

      setUser(u);
    }
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, addFirstForm, login, logout }}>
      { children }
    </AuthContext.Provider>
  );
};
