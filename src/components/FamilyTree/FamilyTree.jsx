import React from "react";
import Grandapa from "./Grandapa";
import "./FamilyTree.css";

const FamilyTree = () => {
  const asset = "diamond";
  return (
    <div className="family-tree">
      <h2>Family Tree</h2>
      <Grandapa></Grandapa>
    </div>
  );
};

export default FamilyTree;
