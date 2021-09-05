import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

export default () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  console.log(provider)

  signInWithRedirect(auth, provider);
}