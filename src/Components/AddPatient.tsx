import React from "react";
import { useState } from "react";
import "./AddPatient.css";
// import DatePicker, { ReactDatePicker } from "react-datepicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "react-datepicker/dist/react-datepicker.css";
// import Dropdown from "react-bootstrap/Dropdown";
import Select from "react-select";
import moment from "moment";
import dayjs from "dayjs";

const AddPatient = () => {
  const options = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];

  const ageOptions = [
    { value: "1-20", label: "1-20" },
    { value: "21-40", label: "21-40" },
    { value: "41-60", label: "41-60" },
    { value: "60+", label: "60+" },
  ];

  // const [date, setDate] = useState<Date>(new Date());
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

  const [patientDetails, updatePatientDetails] = useState({
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

  // const idChangeHandler = (e) =>{
  //   updatePatientDetails({tID={e})
  // }

  // const visitDate = getDate(vdate);

  let vUdate = moment(tVdate).format("DD/MM/YYYY");
  let NvUdate = moment(tNvdate).format("DD/MM/YYYY");

  const onClickButton = () => {
    updatePatientDetails({
      ID: tID,
      NAME: tName,
      City: tCity,
      Sex: tSex,
      Age: tAge,
      PhoneNumber: tPhone,
      Address: tAddress,
      Prescription: tPrescription,
      Dose: tDose,
      VisitDate: vUdate,
      NextVisit: NvUdate,
      PhyID: tPhyid,
      PhyName: tPhyName,
      PhyPhone: tPhyphone,
      Bill: tBill,
    });
    console.log(patientDetails);
    setId("");
    setName("");
    setCity("");
    setPhone("");
    setAddress("");
    setPrescription("");
    setDose("");
    // setVdate("");
    // setNVdate("");
    setPhyId("");
    setPhyName("");
    setPhyPhone("");
    setBill("");

    fetch(
      "https://sheet.best/api/sheets/b630797f-ed28-4de1-ac93-0b71f665e9c7",
      {
        // mode:'no-cors',
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(patientDetails),
      }
    )
      .then((res) => {
        console.log("res", res);
        if (res.status === 200) {
          alert("success");
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  // console.log(vUdate, NvUdate);

  return (
    <div>
      <div className="form1">
        <div className="form1-toprow">
          <div className="input-wrapper">
            <label htmlFor="pId">Patient ID</label>
            <input
              id="pId"
              value={tID}
              onChange={(e) => {
                setId(e.target.value);
              }}
            ></input>
          </div>
          <div className="input-wrapper">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              value={tName}
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
          </div>
          <div className="input-wrapper">
            <label htmlFor="city">City</label>
            <input
              id="city"
              value={tCity}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <br />
        <div className="form1-bottomrow">
          <div className="input-wrapper">
            <label htmlFor="sex">Sex</label>
            <Select
              id="sex"
              options={options}
              onChange={(e) => {
                setSex(e?.value);
              }}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="age">Age</label>
            <Select
              id="age"
              options={ageOptions}
              onChange={(e) => {
                setAge(e?.value);
              }}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              value={tPhone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            ></input>
          </div>
          <div className="input-wrapper">
            <label htmlFor="address">Address</label>
            <input
              id="address"
              value={tAddress}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
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
              value={tPrescription}
              onChange={(e) => {
                setPrescription(e.target.value);
              }}
            ></input>
          </div>
          <div className="input-wrapper">
            <label htmlFor="dose">Dose</label>
            <input
              id="dose"
              value={tDose}
              onChange={(e) => {
                setDose(e.target.value);
              }}
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
                  defaultValue={dayjs()}
                  onChange={(e) => setVdate(e)}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
          <div className="input-wrapper">
            <label htmlFor="nvisit">Next Visit</label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  defaultValue={dayjs("2023-07-11")}
                  onChange={(e) => setNVdate(e)}
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
              id="phyID"
              value={tPhyid}
              onChange={(e) => {
                setPhyId(e.target.value);
              }}
            ></input>
          </div>
          <div className="input-wrapper">
            <label htmlFor="phyName">Physician Name</label>
            <input
              id="phyName"
              value={tPhyName}
              onChange={(e) => {
                setPhyName(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <br />
        <div className="form3-bottomrow">
          <div className="input-wrapper">
            <label htmlFor="phyPhone">Phone Number</label>
            <input
              id="phyPhone"
              value={tPhyphone}
              onChange={(e) => {
                setPhyPhone(e.target.value);
              }}
            ></input>
          </div>
          <div className="input-wrapper">
            <label htmlFor="bill">Bill</label>
            <input
              id="bill"
              value={tBill}
              onChange={(e) => {
                setBill(e.target.value);
              }}
            ></input>
          </div>
        </div>
      </div>
      <button onClick={onClickButton}>Done</button>
    </div>
  );
};

export default AddPatient;
