import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Header from "../components/Header";
import Classes from "./Classes";
import Subjects from "./Subjects";
import ManageAccountModel from "../components/ManageAccountModel";
import axios from "axios";

function Index() {
  const [show, setShow] = useState(false);
  const [showMobile, setShowMobile] = useState(false);
  const [isClass, setIsClass] = useState([]);
  const [isStudent, setIsStudent] = useState([]);
  const [isSubject, setIsSubject] = useState([]);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (window) {
      if (window.matchMedia("(max-width: 991px)").matches) {
        setShowMobile(true);
      } else {
        setShowMobile(false);
      }
    }
  }, [window]);

  useEffect(() => {
    getClassDetails();
    getStudentData();
    getSubjectData();
  }, []);

  const getClassDetails = () => {
    axios.get(`http://localhost:5000/class/getClass`).then((response) => {
      setIsClass(response.data.data);
    });
  };

  const getStudentData = () => {
    axios.get(`http://localhost:5000/student/getStudents`).then((response) => {
      setIsStudent(response.data.data);
    });
  };

  const getSubjectData = () => {
    axios.get(`http://localhost:5000/student/getStudents`).then((response) => {
      setIsSubject(response.data.data);
    });
  };

  return (
    <div>
      <Header handleShow={handleShow} showMobile={showMobile} />
      <div className="container-fluid mt-3">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0">
              <Routes>
                <Route exact path="/dashboard" element={"Home"} />
                <Route exact path="/classes" element={"Classes"} />
                <Route exact path="/subjects" element={"Subjects"} />
                <Route exact path="/results" element={"Results"} />
              </Routes>
            </h1>
          </div>
        </div>
        <hr className="border-primary" />
      </div>
      <Routes>
        <Route exact path="/" element={<Navigate to="/dashboard" replace />} />
        <Route
          exact
          path="/dashboard"
          element={
            <Dashboard
              isStudent={isStudent}
              isClass={isClass}
              isSubject={isSubject}
              showMobile={showMobile}
            />
          }
        />
        <Route
          exact
          path="/classes"
          element={
            <Classes isClass={isClass} getClassDetails={getClassDetails} />
          }
        />
        <Route exact path="/subjects" element={<Subjects />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
      <ManageAccountModel show={show} setShow={setShow} />
    </div>
  );
}

export default Index;
