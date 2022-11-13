import React, { useState, useEffect } from 'react';
import AddClassModel from '../components/addClassModel';
import ClassTable from '../components/ClassTable';
import axios from 'axios';

const Classes = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showUpdateId, setShowUpdateId] = useState({});
  const [showDeleteId, setShowDeleteId] = useState({});
  const [isClass, setIsClass] = useState([]);
  const handleShowAdd = () => setShowAdd(true);
  const handleShowDelete = () => setShowDelete(true);

  useEffect(() => {
    getClassDetails();
  }, [])

  const getClassDetails = () => {
    axios.get
    (
      `http://localhost:5000/class/getClass`
    ).then((response) => {
      setIsClass(response.data.data);
    });
  }
  
  const updateClass = (id, year, semester) => {
    handleShowAdd();
    setShowUpdateId({id: id, year: year, semester: semester});
  }
  const deleteClass = (id) => {
    handleShowDelete();
    setShowDeleteId({id: id});
  }

  // console.log(showId);
  
  return (
    <>
      <ClassTable
        isClass={isClass}
        handleShowAdd={handleShowAdd}
        updateClass={updateClass}
        deleteClass={deleteClass}
        handleShowDelete={handleShowDelete}
      />
      <AddClassModel
        getClassDetails={getClassDetails}
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
  )
}

export default Classes;