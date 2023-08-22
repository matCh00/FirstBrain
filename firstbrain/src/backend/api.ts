import { firestore } from "./firebase";
import { collection, getDocs, addDoc, doc, setDoc, query, where, deleteDoc } from "firebase/firestore";


export async function getAllCollections(userId: string): Promise<any[]> {
  const userRef = collection(firestore, userId);
  const snapshot = await getDocs(userRef);

  const todos: any[] = [];
  snapshot.forEach((doc) => {
    todos.push({ id: doc.id, ...doc.data() });
    console.log(doc.id, doc.data())
  });

  return todos;
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