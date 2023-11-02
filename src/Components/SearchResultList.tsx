import "./SearchResultList.css";
import { SearchResult } from "./SearchResult";
import React from "react";

interface searchPatientProps {
  results: Array<Patient>;
}

interface Patient {
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

export const SearchResultList = ({ results }: searchPatientProps) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return (
          <div
            key={id}
            className="search-result"
            onClick={(e) => alert(`You selected ${result.NAME}!`)}
          >
            {result.NAME} || {result.ID}
          </div>
        );
      })}
    </div>
  );
};
