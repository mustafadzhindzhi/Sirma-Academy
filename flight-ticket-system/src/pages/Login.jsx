import { Link } from "react-router-dom";
import PasswordInput from "../components/Inputs/PasswordInput.jsx";
import EmailInput from "../components/Inputs/EmailInput.jsx";
import SubmitInput from "../components/Inputs/SubmitInput.jsx";
import { useLogin } from "../hooks/useLogin.js";

function Login() {
 const [email, password, handleEmailChange, handleLoginForm, handlePasswordChange] = useLogin();

  return (
    <div>
      <form method="POST" onSubmit={handleLoginForm}>
        <EmailInput 
        value={email}
        changeHandler={handleEmailChange}
        labelText="Email"/>
        <PasswordInput
          value={password}
          changeHandler={handlePasswordChange}
          labelText="Password"
        />
        <SubmitInput value="Login"/>
      </form>
      <p>
        You don't have an account yet? <Link to={"/register"}>Register</Link>
      </p>
    </div>
  );
}

export default Login;
