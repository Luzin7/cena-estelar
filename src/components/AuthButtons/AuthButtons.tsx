import { useContext } from 'react';
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from '../../services/firebase';
import { BsGoogle, BsGithub } from 'react-icons/bs';
import { UserDataContext } from '../../hooks/contexts/userData';
import { Navigate, useNavigate } from 'react-router-dom';
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

  // function handleGithubSignIn() {
  //   const provider = new GithubAuthProvider();

  //   signInWithPopup(auth, provider)
  //     .then((userCredential) => {
  //       const userData = userCredential.user;
  //       setUserData(userData);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
  return (
    <>
      <button style={{ fontSize: '1em' }} onClick={() => handleGoogleSignIn()}>
        <BsGoogle />
      </button>
      {/* <button
        className=" px-4 py-4 font-medium text-white bg-purple-700 rounded-md"
        onClick={() => handleGithubSignIn()}
      >
        <BsGithub />
      </button> */}
    </>
  );
}

export { AuthButtons };
