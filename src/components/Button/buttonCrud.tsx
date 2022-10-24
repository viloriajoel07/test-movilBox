import React, { FC, useState } from "react";
import { Button, Input } from "..";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { HeaderForm } from "../Form";

const style = {
  position: "absolute" as "absolute",
  top: 0,
  right: 0,
  width: 400,
  height: "100vh",
  bgcolor: "background.paper",
  boxShadow: 24,
};

interface buttonProps {
  option: "create" | "update" | "view";
  icon?: string;
}

const ButtonCrud: FC<buttonProps> = ({ option, icon }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [formData, setformData] = useState({});

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (option === "create") {
      const createData = {
        name: e.target.name.value,
        email: e.target.email.value,
        profile: 1,
      };
      setformData(createData);
      // eventCrud();
      return;
    }

    const updateData = {
      name: e.target.name.value,
      email: e.target.email.value,
      profile: e.target.profile.value,
      state: e.target.state.value,
    };
    setformData(updateData);
    // eventCrud();
  };

  const eventCrud = () => {
    // Ver

    fetch(
      "http://pruebasclaro.movilbox.net:81/desarrollo/test_mbox/public/api/{documento}/users/{id_usuario}",
      {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // create

    fetch(
      "http://pruebasclaro.movilbox.net:81/desarrollo/test_mbox/public/api/1043930221/users",
      {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Update

    fetch(
      "http://pruebasclaro.movilbox.net:81/desarrollo/test_mbox/public/api/{documento}/users/{id_usuario}",
      {
        method: "PUT",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // DELETE

    fetch(
      "http://pruebasclaro.movilbox.net:81/desarrollo/test_mbox/public/api/{documento}/users/{id_usuario}",
      {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  const content = {
    create: {
      header: (
        <HeaderForm titleHeader="Agregar nuevo usuario" setOpen={setOpen} />
      ),
      buttonText: "Agregar usuario",
      inputs: (
        <div className="gap-4 p-6">
          <Input
            labelText="Nombre"
            name="name"
            placeholder="Nombre del usuario"
          />
          <Input
            labelText="Correo electrónico"
            name="email"
            placeholder="Correo electrónico"
          />
          <Input labelText="Perfil" name="profile" placeholder="Seleccionar" />
        </div>
      ),
      buttons: (
        <div className="mt-4 flex gap-x-4 justify-end p-6">
          <Button variant="fill">Agregar</Button>
          <Button variant="outline">Cancelar</Button>
        </div>
      ),
    },
    update: {
      buttonText: "Editar",
      header: <HeaderForm titleHeader="Editar usuario" setOpen={setOpen} />,
      inputs: (
        <div className="gap-4 p-6">
          <Input labelText="Nombre" placeholder="Nombre del usuario" />
          <Input
            labelText="Correo electrónico"
            placeholder="Correo electrónico"
          />
          <Input labelText="Perfil" placeholder="Seleccionar" />
          <Input labelText="Estado" placeholder="Activo" />
        </div>
      ),
      buttons: (
        <div className="mt-4 flex gap-x-4 justify-end p-6">
          <Button variant="fill">Guardar cambios</Button>
          <Button variant="outline">Cancelar</Button>
        </div>
      ),
    },
    view: {
      buttonText: "Ver",
      header: <HeaderForm titleHeader="Ver usuario" setOpen={setOpen} />,
      inputs: (
        <div className="gap-4 p-6">
          <Input labelText="Nombre" placeholder="Nombre del usuario" disabled />
          <Input
            labelText="Correo electrónico"
            placeholder="Correo electrónico"
            disabled
          />
          <Input labelText="Perfil" placeholder="Seleccionar" disabled />
          <Input labelText="Estado" placeholder="Activo" disabled />
          <Input
            labelText="Fecha modificación"
            placeholder="22/10/2022"
            disabled
          />
        </div>
      ),
      buttons: (
        <div className="mt-4 flex gap-x-4 justify-end p-6">
          <Button variant="fill">Guardar cambios</Button>
          <Button variant="outline">Cancelar</Button>
        </div>
      ),
    },
  }[option];

  return (
    <div>
      <Button
        variant="default"
        buttonClass="hover:bg-gray-200 w-full"
        icon={icon}
        event={() => setOpen(true)}
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
        <Box sx={style}>
          {content.header}
          <form onSubmit={handleSubmit}>
            {content.inputs}
            {content.buttons}
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ButtonCrud;
