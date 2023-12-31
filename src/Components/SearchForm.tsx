import React from "react";
import { useState } from "react";
import "./Form.css";
// import DatePicker, { ReactDatePicker } from "react-datepicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "react-datepicker/dist/react-datepicker.css";
// import Dropdown from "react-bootstrap/Dropdown";
import Select from "react-select";
import dayjs from "dayjs";
import { FormsProps } from "./types";

const SearchForm = ({ displayDetails, setDisplayDetails }: FormsProps) => {
  const options = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];

  const ageOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
  ];

  // const [date, setDate] = useState<Date>(new Date());
  // console.log(displayDetails);

  return (
    <div>
      <div className="form1">
        <div className="form1-toprow">
          <div className="input-wrapper">
            <label htmlFor="pId">Patient ID</label>
            <input readOnly={true} id="pId" value={displayDetails.ID}></input>
          </div>
          <div className="input-wrapper">
            <label htmlFor="name">Full Name</label>
            <input
              readOnly={true}
              id="name"
              value={displayDetails.NAME}
            ></input>
          </div>
          <div className="input-wrapper">
            <label htmlFor="city">City</label>
            <input
              readOnly={true}
              id="city"
              value={displayDetails.City}
            ></input>
          </div>
        </div>
        <br />
        <div className="form1-bottomrow">
          <div className="input-wrapper">
            <label htmlFor="sex">Sex</label>
            <input readOnly={true} id="sex" value={displayDetails.Sex} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="age">Age</label>
            <input readOnly={true} id="age" value={displayDetails.Age} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="phone">Phone</label>
            <input
              readOnly={true}
              id="phone"
              value={displayDetails.PhoneNumber}
            ></input>
          </div>
          <div className="input-wrapper">
            <label htmlFor="address">Address</label>
            <input
              readOnly={true}
              id="address"
              value={displayDetails.Address}
            ></input>
          </div>
        </div>
      </div>
      <hr />
      <div className="form2">
        <div className="form2-toprow">
          <div className="input-wrapper">
            <label htmlFor="pres">Prescription</label>
            <input
              readOnly={true}
              id="pres"
              value={displayDetails.Prescription}
            ></input>
          </div>
          <div className="input-wrapper">
            <label htmlFor="dose">Dose</label>
            <input
              readOnly={true}
              id="dose"
              value={displayDetails.Dose}
            ></input>
          </div>
        </div>
        <br />
        <div className="form2-bottomrow">
          <div className="input-wrapper">
            <label htmlFor="visitD">Visit Date</label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  readOnly={true}
                  value={dayjs(displayDetails.VisitDate)}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
          <div className="input-wrapper">
            <label htmlFor="nvisit">Next Visit</label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  readOnly={true}
                  value={dayjs(displayDetails.NextVisit)}
                />
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
            <input
              readOnly={true}
              id="phyID"
              value={displayDetails.PhyID}
            ></input>
          </div>
          <div className="input-wrapper">
            <label htmlFor="phyName">Physician Name</label>
            <input
              readOnly={true}
              id="phyName"
              value={displayDetails.PhyName}
            ></input>
          </div>
        </div>
        <br />
        <div className="form3-bottomrow">
          <div className="input-wrapper">
            <label htmlFor="phyPhone">Phone Number</label>
            <input
              readOnly={true}
              id="phyPhone"
              value={displayDetails.PhyPhone}
            ></input>
          </div>
          <div className="input-wrapper">
            <label htmlFor="bill">Bill</label>
            <input
              readOnly={true}
              id="bill"
              value={displayDetails.Bill}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
