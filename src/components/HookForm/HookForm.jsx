import React from "react";
import useInputField from "../../hooks/useInputField";

const HookForm = () => {
  const [name, nameOnChange] = useInputField("");
  const [email, emailOnChange] = useInputField("");
  const [password, passwordOnChange] = useInputField("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", name, email, password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input defaultValue={name} type="text" onChange={nameOnChange} />
        <br></br>
        <input defaultValue={email} type="email" onChange={emailOnChange} />
        <br></br>
        <input
          defaultValue={password}
          type="password"
          onChange={passwordOnChange}
        />
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
