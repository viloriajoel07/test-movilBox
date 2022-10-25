import React, { FC, useState, useEffect } from "react";
import { Button, Input } from "..";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {
  HeaderForm,
  CreateForm,
  EditForm,
  DetailsForm,
  DeleteForm,
} from "../Form";
import useForm from "../../hooks/useForm";
import { userApi } from "../../services/users.api";

const style = {
  position: "absolute" as "absolute",
  top: 0,
  right: 0,
  width: 400,
  height: "100vh",
  bgcolor: "background.paper",
  boxShadow: 24,
};

const styleDelete = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
};

interface buttonProps {
  option: "create" | "update" | "view" | "delete";
  icon?: string;
  data?: any;
}

const ButtonCrud: FC<buttonProps> = ({ option, icon, data }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };

  const content = {
    create: {
      header: (
        <HeaderForm titleHeader="Agregar nuevo usuario" setOpen={setOpen} />
      ),
      buttonText: "Agregar usuario",
      body: <CreateForm closeModal={handleClose} />,
    },
    update: {
      buttonText: "Editar",
      header: <HeaderForm titleHeader="Editar usuario" setOpen={setOpen} />,
      body: <EditForm closeModal={handleClose} data={data} />,
    },
    view: {
      buttonText: "Ver",
      header: <HeaderForm titleHeader="Ver usuario" setOpen={setOpen} />,
      body: <DetailsForm closeModal={handleClose} data={data} />,
    },
    delete: {
      buttonText: "Elimiar",
      header: <HeaderForm titleHeader="Ver usuario" setOpen={setOpen} />,
      body: <DeleteForm closeModal={handleClose} data={data} />,
    },
  }[option];

  return (
    <div>
      <Button
        variant="default"
        buttonClass="hover:bg-gray-200 w-full"
        icon={icon}
        event={() => {
          setOpen(true);
        }}
      >
        {content.buttonText}
      </Button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={option === "delete" ? styleDelete : style}>
          {content.header}
          {content.body}
        </Box>
      </Modal>
    </div>
  );
};

export default ButtonCrud;
