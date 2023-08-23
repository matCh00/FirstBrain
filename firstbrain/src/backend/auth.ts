import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {auth} from "./firebase";


export async function register(email: string, password: string): Promise<any> {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('Zarejestrowano pomyślnie.');
    return user;
  }
  catch (error) {
    console.error('Błąd logowania:', error);
  }
}


export async function logIn(email: string, password: string): Promise<any> {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('Zalogowano pomyślnie.');
    return user;
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