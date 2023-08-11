import { User, onAuthStateChanged } from 'firebase/auth';
import { createContext, useState } from 'react';
import { auth } from '../services/firebase';

interface ProviderProp {
  children: React.ReactNode;
}

interface UserData {
  userData: User | null;
  setUserData: React.Dispatch<React.SetStateAction<User | null>>;
  userIsLogged: boolean;
  setUserIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserDataContext = createContext({} as UserData);

export const UserDataProvider = ({ children }: ProviderProp) => {
  const [userData, setUserData] = useState<User | null>(null);
  const [userIsLogged, setUserIsLogged] = useState<boolean>(false);

  onAuthStateChanged(auth, (user) => {
    if (user?.emailVerified) {
      setUserData(user);
      setUserIsLogged(true);
    } else {
      setUserData(null);
      setUserIsLogged(false);
    }
  });

  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  return (
    <UserDataContext.Provider
      value={{ userData, setUserData, userIsLogged, setUserIsLogged }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
