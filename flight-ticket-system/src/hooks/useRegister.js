import { useState } from "react";
import { checkArrayForEmptyString, isPassDif } from "../utils/validations.js";

function useRegister () {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
  
    function handleFirstNameChange(e) {
      setFirstName(e.target.value);
    }
  
    function handleLastNameChange(e) {
      setLastName(e.target.value);
    }
  
    function handlePhoneChange(e) {
      setPhone(e.target.value);
    }
  
    function handleRepasswordChange(e) {
      setRepassword(e.target.value);
    }
  
    function handleEmailChange(e) {
      setEmail(e.target.value);
    }
  
    function handlePasswordChange(e) {
      setPassword(e.target.value);
    }
  
    function handleRegisterForm(e) {
      e.preventDefault();
      if(checkArrayForEmptyString([firstName, lastName, phone, email, password, repassword])
      )  {
        alert("All fields are required!");
        return;
      }
  
      if(isPassDif(password, repassword)) {
        alert("Password don't match");
        return;
      }
  
      fetch("/api/v1/register", {
        method: "POST",
        body: JSON.stringify({
          firstName,
          lastName,
          phone,  
          email,
          password,
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    }
  
    return {
        firstName,
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
    }
};

export {useRegister};