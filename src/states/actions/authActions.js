import User from "../../services/User";
import { useFirebase } from "../../context/FirebaseContext";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const GET_ME_SUCCESS = "GET_ME_SUCCESS";
export const GET_ME_FAILURE = "GET_ME_FAILURE";

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const user = new User(useFirebase);
      const uid = await user.login(email, password);
      dispatch({ type: LOGIN_SUCCESS, payload: uid });
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      if (error.code === "INVALID_CREDENTIALS") {
        dispatch({
          type: LOGIN_FAILURE,
          payload: "Email atau kata sandi salah",
        });
      } else {
        dispatch({
          type: LOGIN_FAILURE,
          payload: "Gagal masuk. Silakan coba lagi.",
        });
      }
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      const user = new User(useFirebase);
      await user.logout();
      localStorage.clear();
      dispatch({ type: LOGOUT_SUCCESS });
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      dispatch({ type: "LOGOUT_FAILURE", payload: error.message });
    }
  };
};

export const getMe = () => {
  return async (dispatch) => {
    try {
      const user = new User(useFirebase);
      const userData = await user.getLoggedInUserData();
      // Mengirim data pengguna ke status aplikasi jika diperlukan
      dispatch({ type: GET_ME_SUCCESS, payload: userData });

      // Contoh: Anda dapat mencetak data pengguna ke konsol
      console.log("Data pengguna saat ini:", userData);
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      dispatch({ type: GET_ME_FAILURE, payload: error.message });
    }
  };
};
