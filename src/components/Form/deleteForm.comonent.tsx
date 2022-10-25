import React, { FC } from "react";
import { userApi } from "../../services/users.api";
import { Button } from "../Button";
import { Input } from "../Input";

interface deleteFormProps {
  closeModal: () => void;
  data?: any;
}

const DeleteForm: FC<deleteFormProps> = ({ data, closeModal }) => {
  console.log(data);

  const handleDelete = () => {
    userApi.deleteUser({ id: data.id }).then((data) => console.log(data));
  };

  return (
    <div className="p-16 flex flex-col items-center justify-start">
      <p className="text-2xl text-center font-bold">
        ¿ Estas seguro de elimiar el usuario seleccionado ?
      </p>

      <div className="mt-4 flex gap-x-4 justify-end">
        <Button variant="fill" event={() => handleDelete()}>
          Eliminar
        </Button>
        <Button variant="outline" type="button" event={closeModal}>
          Cancelar
        </Button>
      </div>
    </div>
  );
};

export default DeleteForm;
