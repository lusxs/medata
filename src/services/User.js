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
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

class User {
  constructor(firebase) {
    this.collectionName = "users";
    this.db = getFirestore(firebase);
    this.auth = getAuth();
  }

  async getAllUsers() {
    try {
      const userCollectionRef = collection(this.db, this.collectionName);
      const querySnapshot = await getDocs(userCollectionRef);
      const users = [];

      querySnapshot.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id });
      });

      console.log(users);
      return users;
    } catch (error) {
      throw new Error("Failed to fetch users: " + error.message);
    }
  }

  async addUserWithRole(email, password, fullName, role) {
    try {
      // Create a new user
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );

      // Prepare user data to be stored in Firestore
      const userData = {
        uuid: userCredential.user.uid,
        fullName,
        email,
        role,
      };

      // Add user data to the "users" collection in Firestore
      const userRef = await addDoc(
        collection(this.db, this.collectionName),
        userData
      );

      return userData;
    } catch (error) {
      throw new Error("Failed to add user: " + error.message);
    }
  }

  async login(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );

      console.log(userCredential);
      return {
        email: userCredential.user.email,
        id: userCredential.user.uid,
      };
    } catch (error) {
      throw new Error("Failed to login: " + error.message);
    }
  }

  async logout() {
    try {
      await signOut(this.auth);
    } catch (error) {
      throw new Error("Failed to logout: " + error.message);
    }
  }

  async getLoggedInUserData() {
    const user = this.auth.currentUser;

    if (user) {
      const userData = {
        email: user.email,
        id: user.uid,
      };

      return userData;
    } else {
      throw new Error("User is not authenticated");
    }
  }
}

export default User;
