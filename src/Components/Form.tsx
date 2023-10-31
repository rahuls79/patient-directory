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

const Form = () => {
  const options = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];

  const ageOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
  ];

  // const [date, setDate] = useState<Date>(new Date());

  return (
    <div>
      <div className="form1">
        <div className="form1-toprow">
          <div className="input-wrapper">
            <label htmlFor="pId">Patient ID</label>
            <input id="pId"></input>
          </div>
          <div className="input-wrapper">
            <label htmlFor="name">Full Name</label>
            <input id="name"></input>
          </div>
          <div className="input-wrapper">
            <label htmlFor="city">City</label>
            <input id="city"></input>
          </div>
        </div>
        <br />
        <div className="form1-bottomrow">
          <div className="input-wrapper">
            <label htmlFor="sex">Sex</label>
            <Select id="sex" options={options} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="age">Age</label>
            <Select id="age" options={ageOptions} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="phone">Phone</label>
            <input id="phone"></input>
          </div>
          <div className="input-wrapper">
            <label htmlFor="address">Address</label>
            <input id="address"></input>
          </div>
        </div>
      </div>
      <hr />
      <div className="form2">
        <div className="form2-toprow">
          <div className="input-wrapper">
            <label htmlFor="pres">Prescription</label>
            <input id="pres"></input>
          </div>
          <div className="input-wrapper">
            <label htmlFor="dose">Dose</label>
            <input id="dose"></input>
          </div>
        </div>
        <br />
        <div className="form2-bottomrow">
          <div className="input-wrapper">
            <label htmlFor="visitD">Visit Date</label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker />
              </DemoContainer>
            </LocalizationProvider>
          </div>
          <div className="input-wrapper">
            <label htmlFor="nvisit">Next Visit</label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker />
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
            <input id="phyID"></input>
          </div>
          <div className="input-wrapper">
            <label htmlFor="phyName">Physician Name</label>
            <input id="phyName"></input>
          </div>
        </div>
        <br />
        <div className="form3-bottomrow">
          <div className="input-wrapper">
            <label htmlFor="phyPhone">Phone Number</label>
            <input id="phyPhone"></input>
          </div>
          <div className="input-wrapper">
            <label htmlFor="bill">Bill</label>
            <input id="bill"></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
