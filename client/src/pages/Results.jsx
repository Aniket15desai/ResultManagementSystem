import React from "react";
import ResultTable from "../components/ResultTable";

const Results = (props) => {
  return (
    <ResultTable
      isResult={props.isResult}
      setShowList={props.setShowList}
      setResultList={props.setResultList}
    />
  );
};

export default Results;
