import { useState } from "react";
import { useDispatch } from "react-redux"; // import useDispatch
import { login } from "../states/actions/authActions";
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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await dispatch(login(email, password));
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen bg-gray-100">
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
            <form className="flex flex-col gap-4" onSubmit={handleLogin}>
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
            </form>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" size="lg" fullWidth>
              Masuk
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Login;
