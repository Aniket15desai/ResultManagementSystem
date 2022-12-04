import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteStudentModal from "./DeleteStudentModal";

const StudentLists = (props) => {
  const [showDelete, setShowDelete] = useState(false);
  const [deleteId, setDeleteId] = useState({
    sid: "",
  });
  const navigate = useNavigate();
  let i = 0;

  const deleteStudent = (id) => {
    setShowDelete(true);
    setDeleteId({
      sid: id,
    });
  };

  return (
    <div className="col-lg-12 px-4 mb-4">
      <div class="card card-outline card-primary">
        <div class="card-header">
          <div class="card-tools">
            <a
              class="btn btn-block btn-sm btn-default btn-flat border-primary new_class"
              // onClick={props.handleShowAdd}
              href="/add_new"
            >
              <i class="fa fa-plus"></i> Add New
            </a>
          </div>
        </div>
        <div className="card-body">
          <table class="table tabe-hover table-bordered" id="list">
            <colgroup>
              <col width="5%" />
              <col width="15%" />
              <col width="20%" />
              <col width="20%" />
              <col width="20%" />
              <col width="20%" />
            </colgroup>
            <thead>
              <tr>
                <th class="text-center">#</th>
                <th>Student ID</th>
                <th>Name</th>
                <th>Course</th>
                <th>
                  <center>Year / Sem</center>
                </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {props.isStudent &&
                props.isStudent.map((item, key) => {
                  return (
                    <tr key={item.id}>
                      <th class="text-center">{(i += 1)}</th>
                      <td>{item.student_code}</td>
                      <td>{item.name}</td>
                      <td>{item.course}</td>
                      <td>
                        <center>{item.class}</center>
                      </td>
                      <td class="text-center">
                        <div class="btn-group">
                          <button
                            class="btn btn-primary btn-flat manage_class"
                            onClick={() => {
                              props.handleUpdateStudent(
                                item.id,
                                item.student_code,
                                item.firstname,
                                item.middlename,
                                item.lastname,
                                item.gender,
                                item.course,
                                item.address,
                                item.class_id
                              );
                              navigate("/add_new");
                            }}
                          >
                            <i class="fas fa-edit"></i>
                          </button>
                          <button
                            type="button"
                            class="btn btn-danger btn-flat delete_class"
                            data-id=""
                            onClick={() => {
                              deleteStudent(item.id);
                            }}
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
      <DeleteStudentModal
        deleteId={deleteId}
        setShowDelete={setShowDelete}
        showDelete={showDelete}
        setDeleteId={setDeleteId}
        getStudentData={props.getStudentData}
      />
    </div>
  );
};

export default StudentLists;
