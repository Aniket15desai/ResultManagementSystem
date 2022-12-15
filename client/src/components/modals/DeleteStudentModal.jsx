import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { toast } from "react-toastify";

const DeleteStudentModal = (props) => {
  const handleCloseDelete = () => {
    props.setShowDelete(false);
    props.setDeleteId({
      sid: "",
    });
  };

  const deleteDetails = () => {
    const custToast = toast.loading("Deleting Student");
    axios
      .post(`http://localhost:5000/student/deleteStudent`, {
        id: props.deleteId.sid,
      })
      .then((res) => {
        handleCloseDelete();
        setTimeout(() => {
          toast.update(custToast, {
            render: "Student Deleted successfully.",
            type: "success",
            isLoading: false,
            autoClose: 3000,
          });
          props.getStudentData();
        }, 3000);
      })
      .catch((err) => {
        toast.error("Something went wrong.", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  return (
    <Modal show={props.showDelete} onHide={handleCloseDelete}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmation</Modal.Title>
      </Modal.Header>
      <form id="manage-user">
        <Modal.Body>
          <div className="p-1">Are you sure to delete this Student?</div>
        </Modal.Body>
        <Modal.Footer>
          <input
            type="submit"
            className="btn btn-primary"
            value="Continue"
            onClick={(e) => {
              e.preventDefault();
              deleteDetails();
              handleCloseDelete;
            }}
          />
          <Button variant="secondary" onClick={handleCloseDelete}>
            Close
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default DeleteStudentModal;
