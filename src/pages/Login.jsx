import { useState } from "react";
import { useDispatch } from "react-redux"; // import useDispatch
import { login } from "../states/actions/authActions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch(); // initialize dispatch
  let navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await dispatch(login(email, password)); // use dispatch to call the login action
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen bg-gray-100">
        <div>
          <h1 className="mb-8 text-4xl font-bold text-center">MEDATA</h1>
          <form
            onSubmit={handleLogin}
            className="flex flex-col items-center justify-center p-10 bg-white rounded shadow-md w-[500px]"
          >
            <p className="mb-5 text-3xl text-gray-600 uppercase">
              Masuk ke Aplikasi
            </p>
            <input
              type="email"
              name="email"
              className="w-full mb-2 input input-bordered"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              name="password"
              className="w-full mb-6 input input-bordered"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="w-72 btn btn-primary" id="login" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
