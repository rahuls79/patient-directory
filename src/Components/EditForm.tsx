import React from "react";
import { useState, useEffect } from "react";
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
import { FormsProps, Patient, PatientDetails } from "./types";
import moment from "moment";

const EditForm = ({ displayDetails, setDisplayDetails }: FormsProps) =>
  //   { patientDetails, updatePatientDetails }: PatientDetails
  {
    const options = [
      { value: "Male", label: "Male" },
      { value: "Female", label: "Female" },
    ];

    const [tID, setId] = useState<any>("");
    const [tName, setName] = useState<string>("");
    const [tCity, setCity] = useState<string>("");
    const [tSex, setSex] = useState<any>();
    const [tAge, setAge] = useState<any>();
    const [tPhone, setPhone] = useState<any>();
    const [tAddress, setAddress] = useState<string>("");
    const [tPrescription, setPrescription] = useState<string>("");
    const [tDose, setDose] = useState<string>("");
    const [tVdate, setVdate] = useState<any>();
    const [tNvdate, setNVdate] = useState<any>();
    const [tPhyName, setPhyName] = useState<string>("");
    const [tPhyid, setPhyId] = useState<any>("");
    const [tPhyphone, setPhyPhone] = useState<any>();
    const [tBill, setBill] = useState<any>("");

    const ageOptions = [
      { value: "1", label: "1" },
      { value: "2", label: "2" },
    ];

    // const [date, setDate] = useState<Date>(new Date());
    console.log(tID);

    let vUdate = moment(tVdate).format("DD/MM/YYYY");
    let NvUdate = moment(tNvdate).format("DD/MM/YYYY");

    //   useEffect(() => {
    //     updatePatientDetails({
    //       ID: tID,
    //       NAME: tName,
    //       City: tCity,
    //       Sex: tSex,
    //       Age: tAge,
    //       PhoneNumber: tPhone,
    //       Address: tAddress,
    //       Prescription: tPrescription,
    //       Dose: tDose,
    //       VisitDate: vUdate,
    //       NextVisit: NvUdate,
    //       PhyID: tPhyid,
    //       PhyName: tPhyName,
    //       PhyPhone: tPhyphone,
    //       Bill: tBill,
    //     });
    //   }, [displayDetails]);

    //   console.log(patientDetails);

    return (
      <div>
        <div className="form1">
          <div className="form1-toprow">
            <div className="input-wrapper">
              <label htmlFor="pId">Patient ID</label>
              <input
                id="pId"
                readOnly={true}
                defaultValue={displayDetails.ID}
              ></input>
            </div>
            <div className="input-wrapper">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                defaultValue={displayDetails.NAME}
              ></input>
            </div>
            <div className="input-wrapper">
              <label htmlFor="city">City</label>
              <input
                id="city"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                defaultValue={displayDetails.City}
              ></input>
            </div>
          </div>
          <br />
          <div className="form1-bottomrow">
            <div className="input-wrapper">
              <label htmlFor="sex">Sex</label>
              <input
                id="sex"
                readOnly={true}
                defaultValue={displayDetails.Sex}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="age">Age</label>
              <input
                id="age"
                readOnly={true}
                defaultValue={displayDetails.Age}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                defaultValue={displayDetails.PhoneNumber}
              ></input>
            </div>
            <div className="input-wrapper">
              <label htmlFor="address">Address</label>
              <input
                id="address"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                defaultValue={displayDetails.Address}
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
                id="pres"
                onChange={(e) => {
                  setPrescription(e.target.value);
                }}
                defaultValue={displayDetails.Prescription}
              ></input>
            </div>
            <div className="input-wrapper">
              <label htmlFor="dose">Dose</label>
              <input
                id="dose"
                onChange={(e) => {
                  setDose(e.target.value);
                }}
                defaultValue={displayDetails.Dose}
              ></input>
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
              <input
                id="phyID"
                onChange={(e) => {
                  setPhyId(e.target.value);
                }}
                defaultValue={displayDetails.PhyID}
              ></input>
            </div>
            <div className="input-wrapper">
              <label htmlFor="phyName">Physician Name</label>
              <input
                id="phyName"
                onChange={(e) => {
                  setPhyName(e.target.value);
                }}
                defaultValue={displayDetails.PhyName}
              ></input>
            </div>
          </div>
          <br />
          <div className="form3-bottomrow">
            <div className="input-wrapper">
              <label htmlFor="phyPhone">Phone Number</label>
              <input
                id="phyPhone"
                onChange={(e) => {
                  setPhyPhone(e.target.value);
                }}
                defaultValue={displayDetails.PhyPhone}
              ></input>
            </div>
            <div className="input-wrapper">
              <label htmlFor="bill">Bill</label>
              <input
                id="bill"
                onChange={(e) => {
                  setBill(e.target.value);
                }}
                defaultValue={displayDetails.Bill}
              ></input>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default EditForm;
