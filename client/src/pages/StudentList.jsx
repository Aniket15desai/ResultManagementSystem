import React from "react";
import StudentLists from "../components/StudentLists";

const StudentList = (props) => {
  return (
    <>
      <StudentLists
        handleUpdateStudent={props.handleUpdateStudent}
        isStudent={props.isStudent}
        isClass={props.isClass}
        getStudentData={props.getStudentData}
      />
    </>
  );
};

export default StudentList;
