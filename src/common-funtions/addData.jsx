import { db } from "../../firebase.config";
import { doc, setDoc } from "firebase/firestore";

export const addData = async (documentId, payload) => {
  try {
    const docRef = doc(db, "users", `${documentId}`);
    await setDoc(docRef, payload, { merge: true });
  } catch (err) {
    return err;
  }
};
