import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Header from "../components/Header";
import Classes from "./Classes";
import Subjects from "./Subjects";
import ManageAccountModel from "../components/modals/ManageAccountModel";
import axios from "axios";
import StudentList from "./StudentList";
import AddStudent from "./AddStudent";
import { ToastContainer } from "react-toastify";
import Results from "./Results";
import AddResult from "./AddResult";
import Login from "./Login";

function Index() {
  const [show, setShow] = useState(false);
  const [showMobile, setShowMobile] = useState(false);
  const [isClass, setIsClass] = useState([]);
  const [isStudent, setIsStudent] = useState([]);
  const [allStudentResult, setAllStudentResult] = useState([]);
  const [isSubject, setIsSubject] = useState([]);
  const [isResult, setIsResult] = useState([]);
  const handleShow = () => setShow(true);

  const [showList, setShowList] = useState({});
  const [resultList, setResultList] = useState("");

  const param = new URLSearchParams(window.location.search);
  const active = param.get("loginId");

  const navigate = useNavigate();

  const [updateStudentId, setUpdateStudentId] = useState({
    id: "",
    studentCode: "",
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    course: "",
    address: "",
    class_id: "",
  });

  const handleUpdateStudent = (
    s_id,
    s_code,
    fname,
    mname,
    lname,
    gen,
    cour,
    addr,
    clsId
  ) => {
    setUpdateStudentId({
      id: s_id,
      studentCode: s_code,
      firstName: fname,
      middleName: mname,
      lastName: lname,
      gender: gen,
      course: cour,
      address: addr,
      class_id: clsId,
    });
  };

  useEffect(() => {
    getClassDetails();
    getStudentData();
    getSubjectData();
    getResultData();
    getAllStudentResultList();
    if (window) {
      if (window.matchMedia("(max-width: 768px)").matches) {
        setShowMobile(true);
      } else {
        setShowMobile(false);
      }
    }
  }, [window]);

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
    axios.get(`http://localhost:5000/subject/getSubject`).then((response) => {
      setIsSubject(response.data.data);
    });
  };

  const getResultData = () => {
    axios.get(`http://localhost:5000/result/getAllResults`).then((response) => {
      setIsResult(response.data.data);
    });
  };

  const getAllStudentResultList = () => {
    axios
      .get(`http://localhost:5000/result/getAllStudentList`)
      .then((response) => {
        setAllStudentResult(response.data.data);
      });
  };

  const getResultItem = (resultID) => {
    try {
      axios
        .get(`http://localhost:5000/result/getResultItemsById?id=${resultID}`)
        .then((res) => {
          setShowList(res.data.data[0]);
          navigate("/new_result");
        });
      axios
        .get(`http://localhost:5000/result/getResultItems?id=${resultID}`)
        .then((res) => {
          console.log(res.data.data);
          setResultList(res.data.data);
        });
    } catch (err) {}
  };

  return (
    <div>
      {active === "active" ? (
        <Routes>
          <Route exact path="/login" element={<Login />} />
        </Routes>
      ) : (
        <div>
          <Header handleShow={handleShow} showMobile={showMobile} />
          <div className="container-fluid" style={{ marginTop: "100px" }}>
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">
                  <Routes>
                    <Route exact path="/dashboard" element={"Home"} />
                    <Route exact path="/classes" element={"Classes"} />
                    <Route exact path="/subjects" element={"Subjects"} />
                    <Route exact path="/studentList" element={"Student List"} />
                    <Route exact path="/add_new" element={"New Student"} />
                    <Route exact path="/results" element={"Results"} />
                    <Route exact path="/new_result" element={"New Result"} />
                  </Routes>
                </h1>
              </div>
            </div>
            <hr className="border-primary" />
          </div>
          <Routes>
            <Route
              exact
              path="/"
              element={<Navigate to="/login?loginId=active" replace />}
            />
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
            <Route
              exact
              path="/subjects"
              element={
                <Subjects
                  isSubject={isSubject}
                  getSubjectData={getSubjectData}
                />
              }
            />
            <Route
              exact
              path="/studentList"
              element={
                <StudentList
                  isStudent={isStudent}
                  isClass={isClass}
                  handleUpdateStudent={handleUpdateStudent}
                  getStudentData={getStudentData}
                />
              }
            />
            <Route
              exact
              path="/add_new"
              element={
                <AddStudent
                  isClass={isClass}
                  getStudentData={getStudentData}
                  updateStudentId={updateStudentId}
                />
              }
            />
            <Route
              exact
              path="/results"
              element={
                <Results
                  isResult={isResult}
                  setShowList={setShowList}
                  setResultList={setResultList}
                  getResultItem={getResultItem}
                />
              }
            />

            <Route
              exact
              path="/new_result"
              element={
                <AddResult
                  showList={showList}
                  isSubject={isSubject}
                  getResultData={getResultData}
                  allStudentResult={allStudentResult}
                  resultList={resultList}
                />
              }
            />
          </Routes>
          <ManageAccountModel show={show} setShow={setShow} />
          <ToastContainer
            autoClose={4000}
            position="top-center"
            theme="colored"
          />
        </div>
      )}
    </div>
  );
}

export default Index;
