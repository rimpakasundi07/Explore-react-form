import React from "react";

const ProductFrom = () => {
  return (
    <div>
      <form>
        <input type="text" name="name" placeholder="Product Name" /> <br></br>
        <input type="text" name="price" placeholder="Product Price" /> <br></br>
        <input type="text" name="quantity" placeholder="Product Quantity" />
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ProductFrom;
