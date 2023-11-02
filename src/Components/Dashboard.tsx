import React from "react";
import "./Dashboard.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import AddPatient from "./AddPatient";
import { useRef, useContext } from "react";
import SearchPatient from "./SearchPatient";
import EditPatient from "./EditPatient";

const Dashboard = () => {
  const navigate = useNavigate();

  const AddPatientPageHandler = () => {
    navigate("Dashboard/Add-Patient");
  };

  const SearchPatientPageHandler = () => {
    navigate("Dashboard/Search-Patient");
  };

  const EditPatientPageHandler = () => {
    navigate("Dashboard/Edit-Patient");
  };

  return (
    <div className="dashboard">
      <div className="navigation-tab">
        <div className="navigation-option">
          <p
            id="navigation-option-selector"
            onClick={() => AddPatientPageHandler()}
          >
            Add Patient
          </p>
        </div>
        <div className="navigation-option">
          <p
            id="navigation-option-selector"
            onClick={() => EditPatientPageHandler()}
          >
            Edit Patient
          </p>
        </div>
        <div className="navigation-option">
          <p
            id="navigation-option-selector"
            onClick={() => SearchPatientPageHandler()}
          >
            Search Patient
          </p>
        </div>
        <div className="navigation-option">
          <p id="navigation-option-selector">Select Spreadsheet</p>
        </div>
      </div>
      <div className="view-panel">
        <Routes>
          <Route path="/Dashboard" element="" />
          <Route path="Dashboard/Add-Patient/*" element={<AddPatient />} />
          <Route path="/Dashboard/Edit-Patient/*" element={<EditPatient />} />
          <Route
            path="/Dashboard/Search-Patient/*"
            element={<SearchPatient />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
