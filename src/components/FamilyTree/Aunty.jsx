import React from "react";
import Cousin from "./Cousin";

const Aunty = () => {
  return (
    <div>
      <h3>Aunty</h3>
      <section className="flex">
        <Cousin name="Dipika"></Cousin>
        <Cousin name="Pekhom"></Cousin>
      </section>
    </div>
  );
};

export default Aunty;
