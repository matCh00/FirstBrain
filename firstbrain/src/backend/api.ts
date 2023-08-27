import { firestore } from "./firebase";
import { collection, getDocs, addDoc, doc, setDoc, query, where, deleteDoc } from "firebase/firestore";
import {ItemToDo} from "../models/ItemToDo";
import {ItemZakupy} from "../models/ItemZakupy";
import {ItemStudia} from "../models/ItemStudia";


export async function addDefaultCollections(userId: string): Promise<void> {
  const userRef = collection(firestore, userId);

  const docRef1 = doc(userRef, 'todo')
  await setDoc(docRef1, {});

  const docRef2 = doc(userRef, 'zakupy')
  await setDoc(docRef2, {});

  const docRef3 = doc(userRef, 'studia')
  await setDoc(docRef3, {});
}


export async function getAllToDo(userId: string): Promise<Array<ItemToDo>> {
  const todoRef = collection(firestore, userId, 'todo', 'list');
  const snapshot = await getDocs(todoRef);

  const todo: any[] = [];
  snapshot.forEach((doc) => {
    todo.push({ id: doc.id, ...doc.data() });
  });

  return todo;
}


export async function getAllZakupy(userId: string): Promise<Array<ItemZakupy>> {
  const zakupyRef = collection(firestore, userId, 'zakupy', 'list');
  const snapshot = await getDocs(zakupyRef);

  const zakupy: any[] = [];
  snapshot.forEach((doc) => {
    zakupy.push({ id: doc.id, ...doc.data() });
  });

  return zakupy;
}


export async function getAllStudia(userId: string): Promise<Array<ItemStudia>> {
  const studiaRef = collection(firestore, userId, 'studia', 'list');
  const snapshot = await getDocs(studiaRef);

  const studia: any[] = [];
  snapshot.forEach((doc) => {
    studia.push({ id: doc.id, ...doc.data() });
  });

  return studia;
}


export async function addToDo(userId: string, item: ItemToDo): Promise<void> {
  const colRef = collection(firestore, userId, 'todo', 'list');

  await addDoc(colRef, item)
}


export async function addAllToDo(userId: string, items: Array<ItemToDo>): Promise<void> {
  await items.forEach(item => {
    addToDo(userId, item);
  })
}


export async function addZakupy(userId: string, item: ItemZakupy): Promise<void> {
  const colRef = collection(firestore, userId, 'zakupy', 'list');

  await addDoc(colRef, item)
}


export async function addAllZakupy(userId: string, items: Array<ItemZakupy>): Promise<void> {
  await items.forEach(item => {
    addZakupy(userId, item);
  })
}


export async function addStudia(userId: string, item: ItemStudia): Promise<void> {
  const colRef = collection(firestore, userId, 'studia', 'list');

  await addDoc(colRef, item)
}


export async function addAllStudia(userId: string, items: Array<ItemStudia>): Promise<void> {
  await items.forEach(item => {
    addStudia(userId, item);
  })
}






//
// const sectionsRef = collection(firestore, 'sections');
//
//
// export const getNotes = async (type: string) => {
//
//   const colRef = collection(sectionsRef, type, 'notes');
//
//   const querySnapshot = await getDocs(colRef);
//
//   let res: INoteGroup[] = [];
//
//   querySnapshot.forEach((doc) => {
//     res.push(doc.data() as INoteGroup);
//   });
//
//   return res;
// }
//
//
// export const getAllNotes = async () => {
//
//   const q = query(sectionsRef, where("active", '==', true));
//   const querySnapshot = await getDocs(q);
//
//   let res: INoteGroup[] = [];
//
//   querySnapshot.docs.map(async (doc) => {
//
//     const ref = collection(sectionsRef, doc.data().key, 'notes');
//     const snapshot = await getDocs(ref);
//
//     let ress: INote[] = [];
//
//     snapshot.docs.map(async (d) => {
//       ress.push(d.data() as INote);
//     });
//
//     res.push({name: doc.data().key, codes: ress});
//   });
//
//   return res;
// }