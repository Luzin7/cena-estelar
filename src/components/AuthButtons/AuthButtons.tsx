import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useContext } from 'react';
import { BsGoogle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from '../../contexts/userData';
import { auth } from '../../services/firebase';
import { HOME } from '../../utils/paths';

function AuthButtons() {
  const { setUserData, setUserIsLogged } = useContext(UserDataContext);
  const navigate = useNavigate();

  function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((userCredential) => {
        const userData = userCredential.user;
        setUserData(userData);
        setUserIsLogged(true);
        navigate(HOME);
      })
      .catch((error) => {
        console.log(error);
        setUserIsLogged(false);
      });
  }

  return (
      <button className='text-2xl' onClick={() => handleGoogleSignIn()}>
        <BsGoogle />
      </button>
  );
}

export { AuthButtons };
