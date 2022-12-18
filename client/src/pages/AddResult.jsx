import React from "react";
import AddNewResult from "../components/AddNewResult";

const AddResult = (props) => {
  return (
    <AddNewResult
      isSubject={props.isSubject}
      showList={props.showList}
      getResultData={props.getResultData}
      allStudentResult={props.allStudentResult}
      resultList={props.resultList}
    />
  );
};

export default AddResult;
