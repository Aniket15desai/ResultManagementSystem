import React from "react";
import ResultTable from "../components/ResultTable";

const Results = (props) => {
  return (
    <ResultTable
      isResult={props.isResult}
      setShowList={props.setShowList}
      setResultList={props.setResultList}
      getResultItem={props.getResultItem}
    />
  );
};

export default Results;
