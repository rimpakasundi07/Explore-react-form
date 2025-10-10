import React, { createContext } from "react";
import Grandapa from "./Grandapa";
import "./FamilyTree.css";

export const AssetContext = createContext("");
const FamilyTree = () => {
  const asset = "diamond";
  const newAsset = "gold";
  return (
    <div className="family-tree">
      <h2>Family Tree</h2>
      <AssetContext.Provider value={newAsset}>
        <Grandapa asset={asset}></Grandapa>
      </AssetContext.Provider>
    </div>
  );
};

export default FamilyTree;

/**
 *
 * 1. create a context using createContext with a default value make sure
 * you are export the context to be used in other files
 */
