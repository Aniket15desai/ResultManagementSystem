import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const AddSubjectModal = (props) => {
  const handleCloseAdd = () => {
    props.setShowAdd(false);
    props.setUpdateId({ id: "", sbj_code: "", sbj: "", desc: "" });
  };
  const handleCloseDelete = () => {
    props.setShowDelete(false);
  };

  // ADD Operation
  const addSubject = () => {
    var sbj_code = document.getElementById("subject_code").value;
    var sbj = document.getElementById("subject").value;
    var desc = document.getElementById("description").value;

    if (sbj_code !== "" && sbj !== "") {
      const obj = {
        subject_code: sbj_code,
        subject: sbj,
        description: desc,
        dateCreated: new Date(),
      };

      axios
        .post(`http://localhost:5000/subject/addSubject`, obj)
        .then((res) => {
          handleCloseAdd();
          setTimeout(() => {
            toast.success("Subject added successfully.", {
              position: toast.POSITION.TOP_CENTER,
            });
            props.getSubjectData();
          }, 5000);
        })
        .catch((err) => {
          toast.error("Something went wrong.", {
            position: toast.POSITION.TOP_CENTER,
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

      axios
        .post(`http://localhost:5000/subject/deleteSubject`, obj)
        .then((res) => {
          handleCloseDelete();
          setTimeout(() => {
            toast.success("Subject deleted successfully.", {
              position: toast.POSITION.TOP_CENTER,
            });
            props.getSubjectData();
          }, 5000);
        })
        .catch((err) => {
          toast.error("Something went wrong.", {
            position: toast.POSITION.TOP_CENTER,
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
      axios
        .post(`http://localhost:5000/subject/updateSubject`, obj)
        .then((res) => {
          setTimeout(() => {
            toast.success("Subject Update successfully.", {
              position: toast.POSITION.TOP_CENTER,
            });
            props.getSubjectData();
          }, 5000);
        })
        .catch((err) => {
          toast.error("Something went wrong.", {
            position: toast.POSITION.TOP_CENTER,
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
              <div class="form-group">
                <label for="subject_code">Subject Code</label>
                <input
                  type="text"
                  name="subject_code"
                  id="subject_code"
                  class="form-control"
                  autocomplete="off"
                  defaultValue={props.updateId.sbj_code}
                />
              </div>
              <div class="form-group">
                <label for="subject">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  class="form-control"
                  autocomplete="off"
                  defaultValue={props.updateId.sbj}
                />
              </div>
              <div class="form-group">
                <label for="description">Description</label>
                <textarea
                  type="text"
                  name="description"
                  id="description"
                  class="form-control"
                  autocomplete="off"
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
                value="Continue"
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
