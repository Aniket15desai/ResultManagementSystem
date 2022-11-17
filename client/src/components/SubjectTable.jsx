import React from "react";

const SubjectTable = (props) => {
  let i = 0;
  return (
    <div className="col-lg-12 px-4">
      <div class="card card-outline card-primary">
        <div class="card-header">
          <div class="card-tools">
            <button
              class="btn btn-block btn-sm btn-default btn-flat border-primary new_class"
              onClick={props.handleShowAdd}
            >
              <i class="fa fa-plus"></i> Add New
            </button>
          </div>
        </div>
        <div className="card-body">
          <table class="table tabe-hover table-bordered" id="list">
            <colgroup>
              <col width="10%" />
              <col width="20%" />
              <col width="20%" />
              <col width="30%" />
              <col width="20%" />
            </colgroup>
            <thead>
              <tr>
                <th class="text-center">#</th>
                <th>Code</th>
                <th>Subjects</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {props.isSubject &&
                props.isSubject.map((item, key) => {
                  i += 1;
                  return (
                    <tr key={item.id}>
                      <th class="text-center">{i}</th>
                      <td>{item.subject_code}</td>
                      <td>{item.subject}</td>
                      <td>{item.description}</td>
                      <td class="text-center">
                        <div class="btn-group">
                          <button
                            class="btn btn-primary btn-flat manage_class"
                            onClick={() => {
                              props.getUpdateSubjectId(
                                item.id,
                                item.subject_code,
                                item.subject,
                                item.description
                              );
                            }}
                          >
                            <i class="fas fa-edit"></i>
                          </button>
                          <button
                            type="button"
                            class="btn btn-danger btn-flat delete_class"
                            data-id=""
                            onClick={() => {
                              props.getDeleteSubjectID(item.id);
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
    </div>
  );
};

export default SubjectTable;
