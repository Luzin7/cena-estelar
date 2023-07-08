import { createContext } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../services/firebase';

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
  console.log(userIsLogged);

  onAuthStateChanged(auth, (user) => {
    if (user?.emailVerified) {
      setUserData(user);
      setUserIsLogged(true);
    } else {
      setUserData(null);
      setUserIsLogged(false);
    }
  });

  return (
    <UserDataContext.Provider
      value={{ userData, setUserData, userIsLogged, setUserIsLogged }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
