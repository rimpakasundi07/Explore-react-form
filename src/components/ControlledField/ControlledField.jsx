import React, { useState } from "react";

const ControlledField = () => {
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventdefault();
    console.log("submitted");
  };

  const handlePasswordOnChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id=""
          placeholder="Enter Email"
          required
        />
        <br></br>
        <input
          type="password"
          name="password"
          id=""
          placeholder="password"
          onChange={handlePasswordOnChange}
          defaultValue={password}
          required
        />
        <br></br>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default ControlledField;
