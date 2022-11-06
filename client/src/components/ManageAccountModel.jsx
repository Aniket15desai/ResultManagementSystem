import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const ManageAccountModel = (props) => {

  const handleClose = () => props.setShow(false);

  return (
    <>
      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form action="" id="manage-user" className='pe-4'>	
            <input type="hidden" name="id" />
            <div class="form-group">
                <label for="name">First Name</label>
                <input type="text" name="firstname" id="firstname" class="form-control" autocomplete="off" />
            </div>
            <div class="form-group">
                <label for="name">Last Name</label>
                <input type="text" name="lastname" id="lastname" class="form-control" required autocomplete="off" />
            </div>
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" name="username" id="username" class="form-control" required autocomplete="off" />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" class="form-control" autocomplete="off" />
                <small><i>Leave this blank if you dont want to change the password.</i></small>
            </div>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}