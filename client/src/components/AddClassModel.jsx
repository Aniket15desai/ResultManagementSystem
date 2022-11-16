import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const AddClassModel = (props) => {
  const handleCloseAdd = () => {
    props.setShowAdd(false);
    props.setShowUpdateId({ id: "", year: "", semester: "" });
  };
  const handleCloseDelete = () => {
    props.setShowDelete(false);
  };

  const addNewClass = () => {
    var year = document.getElementById("year").value;
    var semester = document.getElementById("semester").value;

    if (year !== "" && semester !== "") {
      const obj = {
        year: year,
        semester: semester,
        dateCreated: new Date(),
      };

      axios
        .post(`http://localhost:5000/class/addClass`, obj)
        .then((res) => {
          handleCloseAdd();
          setTimeout(() => {
            toast.success("Class added successfully.", {
              position: toast.POSITION.TOP_CENTER,
            });
            props.getClassDetails();
          }, 5000);
        })
        .catch((err) => {
          toast.error("Something went wrong.", {
            position: toast.POSITION.TOP_CENTER,
          });
        });
    }
  };

  const updateDetails = () => {
    var year =
      document.getElementById("year").value !== ""
        ? document.getElementById("year").value
        : document.getElementById("year").defaultValue;
    var semester =
      document.getElementById("semester").value !== ""
        ? document.getElementById("semester").value
        : document.getElementById("semester").defaultValue;
    if (year !== "" && semester !== "") {
      const obj = {
        id: props.showUpdateId.id,
        year: year,
        semester: semester,
      };

      axios
        .post(`http://localhost:5000/class/updateClass`, obj)
        .then((res) => {
          handleCloseAdd();
          setTimeout(() => {
            toast.success("Class Updated successfully.", {
              position: toast.POSITION.TOP_CENTER,
            });
            props.getClassDetails();
          }, 5000);
        })
        .catch((err) => {
          toast.error("Something went wrong.", {
            position: toast.POSITION.TOP_CENTER,
          });
        });
    }
  };

  const deleteDetails = () => {
    const obj = {
      id: props.showDeleteId,
    };

    axios
      .post(`http://localhost:5000/class/deleteClass`, obj)
      .then((res) => {
        handleCloseDelete();
        setTimeout(() => {
          toast.success("Class Deleted successfully.", {
            position: toast.POSITION.TOP_CENTER,
          });
          props.getClassDetails();
        }, 5000);
      })
      .catch((err) => {
        toast.error("Something went wrong.", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  return (
    <>
      {props.showAdd === true && (
        <Modal show={props.showAdd} onHide={handleCloseAdd}>
          <Modal.Header closeButton>
            <Modal.Title>New Class</Modal.Title>
          </Modal.Header>
          <form id="manage-user" className="pe-4">
            <Modal.Body>
              <input type="hidden" name="id" />
              <div class="form-group">
                <label for="year">Year</label>
                <input
                  type="text"
                  name="year"
                  id="year"
                  class="form-control"
                  autocomplete="off"
                  defaultValue={
                    props.showUpdateId.year ? props.showUpdateId.year : ""
                  }
                />
              </div>
              <div class="form-group">
                <label for="semester">Semester</label>
                <input
                  type="text"
                  name="semester"
                  id="semester"
                  class="form-control"
                  autocomplete="off"
                  defaultValue={
                    props.showUpdateId.semester
                      ? props.showUpdateId.semester
                      : ""
                  }
                />
              </div>
            </Modal.Body>
            <Modal.Footer>
              {props.showUpdateId.id !== "" ? (
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Update"
                  onClick={(e) => {
                    e.preventDefault();
                    updateDetails();
                    handleCloseAdd;
                  }}
                />
              ) : (
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Save"
                  onClick={(e) => {
                    e.preventDefault();
                    addNewClass();
                    handleCloseAdd;
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
              <div className="p-1">Are you sure to delete this class?</div>
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
      )}
      <ToastContainer />
    </>
  );
};

export default AddClassModel;
