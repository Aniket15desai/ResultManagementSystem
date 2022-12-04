import React from "react";
import AddNewStudent from "../components/AddNewStudent";

const AddStudent = (props) => {
  return (
    <AddNewStudent
      isClass={props.isClass}
      getStudentData={props.getStudentData}
      updateStudentId={props.updateStudentId}
    />
  );
};

export default AddStudent;
