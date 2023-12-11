import { Link } from "react-router-dom";
import PasswordInput from "../components/Inputs/PasswordInput.jsx";
import TextInput from "../components/Inputs/TextInput.jsx";
import EmailInput from "../components/Inputs/EmailInput.jsx";
import PhoneInput from "../components/Inputs/PhoneInput.jsx";
import SubmitInput from "../components/Inputs/SubmitInput.jsx";
import { useRegister } from "../hooks/useRegister.js";

function Register() {
    const {firstName,
        lastName, 
        email,
        phone,
        password, 
        repassword, 
        handleFirstNameChange,
        handleLastNameChange,
        handleEmailChange,
        handlePasswordChange,
        handlePhoneChange,
        handleRepasswordChange,
        handleRegisterForm
    } = useRegister();

  return (
    <div>
      <form method="POST" onSubmit={handleRegisterForm}>
        <TextInput
          labelText="First Name"
          value={firstName}
          changeHandler={handleFirstNameChange}
        />
        <TextInput
          labelText="Last Name"
          value={lastName}
          changeHandler={handleLastNameChange}
        />
        <label>
          Phone Number:
          <PhoneInput
            labelText="Phone Number"
            value={phone}
            changeHandler={handlePhoneChange}
          />
          <EmailInput
            value={email}
            changeHandler={handleEmailChange}
            labelText="Email"
          />
        </label>
        <PasswordInput
          value={password}
          changeHandler={handlePasswordChange}
          labelText="Password"
        />
        <PasswordInput
          value={repassword}
          changeHandler={handleRepasswordChange}
          labelText="Repeat Password"
        />
        <SubmitInput value="Register"/>
      </form>
      <p>
        You already have an account? <Link to={"/login"}>Login</Link>
      </p>
    </div>
  );
}

export default Register;
