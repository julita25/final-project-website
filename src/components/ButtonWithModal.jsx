import React, { useState } from "react";
import { Button, Modal } from "rsuite";

const ButtonWithModal = ({ children, title, body, img }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button
        onClick={handleOpen}
        appearance="primary"
        className="font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none">
        {children}
      </Button>
      <Modal open={open} onClose={handleClose} >
        <Modal.Header>
          <Modal.Title className="text-white">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="flex flex-col gap-5">
          <div>{body}</div>
          <img src={img} alt="tendline number of accidents" />
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