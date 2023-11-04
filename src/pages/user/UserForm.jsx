import { useState } from "react";
import { useFirebase } from "../../context/FirebaseContext";
import User from "../../services/User";

const UserForm = () => {
  const firebase = useFirebase;
  const user = new User(firebase);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
    name: "Harke",
    role: "admin",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await user.addUserWithRole(
        userData.email,
        userData.password,
        userData.name,
        userData.role
      );
      setUserData({
        email: "",
        password: "",
        name: "",
        role: "",
      });
    } catch (error) {
      // Handle errors here
    }
  };

  return (
    <div>
      <h2>Add a New User</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center p-10 bg-white rounded shadow-md"
      >
        <p className="mb-5 text-3xl text-gray-600 uppercase">Login</p>
        <input
          type="email"
          name="email"
          className="mb-2 w-72 input input-bordered"
          placeholder="Email"
          value={userData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          className="mb-6 w-72 input input-bordered"
          placeholder="Password"
          value={userData.password}
          onChange={handleChange}
          required
        />
        <button className="w-full btn btn-primary" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default UserForm;
