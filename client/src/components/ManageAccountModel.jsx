import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import bcrypt from "bcryptjs";

const ManageAccountModel = (props) => {
  const [isUser, setIsUser] = useState([]);

  const handleClose = () => props.setShow(false);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    axios.get(`http://localhost:5000/user/getUser`).then((response) => {
      setIsUser(response.data.data);
    });
  };

  const onUpdateClick = (e) => {
    e.preventDefault();
    var fname =
      document.getElementById("firstname").value !== ""
        ? document.getElementById("firstname").value
        : document.getElementById("firstname").defaultValue;
    var lname =
      document.getElementById("lastname").value !== ""
        ? document.getElementById("lastname").value
        : document.getElementById("lastname").defaultValue;
    var uname =
      document.getElementById("username").value !== ""
        ? document.getElementById("username").value
        : document.getElementById("username").defaultValue;
    var uPassword =
      document.getElementById("password").value !== ""
        ? document.getElementById("password").value
        : document.getElementById("password").defaultValue;

    // const hashpasswd = bcrypt.hashSync(uPassword, '$2a$10$CwTycUXWue0Thq9StjUM0u');

    const obj = {
      id: 1,
      firstname: fname,
      lastname: lname,
      username: uname,
      password: uPassword,
    };

    axios
      .post(`http://localhost:5000/user/updateUser`, obj)
      .then((res) => {
        toast.success("User updated successfully.", {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((err) => {
        toast.error("User details not updated.", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  return (
    <>
      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        {isUser.map((item) => {
          var fName = item.firstname;
          return (
            <form
              id="manage-user"
              className="pe-4"
              onSubmit={(e) => {
                onUpdateClick(e);
                handleClose();
              }}
            >
              <Modal.Body>
                <input type="hidden" name="id" />
                <div class="form-group">
                  <label for="name">First Name</label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    class="form-control"
                    autocomplete="off"
                    defaultValue={fName}
                  />
                </div>
                <div class="form-group">
                  <label for="name">Last Name</label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    class="form-control"
                    autocomplete="off"
                    defaultValue={item.lastname}
                  />
                </div>
                <div class="form-group">
                  <label for="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    class="form-control"
                    autocomplete="off"
                    defaultValue={item.username}
                  />
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    defaultValue={item.password}
                    class="form-control"
                    autocomplete="off"
                  />
                  <small>
                    <i>
                      Leave this blank if you dont want to change the password.
                    </i>
                  </small>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <input type="submit" className="btn btn-primary" value="Save" />
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </form>
          );
        })}
      </Modal>
    </>
  );
};

export default ManageAccountModel;
