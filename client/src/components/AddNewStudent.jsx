import React from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddNewStudent = (props) => {
  const navigate = useNavigate();
  const [addNewStudent, setAddNewStudent] = useState({
    studentCode: "",
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    course: "",
    address: "",
    class_id: "",
    dateCreated: new Date(),
  });

  const std_code = (e) => {
    setAddNewStudent({
      ...addNewStudent,
      studentCode: e.target.value,
    });
  };

  const fname = (e) => {
    setAddNewStudent({
      ...addNewStudent,
      firstName: e.target.value,
    });
  };

  const mname = (e) => {
    setAddNewStudent({
      ...addNewStudent,
      middleName: e.target.value,
    });
  };

  const lname = (e) => {
    setAddNewStudent({
      ...addNewStudent,
      lastName: e.target.value,
    });
  };

  const gen = (e) => {
    setAddNewStudent({
      ...addNewStudent,
      gender: e.target.value,
    });
  };

  const course = (e) => {
    setAddNewStudent({
      ...addNewStudent,
      course: e.target.value,
    });
  };

  const addr = (e) => {
    setAddNewStudent({
      ...addNewStudent,
      address: e.target.value,
    });
  };

  const classId = (e) => {
    setAddNewStudent({
      ...addNewStudent,
      class_id: e.target.value,
    });
  };

  // Add Operation

  const addStudent = () => {
    console.log("Clicked");
    if (
      addNewStudent.studentCode !== "" &&
      addNewStudent.firstName !== "" &&
      addNewStudent.lastName !== "" &&
      addNewStudent.gender !== "" &&
      addNewStudent.course !== "" &&
      addNewStudent.address !== "" &&
      addNewStudent.class_id !== ""
    ) {
      const custToast = toast.loading("Adding New Student...");
      axios
        .post(`http://localhost:5000/student/addStudent`, addNewStudent)
        .then((res) => {
          setTimeout(() => {
            toast.update(custToast, {
              render: "Student added successfully.",
              type: "success",
              autoClose: 3000,
              isLoading: false,
            });
            props.getStudentData();
            navigate("/studentList");
          }, 5000);
        })
        .catch((err) => {
          toast.error("Something went wrong.", {
            position: toast.POSITION.TOP_CENTER,
          });
        });
    } else {
      console.log("Data not entered");
    }
  };

  // Update Operation

  const updateStudent = () => {
    const s_code =
      document.getElementById("student_code").value !== ""
        ? document.getElementById("student_code").value
        : document.getElementById("student_code").defaultValue;
    const fname =
      document.getElementById("firstname").value !== ""
        ? document.getElementById("firstname").value
        : document.getElementById("firstname").defaultValue;
    const mname =
      document.getElementById("middlename").value !== ""
        ? document.getElementById("middlename").value
        : document.getElementById("middlename").defaultValue;
    const lname =
      document.getElementById("lastname").value !== ""
        ? document.getElementById("lastname").value
        : document.getElementById("lastname").defaultValue;
    const gen =
      document.getElementById("gender").value !== ""
        ? document.getElementById("gender").value
        : document.getElementById("gender").defaultValue;
    const cour =
      document.getElementById("course").value !== ""
        ? document.getElementById("course").value
        : document.getElementById("course").defaultValue;
    const addr =
      document.getElementById("address").value !== ""
        ? document.getElementById("address").value
        : document.getElementById("address").defaultValue;
    const cls_id =
      document.getElementById("class_id").value !== ""
        ? document.getElementById("class_id").value
        : document.getElementById("class_id").defaultValue;

    if (
      props.updateStudentId.id !== "" ||
      s_code !== "" ||
      fname !== "" ||
      lname !== "" ||
      gen !== "" ||
      cour !== "" ||
      addr !== "" ||
      cls_id !== ""
    ) {
      const custToast = toast.loading("Updating Student...");
      axios
        .post(`http://localhost:5000/student/updateStudent`, {
          studentCode: s_code,
          firstName: fname,
          middleName: mname,
          lastName: lname,
          gender: gen,
          course: cour,
          address: addr,
          class_id: cls_id,
          id: props.updateStudentId.id,
        })
        .then((res) => {
          setTimeout(() => {
            toast.update(custToast, {
              render: "Student Updated successfully.",
              type: "success",
              autoClose: 3000,
              isLoading: false,
            });
            props.getStudentData();
            navigate("/studentList");
          }, 5000);
        })
        .catch((err) => {
          toast.error("Something went wrong.", {
            position: toast.POSITION.TOP_CENTER,
          });
        });
    } else {
      console.log("Data not entered");
    }
  };

  return (
    <div className="col-lg-12 p-5">
      <div className="card card-outline card-primary p-4">
        <form action="" id="manage-student">
          <div className="card-body">
            <input type="hidden" name="id" />
            <div className="row">
              <div className="col-md-6">
                <div id="msg" className=""></div>
                <div className="form-group text-dark">
                  <div className="form-group">
                    <label for="" className="control-label">
                      Student ID #
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="student_code"
                      id="student_code"
                      onChange={std_code}
                      required
                      defaultValue={props.updateStudentId.studentCode}
                    />
                  </div>
                </div>
                <div className="form-group text-dark">
                  <div className="form-group">
                    <label for="" className="control-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="firstname"
                      id="firstname"
                      onChange={fname}
                      required
                      defaultValue={props.updateStudentId.firstName}
                    />
                  </div>
                </div>
                <div className="form-group text-dark">
                  <div className="form-group">
                    <label for="" className="control-label">
                      Middle Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="middlename"
                      id="middlename"
                      onChange={mname}
                      defaultValue={props.updateStudentId.middleName}
                    />
                  </div>
                </div>
                <div className="form-group text-dark">
                  <div className="form-group">
                    <label for="" className="control-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="lastname"
                      id="lastname"
                      onChange={lname}
                      required
                      defaultValue={props.updateStudentId.lastName}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label for="" className="control-label">
                    Gender
                  </label>
                  <select
                    name="gender"
                    id="gender"
                    className="form-control"
                    onChange={gen}
                    required
                    defaultValue={props.updateStudentId.gender}
                  >
                    <option value="" selected="true" disabled="disabled">
                      Select Gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div className="form-group text-dark">
                  <div className="form-group">
                    <label for="" className="control-label">
                      Course
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="course"
                      id="course"
                      onChange={course}
                      required
                      defaultValue={props.updateStudentId.course}
                    />
                  </div>
                </div>
                <div className="form-group text-dark">
                  <div className="form-group">
                    <label for="" className="control-label">
                      Address
                    </label>
                    <textarea
                      name="address"
                      id="address"
                      cols="30"
                      rows="1"
                      onChange={addr}
                      className="form-control"
                      defaultValue={props.updateStudentId.address}
                    />
                  </div>
                </div>
                <div className="form-group text-dark">
                  <div className="form-group">
                    <label for="" className="control-label">
                      Year / Semester
                    </label>
                    <select
                      name="class_id"
                      id="class_id"
                      className="form-control"
                      onChange={classId}
                      required
                      defaultValue={props.updateStudentId.class_id}
                    >
                      <option selected="true" disabled="disabled">
                        Select Year / Semester
                      </option>
                      {props.isClass &&
                        props.isClass.map((item) => {
                          return (
                            <option
                              value={item.id}
                            >{`${item.year} / ${item.semester}`}</option>
                          );
                        })}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer border-top border-info pt-4">
            <div className="d-flex w-100 justify-content-center align-items-center">
              {props.updateStudentId.studentCode !== "" ? (
                <input
                  type="submit"
                  value="Update"
                  className="btn btn-primary mx-2"
                  onClick={(e) => {
                    e.preventDefault();
                    updateStudent();
                  }}
                />
              ) : (
                <input
                  type="submit"
                  value="Save"
                  className="btn btn-primary mx-2"
                  onClick={(e) => {
                    e.preventDefault();
                    addStudent();
                  }}
                />
              )}
              <Button
                variant="secondary"
                onClick={() => {
                  navigate("/studentList");
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewStudent;
