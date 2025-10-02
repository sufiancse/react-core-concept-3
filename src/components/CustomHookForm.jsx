import React from "react";
import useInputField from "../hooks/useInputField";

const CustomHookForm = () => {
  const [name, nameOnChange] = useInputField("");
  const [email, emailOnChange] = useInputField("");
  const [password, passwordOnChange] = useInputField("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit name:", name);
    console.log("submit email:", email);
    console.log("submit password:", password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input defaultValue={name} onChange={nameOnChange} type="text" />
        <br />
        <input onChange={emailOnChange} type="email" name="" id="" />
        <br />
        <input type="password" name="" id="" onChange={passwordOnChange} />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default CustomHookForm;
