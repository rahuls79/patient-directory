import "./SearchResult.css";
import React from "react";

interface searchPatientProps {
  results: Array<User>;
}

interface User {
  ID: string;
  NAME: string;
  City: string;
  Sex: string;
  Age: string;
  PhoneNumber: string;
  Address: string;
  Prescription: string;
  Dose: string;
  VisitDate: string;
  NextVisit: string;
  PhyID: string;
  PhyName: string;
  PhyPhone: string;
  Bill: string;
}

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
