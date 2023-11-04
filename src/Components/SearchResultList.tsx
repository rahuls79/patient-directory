import "./SearchResultList.css";
import { SearchResult } from "./SearchResult";
import React from "react";
import { searchPatientProps } from "./types";

export const SearchResultList = ({ results }: searchPatientProps) => {
  const onSelectPatientHandler = (patientId: string) => {
    const customEvent = new CustomEvent("on-patient-select", {
      detail: patientId,
    });
    document.dispatchEvent(customEvent);
  };

  return (
    <div className="results-list">
      {results.map((result) => {
        return (
          <div
            key={result.ID}
            className="search-result"
            onClick={() => onSelectPatientHandler(result.ID)}
          >
            {result.NAME} || {result.ID}
          </div>
        );
      })}
    </div>
  );
};
