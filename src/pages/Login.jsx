import { useState } from "react";
import { useDispatch } from "react-redux"; // import useDispatch
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { login } from "../features/userSlice";
import { auth } from "../context/FirebaseContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userAuth = await signInWithEmailAndPassword(auth, email, password);

      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          photoUrl: userAuth.user.photoURL,
        })
      );

      navigate("/dashboard");
    } catch (error) {
      alert(error); // Display an alert or handle the error appropriately
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen bg-gray-100">
        <form onSubmit={handleLogin}>
          <Card className="w-96 md:w-[500px]">
            <CardHeader
              variant="gradient"
              color="gray"
              className="grid mb-4 h-28 place-items-center"
            >
              <Typography variant="h3" color="white">
                MEDATA
              </Typography>
            </CardHeader>
            <CardBody>
              <div className="flex flex-col gap-4" onSubmit={handleLogin}>
                <Input
                  label="Email"
                  size="lg"
                  onChange={(e) => setEmail(e.target.value)}
                  error
                />
                <Input
                  label="Kata Sandi"
                  size="lg"
                  onChange={(e) => setPassword(e.target.value)}
                  success
                />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button type="submit" variant="gradient" size="lg" fullWidth>
                Masuk
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </>
  );
};

export default Login;
