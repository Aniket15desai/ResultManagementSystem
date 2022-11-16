import React from "react";

const DashboardCards = (props) => {
  return (
    <div>
      <div
        className={`${
          props.showMobile
            ? "row mx-0 justify-content-center"
            : "justify-content-between"
        } d-flex w-100 align-items-center`}
      >
        <div className={`${props.showMobile ? "col-11 my-2 mx-0" : "col-3"}`}>
          <div className="card">
            <div className="d-flex card-body align-items-center">
              <span className="info-box-icon bg-info elevation-1 rounded-2 me-2">
                <i
                  class="fas fa-user fa-2x p-2"
                  style={{ color: "white" }}
                  aria-hidden="true"
                ></i>
              </span>
              <span className="d-flex row">
                <span className="card-text">Total Students</span>
                <span className="card-number fw-bold">
                  {props.isStudent.length}
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className={`${props.showMobile ? "col-11 my-2 mx-0" : "col-3"}`}>
          <div className="card">
            <div className="d-flex card-body align-items-center">
              <span className="info-box-icon bg-primary elevation-1 rounded-2 me-2">
                <i
                  class="fas fa-th-list fa-2x p-2"
                  style={{ color: "white" }}
                  aria-hidden="true"
                ></i>
              </span>
              <span className="d-flex row">
                <span className="card-text">Total Class</span>
                <span className="card-number fw-bold">
                  {props.isClass.length}
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className={`${props.showMobile ? "col-11 my-2 mx-0" : "col-3"}`}>
          <div className="card">
            <div className="d-flex card-body align-items-center">
              <span className="info-box-icon bg-primary elevation-1 rounded-2 me-2">
                <i
                  class="fas fa-book fa-2x p-2"
                  style={{ color: "white" }}
                  aria-hidden="true"
                ></i>
              </span>
              <span className="d-flex row">
                <span className="card-text">Total Subjects</span>
                <span className="card-number fw-bold">
                  {props.isSubject.length}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
