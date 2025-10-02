// controlled components one per each field

import { useState } from "react";

const ControlledField = () => {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // uncontrolled system. running time e conditional error dekhabe na. submit korar somoy error show korbe
    // if(password.length <6){
    //     setPasswordError("password less than 6. conditional error show when form submitted")
    // }
    // else{
    //     setPasswordError('')
    // }
  };

  const handleOnChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);

    //// controlled system. running time e dekhabe je kono error ache naki
    if (password.length < 6) {
      setPasswordError(
        "password can not less than 6. conditional error shows current time"
      );
    } else {
      setPasswordError("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter your name" />
        <br />
        <input
          type="password"
          name="password"
          id=""
          onChange={handleOnChange}
          defaultValue={password}
          placeholder="Enter Your Password"
          required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{ color: "red" }}>
        <small>{passwordError}</small>
      </p>
    </div>
  );
};

export default ControlledField;
