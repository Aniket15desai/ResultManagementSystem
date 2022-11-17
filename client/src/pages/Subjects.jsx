import React, { useEffect, useState } from "react";
import AddSubjectModal from "../components/AddSubjectModal";
import SubjectTable from "../components/SubjectTable";

const Subjects = (props) => {
  const [showAdd, setShowAdd] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(0);
  const [updateId, setUpdateId] = useState({
    id: "",
    sbj_code: "",
    sbj: "",
    desc: "",
  });

  const handleShowAdd = () => setShowAdd(true);
  const handleShowDelete = () => setShowDelete(true);

  const getDeleteSubjectID = (id) => {
    handleShowDelete();
    setDeleteId(id);
  };

  const getUpdateSubjectId = (id, sbj_code, sbj, desc) => {
    handleShowAdd();
    setUpdateId({ id: id, sbj_code: sbj_code, sbj: sbj, desc: desc });
  };
  return (
    <>
      <SubjectTable
        handleShowAdd={handleShowAdd}
        handleShowDelete={handleShowDelete}
        isSubject={props.isSubject}
        getDeleteSubjectID={getDeleteSubjectID}
        getUpdateSubjectId={getUpdateSubjectId}
      />
      <AddSubjectModal
        getSubjectData={props.getSubjectData}
        showAdd={showAdd}
        setShowAdd={setShowAdd}
        showDelete={showDelete}
        setShowDelete={setShowDelete}
        deleteId={deleteId}
        updateId={updateId}
        setUpdateId={setUpdateId}
      />
    </>
  );
};

export default Subjects;
