import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddNewResult = (props) => {
  const navigate = useNavigate();
  const [allStudent, setAllStudent] = useState([]);
  const [classes, setClasses] = useState("");
  const [subject, setSubject] = useState("");
  const [getMark, setGetMark] = useState("");
  const [newSubject, setNewSubject] = useState([]);
  const reducer = (accumulator, currentValue) => {
    return accumulator + currentValue;
  };

  let newResultId = "";

  useEffect(() => {
    getAllStudentList();
  }, []);

  const getAllStudentList = () => {
    axios
      .get(`http://localhost:5000/result/getAllStudentList`)
      .then((response) => {
        setAllStudent(response.data.data);
      });
  };

  const onSelectHandle = (e) => {
    setClasses(e.target.value);
  };

  const getSubject = (e) => {
    setSubject(e.target.value);
  };

  const onChangeMark = (e) => {
    setGetMark(e.target.value);
  };

  const addSubject = () => {
    setNewSubject((newSubject) => [
      ...newSubject,
      {
        subjectCode: subject.slice(2, 8),
        subjectId: subject.slice(0, 2),
        sbj: subject.slice(8),
        mark: getMark,
        dateCreated: new Date(),
      },
    ]);
  };

  useEffect(() => {
    if (props.resultList !== "") {
      props.resultList &&
        props.resultList.map((item) => {
          setNewSubject((newSubject) => [
            ...newSubject.filter((x) => x.subjectCode !== item.subject_code),
            {
              subjectCode: item.subject_code,
              subjectId: item.subject_id,
              sbj: item.subject,
              mark: item.mark,
              dateCreated: new Date(),
            },
          ]);
        });
    }
  }, []);

  const removeSubject = (value) => {
    setNewSubject((newSubject) =>
      newSubject.filter((item) => item.subjectId !== value)
    );
  };

  const marks = newSubject.map((item) => {
    return parseInt(item.mark);
  });
  const add_marks = marks.reduce(reducer, 0);
  const avg_marks = add_marks / newSubject.length;

  const onSaveResult = () => {
    const obj = {
      studentId: classes.slice(0, 2),
      classId: classes.slice(3, 6),
      marksPercentage: avg_marks,
      dateCreated: new Date(),
    };
    try {
      axios.post("http://localhost:5000/result/addResult", obj).then((res) => {
        newResultId = res.data.data.insertId;
        onSaveResultItems();
      });
    } catch {
      (err) => {
        console.log(err);
      };
    }
  };

  const onSaveResultItems = () => {
    console.log(newSubject);
    const custToast = toast.loading("Adding New Result...");
    try {
      axios
        .post("http://localhost:5000/result/addResultItem", {
          newSubject,
          newResultId,
        })
        .then((res) => {
          props.getResultData();
          setTimeout(() => {
            toast.update(custToast, {
              render: "Result added successfully.",
              type: "success",
              autoClose: 3000,
              isLoading: false,
            });
            navigate("/results");
          }, 4000);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="col-lg-12 px-4">
      <div className="card card-outline card-primary">
        <div className="card-body">
          <form action="" id="manage-result">
            <input type="hidden" name="id" value="" />
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div id="msg" className=""></div>
                <div className="form-group">
                  <label for="" className="control-label">
                    Student
                  </label>
                  <select
                    name="student_id"
                    id="student_id"
                    className="form-control select2 select2-sm"
                    onChange={onSelectHandle}
                    required
                  >
                    <option selected disabled>
                      Select Student
                    </option>
                    {allStudent &&
                      allStudent.map((item) => {
                        return (
                          <option
                            value={`${item.id} ${` `} ${item.class_id} ${` `} ${
                              item.class
                            }`}
                            data-class_id={item.class_id}
                            data-class={item.class}
                            selected={
                              props.showList.id !== ""
                                ? props.showList.student_id === item.id
                                  ? true
                                  : false
                                : document
                                    .getElementById("student_id")
                                    .value.slice(0, 2) === item.id
                                ? true
                                : false
                            }
                          >
                            {item.student_code} | {item.name}
                          </option>
                        );
                      })}
                  </select>
                  <small id="class">
                    Current class:{" "}
                    {props.showList.class !== ""
                      ? props.showList.class
                      : classes.slice(6)}
                  </small>
                  <input type="hidden" name="class_id" value="" />
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-12">
                <div className="d-flex justify-content-center align-items-center">
                  <div className="d-flex row form-group col-sm-4 me-4">
                    <label for="" className="control-label">
                      Subject
                    </label>
                    <select
                      name=""
                      id="subject_id"
                      className="form-control select2 select2-sm input-sm"
                      onChange={getSubject}
                    >
                      <option value="" selected disabled>
                        Select Subject
                      </option>
                      {props.isSubject &&
                        props.isSubject.map((item) => {
                          return (
                            <option
                              value={`${item.id} ${item.subject_code} ${item.subject}`}
                            >
                              {item.subject_code} | {item.subject}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                  <div className="form-group col-sm-3">
                    <label for="" className="control-label">
                      Mark
                    </label>
                    <input
                      type="text"
                      className="form-control text-right number"
                      id="mark"
                      maxlength="6"
                      onChange={onChangeMark}
                    />
                  </div>
                  <button
                    className="d-flex btn btn-sm btn-primary bg-gradient-primary mt-4 ms-3"
                    type="button"
                    onClick={() => {
                      addSubject();
                      document.getElementById("mark").value = "";
                      document.getElementById("subject_id").value = "";
                    }}
                    id="add_mark"
                  >
                    Add
                  </button>
                </div>
              </div>
              <hr />
              <div className="col-md-8 offset-md-2">
                <table className="table table-bordered" id="mark-list">
                  <thead>
                    <tr>
                      <th>Subject Code</th>
                      <th>Subject</th>
                      <th>Mark</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {newSubject &&
                      newSubject.map((item) => {
                        return (
                          <tr data-id={item.subjectId}>
                            <td>
                              <input
                                type="hidden"
                                name="subject_id[]"
                                value=""
                              />
                              {item.subjectCode}
                            </td>
                            <td>{item.sbj}</td>
                            <td>
                              <input type="hidden" name="mark[]" value="" />
                              {item.mark}
                            </td>
                            <td className="text-center">
                              <button
                                className="btn btn-sm btn-danger"
                                type="button"
                                onClick={() => {
                                  removeSubject(item.subjectId);
                                }}
                              >
                                <i className="fa fa-times"></i>
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th colspan="2">Average</th>
                      <th id="average" className="text-center">
                        {String(avg_marks).slice(0, 5)}
                      </th>
                      <th></th>
                    </tr>
                  </tfoot>
                </table>
                <input type="hidden" name="marks_percentage" value="" />
              </div>
            </div>
          </form>
        </div>
        <div className="card-footer border-top border-info">
          <div className="d-flex w-100 justify-content-center align-items-center">
            {props.resultList === "" ? (
              <button
                className="btn btn-primary btn-flat bg-gradient-primary mx-2"
                form="manage-result"
                onClick={(e) => {
                  e.preventDefault();
                  onSaveResult();
                }}
              >
                Save
              </button>
            ) : (
              <button
                className="btn btn-primary btn-flat bg-gradient-primary mx-2"
                form="manage-result"
              >
                Update
              </button>
            )}
            <button
              className="btn btn-flat btn-secondary mx-2"
              onClick={() => {
                navigate("/results");
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewResult;
