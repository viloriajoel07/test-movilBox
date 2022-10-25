import { FC } from "react";
import { useDispatch } from "react-redux";
import { switchEvent } from "../../app/slices/userSlice";
import { userApi } from "../../services/users.api";
import { Button } from "../Button";

interface deleteFormProps {
  closeModal: () => void;
  data?: any;
}

const DeleteForm: FC<deleteFormProps> = ({ data, closeModal }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    userApi.deleteUser({ id: data.id }).then((data) => console.log(data));
    dispatch(switchEvent());
    closeModal();
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
