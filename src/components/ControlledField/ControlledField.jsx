import React from "react";

const ControlledField = () => {
  const handleSubmit = (e) => {
    e.preventdefault();
    console.log("submitted");
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
        />{" "}
        <br></br>
        <input type="password" name="password" id="" placeholder="password" />
        <br></br>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default ControlledField;
