import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase.config";
export const readData = async (documentId) => {
  try {
    const docRef = doc(db, "users", `${documentId}`);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    return data;
  } catch (err) {
    return err;
  }
};
