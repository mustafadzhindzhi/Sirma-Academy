import {useFormInput} from "../hooks/useFormInput.jsx";

function FormComponent() {
  const userNameInput = useFormInput("");
  const emailInput = useFormInput("");

  const {value: passwordValue, onChange:passwordOnChange} = useFormInput("")

  return (
    <form>
      <label>
        Name: <input type="text" {...userNameInput}/>
      </label>

      <label>
        Email: <input type="email" value={emailInput.value} onChange={emailInput.onChange}/>
      </label>
    </form>
  );
}

export default FormComponent;
