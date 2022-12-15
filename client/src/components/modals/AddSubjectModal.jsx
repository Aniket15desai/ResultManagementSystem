import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

const AddSubjectModal = (props) => {
  const [addNewSubject, setAddNewSubject] = useState({
    subject_code: "",
    subject: "",
    description: "",
    dateCreated: new Date(),
  });
  const handleCloseAdd = () => {
    props.setShowAdd(false);
    props.setUpdateId({ id: "", sbj_code: "", sbj: "", desc: "" });
  };
  const handleCloseDelete = () => {
    props.setShowDelete(false);
  };

  const sbj_code = (e) => {
    setAddNewSubject({
      ...addNewSubject,
      subject_code: e.target.value,
    });
  };

  const sbj = (e) => {
    setAddNewSubject({
      ...addNewSubject,
      subject: e.target.value,
    });
  };

  const sbj_desc = (e) => {
    setAddNewSubject({
      ...addNewSubject,
      description: e.target.value,
    });
  };

  // ADD Operation
  const addSubject = () => {
    if (addNewSubject.subject_code !== "" && addNewSubject.subject !== "") {
      const custToast = toast.loading("Adding New Subject...");

      axios
        .post(`http://localhost:5000/subject/addSubject`, addNewSubject)
        .then((res) => {
          handleCloseAdd();
          setTimeout(() => {
            toast.update(custToast, {
              render: "Subject added successfully.",
              type: "success",
              isLoading: false,
              autoClose: 3000,
            });
            props.getSubjectData();
          }, 3000);
        })
        .catch((err) => {
          toast.update(custToast, {
            render: "Something went wrong.",
            type: "error",
            isLoading: false,
            autoClose: 3000,
          });
        });
    }
  };

  // DELETE Operation
  const deleteSubject = () => {
    if (props.deleteId !== "") {
      const obj = {
        id: props.deleteId,
      };

      const custToast = toast.loading("Deleting Subject...");

      axios
        .post(`http://localhost:5000/subject/deleteSubject`, obj)
        .then((res) => {
          handleCloseDelete();
          setTimeout(() => {
            toast.update(custToast, {
              render: "Subject deleted successfully.",
              type: "success",
              isLoading: false,
              autoClose: 3000,
            });
            props.getSubjectData();
          }, 3000);
        })
        .catch((err) => {
          toast.update(custToast, {
            render: "Something went wrong.",
            type: "error",
            isLoading: false,
            autoClose: 3000,
          });
        });
    }
  };

  // UPDATE Operation

  const updateSubject = () => {
    var sbjC =
      document.getElementById("subject_code").value !== ""
        ? document.getElementById("subject_code").value
        : document.getElementById("subject_code").defaultValue;
    var sbjN =
      document.getElementById("subject").value !== ""
        ? document.getElementById("subject").value
        : document.getElementById("subject").defaultValue;
    var desc =
      document.getElementById("description").value !== ""
        ? document.getElementById("description").value
        : document.getElementById("description").defaultValue;
    if (sbjC !== "" && sbjN !== "" && desc !== "") {
      const obj = {
        subject_code: sbjC,
        subject: sbjN,
        description: desc,
        id: props.updateId.id,
      };

      const custToast = toast.loading("Updating Subject", {
        position: toast.POSITION.TOP_CENTER,
      });

      axios
        .post(`http://localhost:5000/subject/updateSubject`, obj)
        .then((res) => {
          setTimeout(() => {
            toast.update(custToast, {
              render: "Subject Updated Successfully",
              type: "success",
              isLoading: false,
              autoClose: 3000,
            });
            props.getSubjectData();
          }, 3000);
        })
        .catch((err) => {
          toast.update(custToast, {
            render: "Something went wrong.",
            type: "error",
            isLoading: false,
            autoClose: 3000,
          });
        });
    }
  };

  return (
    <>
      {props.showAdd === true && (
        <Modal show={props.showAdd} onHide={handleCloseAdd}>
          <Modal.Header closeButton>
            <Modal.Title>
              {props.updateId.sbj_code !== ""
                ? "Update Subject"
                : "New Subject"}
            </Modal.Title>
          </Modal.Header>
          <form id="manage-subject" className="pe-4">
            <Modal.Body>
              <input type="hidden" name="id" />
              <div className="form-group">
                <label for="subject_code">Subject Code</label>
                <input
                  type="text"
                  name="subject_code"
                  id="subject_code"
                  className="form-control"
                  autoComplete="off"
                  onChange={sbj_code}
                  defaultValue={props.updateId.sbj_code}
                />
              </div>
              <div className="form-group">
                <label for="subject">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="form-control"
                  autoComplete="off"
                  onChange={sbj}
                  defaultValue={props.updateId.sbj}
                />
              </div>
              <div className="form-group">
                <label for="description">Description</label>
                <textarea
                  type="text"
                  name="description"
                  id="description"
                  className="form-control"
                  autoComplete="off"
                  onChange={sbj_desc}
                  defaultValue={props.updateId.desc}
                />
              </div>
            </Modal.Body>
            <Modal.Footer>
              {props.updateId.id !== "" ? (
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Update"
                  onClick={(e) => {
                    e.preventDefault();
                    updateSubject();
                    handleCloseAdd();
                  }}
                />
              ) : (
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Save"
                  onClick={(e) => {
                    e.preventDefault();
                    addSubject();
                    handleCloseAdd();
                  }}
                />
              )}
              <Button variant="secondary" onClick={handleCloseAdd}>
                Cancel
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
      )}
      {props.showDelete === true && (
        <Modal show={props.showDelete} onHide={handleCloseDelete}>
          <Modal.Header closeButton>
            <Modal.Title>Confirmation</Modal.Title>
          </Modal.Header>
          <form id="manage-user">
            <Modal.Body>
              <div className="p-1">Are you sure to delete this subject?</div>
            </Modal.Body>
            <Modal.Footer>
              <input
                type="submit"
                className="btn btn-primary"
                value="Delete"
                onClick={(e) => {
                  e.preventDefault();
                  deleteSubject();
                  handleCloseDelete();
                }}
              />
              <Button variant="secondary" onClick={handleCloseDelete}>
                Close
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
      )}
    </>
  );
};

export default AddSubjectModal;
