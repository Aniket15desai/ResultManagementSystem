import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ViewResult from "./modals/ViewResult";

const ResultTable = (props) => {
  let i = 0;

  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [getViewResult, setGetViewResult] = useState([]);
  const [getViewStudentResult, setGetViewStudendResult] = useState([]);

  const viewResults = (resultID) => {
    try {
      axios
        .get(`http://localhost:5000/result/viewResultById?id=${resultID}`)
        .then((res) => {
          setGetViewResult(res.data.data);
          viewStudentResults(resultID);
          console.log(res.data.data);
        });
    } catch (err) {}
  };

  const viewStudentResults = (resultID) => {
    try {
      axios
        .get(
          `http://localhost:5000/result/viewStudentResultById?id=${resultID}`
        )
        .then((res) => {
          setGetViewStudendResult(res.data.data[0]);
          console.log(res.data.data[0]);
        });
    } catch (err) {}
  };

  return (
    <div class="col-lg-12 px-4">
      <div class="card card-outline card-primary">
        <div class="card-header">
          <div class="card-tools">
            <a
              class="btn btn-block btn-sm btn-default btn-flat border-primary"
              href="./new_result"
            >
              <i class="fa fa-plus"></i> Add New
            </a>
          </div>
        </div>
        <div class="card-body">
          <table class="table tabe-hover table-bordered" id="list">
            <colgroup>
              <col width="5%" />
              <col width="15%" />
              <col width="25%" />
              <col width="20%" />
              <col width="10%" />
              <col width="15%" />
            </colgroup>
            <thead>
              <tr>
                <th class="text-center">#</th>
                <th>Student Code</th>
                <th>Student Name</th>
                <th>Class</th>
                <th>Subjects</th>
                <th>Average</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {props.isResult &&
                props.isResult.map((item) => {
                  return (
                    <tr key={item.id}>
                      <th class="text-center">{(i += 1)}</th>
                      <td>{item.student_code}</td>
                      <td>{item.name}</td>
                      <td>{item.class}</td>
                      <td>{item.subjects}</td>
                      <td>{item.marks_percentage}</td>
                      <td class="text-center">
                        <div class="btn-group">
                          <button
                            class="btn btn-primary btn-flat"
                            onClick={(e) => {
                              e.preventDefault();
                              props.getResultItem(item.id);
                            }}
                          >
                            <i class="fas fa-edit"></i>
                          </button>
                          <button
                            data-id=""
                            type="button"
                            class="btn btn-info btn-flat view_result"
                            onClick={() => {
                              viewResults(item.id);
                              setShow(true);
                            }}
                          >
                            <i class="fas fa-eye"></i>
                          </button>
                          <button
                            type="button"
                            class="btn btn-danger btn-flat delete_result"
                            data-id=""
                          >
                            <i class="fas fa-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      <ViewResult
        show={show}
        setShow={setShow}
        getViewResult={getViewResult}
        getViewStudentResult={getViewStudentResult}
      />
    </div>
  );
};

export default ResultTable;
