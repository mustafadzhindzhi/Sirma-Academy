import { useState } from "react";
import { checkArrayForEmptyString } from "../utils/validations.js";

function useLogin () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    function handleEmailChange(e) {
      setEmail(e.target.value);
    }
  
    function handlePasswordChange(e) {
      setPassword(e.target.value);
    }
  
    function handleLoginForm(e) {
      e.preventDefault();
      if (checkArrayForEmptyString(email, password)) {
        alert("Email and Password fields are required!");
        return;
      }
  
      fetch("/api/v1/login", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    };

    return {
        email, password, handleEmailChange, handlePasswordChange, handleLoginForm
    }
}

export { useLogin };
