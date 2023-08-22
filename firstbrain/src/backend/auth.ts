import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {auth} from "./firebase";


export async function register(email: string, password: string): Promise<void> {
  try {
    await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user
      console.log('Zarejestrowano pomyślnie.');
    })
  }
  catch (error) {
    console.error('Błąd logowania:', error);
  }
}


export async function logIn(email: string, password: string): Promise<void> {
  try {
    await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user
      console.log('Zalogowano pomyślnie.');
    })
  }
  catch (error) {
    console.error('Błąd logowania:', error);
  }
}


export async function logOut(): Promise<void> {
  try {
    await signOut(auth);
    console.log('Wylogowano pomyślnie.');
  }
  catch (error) {
    console.error('Błąd wylogowywania:', error);
  }
}