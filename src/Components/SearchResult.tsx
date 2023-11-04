import "./SearchResult.css";
import React from "react";

export const SearchResult = ({ result }: any, { pId }: any) => {
  const onSelectHandler = (e: any) => {
    alert(`You selected ${result}!`);
    console.log(e);
  };

  return (
    <div className="search-result" onClick={(e) => onSelectHandler(e.target)}>
      {result}+{pId}
    </div>
  );
};
