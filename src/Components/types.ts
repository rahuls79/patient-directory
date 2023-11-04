export interface searchPatientProps {
  results: Array<Patient>;
}

export interface Patient {
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

export interface PatientDetails {
  patientDetails: Patient;
  updatePatientDetails: React.Dispatch<
    React.SetStateAction<Patient | undefined>
  >;
}

export interface FormsProps {
  displayDetails: Patient;
  setDisplayDetails: React.Dispatch<React.SetStateAction<Patient | undefined>>;
}

export const isCustomEvent = (event: Event): event is CustomEvent => {
  return "detail" in event;
};
