import React, { useState } from "react";
import { Button, Modal } from "rsuite";
import { problemStatement } from "../constants";

const ButtonWithModal = ({ children }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button
        onClick={handleOpen}
        appearance="primary"
        className="font-poppins font-medium text-[18px] text-primary bg-black-gradient rounded-[10px] outline-none">
        {children}
      </Button>
      <Modal open={open} onClose={handleClose} overflow>
        <Modal.Header>
          <Modal.Title className="text-white">Problem Statement</Modal.Title>
        </Modal.Header>
        <Modal.Body className="flex flex-col gap-5">
          {problemStatement.map((item) => (
            <>
              <div>{item.tile}</div>
              <div>{item.body}</div>
              <img src={item.img} alt="descriptive pic" />
            </>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="primary">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ButtonWithModal