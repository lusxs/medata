import { createContext, useContext } from "react";
import PropTypes from "prop-types";
import { initializeApp } from "firebase/app"; // Import hanya modul Firebase yang dibutuhkan
import "firebase/auth"; // Import modul auth jika Anda membutuhkannya
import "firebase/firestore"; // Import modul firestore jika Anda membutuhkannya

// Konfigurasi Firebase Anda, dapat ditemukan di Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyBDLeYiUvS6npWNAIbHd5TjgdO4XWcD1HE",
  authDomain: "starter-react-firebase.firebaseapp.com",
  projectId: "starter-react-firebase",
  storageBucket: "starter-react-firebase.appspot.com",
  messagingSenderId: "760158541798",
  appId: "1:760158541798:web:d6807a1e33df4e50172827",
  measurementId: "G-HK3VQQZFEJ",
};

// const firebaseConfig = {
//   apiKey: "",
//   authDomain: "",
//   projectId: "",
//   storageBucket: "",
//   messagingSenderId: "",
//   appId: "",
//   measurementId: "",
// };

// Inisialisasi Firebase dengan konfigurasi
const app = initializeApp(firebaseConfig);

// Buat konteks Firebase
const FirebaseContext = createContext(null);

// Provider Firebase ke seluruh aplikasi
export function FirebaseProvider({ children }) {
  return (
    <FirebaseContext.Provider value={app}>{children}</FirebaseContext.Provider>
  );
}

// Hook khusus untuk mengakses Firebase di komponen-komponen Anda
export function useFirebase() {
  const firebaseInstance = useContext(FirebaseContext);
  if (!firebaseInstance) {
    throw new Error("useFirebase must be used within a FirebaseProvider");
  }
  return firebaseInstance;
}

// Definisi prop-types untuk FirebaseProvider
FirebaseProvider.propTypes = {
  children: PropTypes.node.isRequired, // Menambahkan children ke prop-types
};
