import React, { useState, useEffect } from "react";
import AddClassModel from "../components/modals/AddClassModel";
import ClassTable from "../components/ClassTable";

const Classes = (props) => {
  const [showAdd, setShowAdd] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showUpdateId, setShowUpdateId] = useState({
    id: "",
    year: "",
    semester: "",
  });
  const [showDeleteId, setShowDeleteId] = useState(0);
  const handleShowAdd = () => setShowAdd(true);
  const handleShowDelete = () => setShowDelete(true);

  const updateClass = (id, year, semester) => {
    handleShowAdd();
    setShowUpdateId({ id: id, year: year, semester: semester });
  };
  const deleteClass = (id) => {
    handleShowDelete();
    setShowDeleteId(id);
  };

  // console.log(showId);

  return (
    <>
      <ClassTable
        isClass={props.isClass}
        handleShowAdd={handleShowAdd}
        updateClass={updateClass}
        deleteClass={deleteClass}
        handleShowDelete={handleShowDelete}
      />
      <AddClassModel
        getClassDetails={props.getClassDetails}
        showAdd={showAdd}
        setShowUpdateId={setShowUpdateId}
        showUpdateId={showUpdateId}
        setShowDeleteId={setShowDeleteId}
        showDeleteId={showDeleteId}
        setShowAdd={setShowAdd}
        setShowDelete={setShowDelete}
        showDelete={showDelete}
      />
    </>
  );
};

export default Classes;
