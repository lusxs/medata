import { useFirebase } from "../context/FirebaseContext";
import {
  getFirestore,
  collection,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  onSnapshot,
  getDoc,
  getDocs,
  addDoc,
} from "firebase/firestore";

class Form {
  constructor(firebase) {
    this.collectionName = "data";

    this.db = getFirestore(firebase);
  }

  async getAllData() {
    try {
      const querySnapshot = await getDocs(
        collection(this.db, this.collectionName)
      );
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      console.log(data);
      return data;
    } catch (error) {
      throw new Error("Gagal mengambil data: " + error.message);
    }
  }

  async createData(data) {
    try {
      await addDoc(collection(this.db, this.collectionName), data);
      return true;
    } catch (error) {
      return false;
    }
  }

  async updateData(id, updatedData) {
    try {
    } catch (error) {}
  }
}

export default Form;
