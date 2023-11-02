import React, { useState, useEffect } from "react";
import Form from "./Form";
import "./SearchPatient.css";
import Select from "react-select";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "react-datepicker/dist/react-datepicker.css";
// import Dropdown from "react-bootstrap/Dropdown";
// import Select from "react-select";
import dayjs from "dayjs";
import { SearchResultList } from "./SearchResultList";

const SearchPatient = () => {
  const [searchKey, setSearchKey] = useState("");
  const [result, setResult] = useState([]);
  const [displayDetails, setDisplayDetails] = useState({
    ID: "",
    NAME: "",
    City: "",
    Sex: "",
    Age: "",
    PhoneNumber: "",
    Address: "",
    Prescription: "",
    Dose: "",
    VisitDate: "",
    NextVisit: "",
    PhyID: "",
    PhyName: "",
    PhyPhone: "",
    Bill: "",
  });

  // const Options = [
  //   { value: {displayDetails[0].ID}, label: "1" },
  //   { value: "2", label: "2" },
  // ];

  const handleChange = (value: string) => {
    setSearchKey(value);
    fetchData(value);
  };

  const fetchData = (value: string) => {
    fetch(
      "https://sheet.best/api/sheets/b630797f-ed28-4de1-ac93-0b71f665e9c7/" +
        "query?NAME=" +
        value
    )
      .then((response) => response.json())
      .then((json) => {
        const result = json.filter((user: any) => {
          return value && user && user.NAME && user.NAME.includes(value);
        });
        setResult(result);
        console.log(result);
      });
  };

  return (
    <div>
      <div className="search-section">
        <input
          id="search-input"
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        ></input>
        <button id="search-button">🔍</button>
      </div>
      {result && result.length > 0 && <SearchResultList results={result} />}
      <br /> <br />
      <Form
        displayDetails={displayDetails}
        setDisplayDetails={setDisplayDetails}
      />
      {/* <ul>
        {displayDetails.map((data: any) => (
          <li key={data.ID}>{data.NAME}</li>
        ))}
      </ul> */}
      {/* <input value={displayDetails[0].ID}></input> */}
      {/* 
            ///Form.tsx
                  
      <div className="form1">                                         
        <div className="form1-toprow">
          <div className="input-wrapper">
            <label htmlFor="pId">Patient ID</label>
            <input id="pId" value={displayDetails.ID}></input>
          </div>
          <div className="input-wrapper">
            <label htmlFor="name">Full Name</label>
            <input id="name" value={displayDetails.NAME}></input>
          </div>
          <div className="input-wrapper">
            <label htmlFor="city">City</label>
            <input id="city" value={displayDetails.City}></input>
          </div>
        </div>
        <br />
        <div className="form1-bottomrow">
          <div className="input-wrapper">
            <label htmlFor="sex">Sex</label>
            <Select id="sex" value={displayDetails.Sex} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="age">Age</label>
            <Select id="age" value={displayDetails.Age} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="phone">Phone</label>
            <input id="phone" value={displayDetails.PhoneNumber}></input>
          </div>
          <div className="input-wrapper">
            <label htmlFor="address">Address</label>
            <input id="address" value={displayDetails.Address}></input>
          </div>
        </div>
      </div>
      <hr />
      <div className="form2">
        <div className="form2-toprow">
          <div className="input-wrapper">
            <label htmlFor="pres">Prescription</label>
            <input id="pres" value={displayDetails.Prescription}></input>
          </div>
          <div className="input-wrapper">
            <label htmlFor="dose">Dose</label>
            <input id="dose" value={displayDetails.Dose}></input>
          </div>
        </div>
        <br />
        <div className="form2-bottomrow">
          <div className="input-wrapper">
            <label htmlFor="visitD">Visit Date</label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker defaultValue={dayjs(displayDetails.VisitDate)} />
              </DemoContainer>
            </LocalizationProvider>
          </div>
          <div className="input-wrapper">
            <label htmlFor="nvisit">Next Visit</label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker defaultValue={dayjs(displayDetails.NextVisit)} />
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </div>
      </div>
      <hr />
      <div className="form3">
        <div className="form3-toprow">
          <div className="input-wrapper">
            <label htmlFor="phyID">Physician ID</label>
            <input id="phyID" value={displayDetails.PhyID}></input>
          </div>
          <div className="input-wrapper">
            <label htmlFor="phyName">Physician Name</label>
            <input id="phyName" value={displayDetails.PhyName}></input>
          </div>
        </div>
        <br />
        <div className="form3-bottomrow">
          <div className="input-wrapper">
            <label htmlFor="phyPhone">Phone Number</label>
            <input id="phyPhone" value={displayDetails.PhyPhone}></input>
          </div>
          <div className="input-wrapper">
            <label htmlFor="bill">Bill</label>
            <input id="bill" value={displayDetails.Bill}></input>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default SearchPatient;
