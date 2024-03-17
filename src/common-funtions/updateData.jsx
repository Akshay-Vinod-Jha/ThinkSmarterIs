import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase.config";
export const updateData = async (documentId, payload) => {
  try {
    const docRef = doc(db, "users", `${documentId}`);
    await updateDoc(docRef, payload);
  } catch (err) {
    return err;
  }
};
