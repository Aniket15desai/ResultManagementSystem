import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ViewResult = (props) => {
  const handleClose = () => props.setShow(false);

  const printFunction = () => {
    window.print();
  };

  return (
    <div>
      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Result</Modal.Title>
        </Modal.Header>
        <div class="container-fluid" id="printable">
          <Modal.Body>
            <table width="100%">
              <tr>
                <td width="50%">
                  Student ID #: <b>{props.getViewStudentResult.student_code}</b>
                </td>
                <td width="50%">
                  Class: <b>{props.getViewStudentResult.class}</b>
                </td>
              </tr>
              <tr>
                <td width="50%">
                  Student Name: <b>{props.getViewStudentResult.name}</b>
                </td>
                <td width="50%">
                  Gender: <b>{props.getViewStudentResult.gender}</b>
                </td>
              </tr>
            </table>
            <hr />
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>Subject Code</th>
                  <th>Subject</th>
                  <th>Mark</th>
                </tr>
              </thead>
              <tbody>
                {props.getViewResult &&
                  props.getViewResult.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.subject_code}</td>
                        <td>{item.subject}</td>
                        <td class="text-center">{item.mark}</td>
                      </tr>
                    );
                  })}
              </tbody>
              <tfoot>
                <tr>
                  <th colspan="2">Average</th>
                  <th class="text-center">
                    {props.getViewStudentResult.marks_percentage}
                  </th>
                </tr>
              </tfoot>
            </table>
          </Modal.Body>
        </div>
        <Modal.Footer>
          <button
            type="button"
            class="btn btn-success"
            id="print"
            onClick={() => {
              printFunction();
            }}
          >
            <i class="fa fa-print"></i> Print
          </button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ViewResult;
