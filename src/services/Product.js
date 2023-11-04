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

class Product {
  constructor(firebase) {
    // Ganti dengan nama koleksi Firestore Anda
    this.collectionName = "products";

    this.db = getFirestore(firebase);
  }

  // Mendapatkan semua produk
  async getAllProducts() {
    try {
      const querySnapshot = await getDocs(
        collection(this.db, this.collectionName)
      );
      const products = [];
      querySnapshot.forEach((doc) => {
        products.push({ ...doc.data(), id: doc.id });
      });
      console.log(products);
      return products;
    } catch (error) {
      throw new Error("Gagal mengambil produk: " + error.message);
    }
  }

  // Mendapatkan produk berdasarkan ID
  async getProductById(productId) {
    try {
      const data = await getDoc(doc(this.db, this.collectionName, productId));

      return data;
    } catch (error) {
      throw new Error("Gagal mengambil produk: " + error.message);
    }
  }

  // Menambahkan produk baru
  async createProduct(productData) {
    try {
      const newProduct = await addDoc(
        collection(this.db, this.collectionName),
        productData
      );
      return newProduct;
    } catch (error) {
      throw new Error("Gagal menambahkan produk: " + error.message);
    }
  }

  // Memperbarui produk berdasarkan ID
  async updateProduct(productId, updatedProductData) {
    try {
      const productRef = doc(this.db, this.collectionName, productId);
      await updateDoc(productRef, updatedProductData);
    } catch (error) {
      throw new Error("Gagal memperbarui produk: " + error.message);
    }
  }

  // Menghapus produk berdasarkan ID
  async deleteProduct(productId) {
    try {
      const docRef = this.db.collection(this.collectionName).doc(productId);
      const doc = await docRef.get();
      if (doc.exists) {
        await docRef.delete();
        return;
      } else {
        throw new Error("Produk tidak ditemukan");
      }
    } catch (error) {
      throw new Error("Gagal menghapus produk: " + error.message);
    }
  }
}

export default Product;
