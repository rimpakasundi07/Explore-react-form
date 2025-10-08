import React, { useState } from "react";

const ControlledField = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("secret");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventdefault();
    console.log(name, email, password);
    if (password.length < 6) {
      setError("6 character or longer password needed");
    } else {
      setError("");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordOnChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
    if (password.length < 6) {
      setError("Password must be 6 character or longer.");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleNameChange}
          defaultValue={name}
          placeholder="Name"
        />
        <br></br>
        <input
          type="email"
          name="email"
          onChange={handleEmailChange}
          defaultValue={email}
          placeholder="Enter Email"
          required
        />
        <br></br>
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handlePasswordOnChange}
          defaultValue={password}
          required
        />
        <br></br>
        <input type="submit" value="submit" />
      </form>
      <p style={{ color: "red" }}>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ControlledField;
