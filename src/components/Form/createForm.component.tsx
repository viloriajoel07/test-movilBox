import { FC } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import useForm from "../../hooks/useForm";
import { userApi } from "../../services/users.api";
import { SelectProfiles } from "../Select";

interface propsForm {
  closeModal: () => void;
}

const CreateForm: FC<propsForm> = ({ closeModal }) => {
  const { formData, handleChange } = useForm({
    name: "",
    email: "",
    profile: null,
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    userApi.createUser(formData).then((data) => {
      console.log(data);
    });
  };

  return (
    <form className="gap-4 p-6" onSubmit={handleSubmit}>
      <Input
        labelText="Nombre"
        name="name"
        value={formData.name}
        changeEvent={handleChange}
        placeholder="Nombre del usuario"
      />
      <Input
        labelText="Correo electrónico"
        name="email"
        value={formData.email}
        changeEvent={handleChange}
        placeholder="Correo electrónico"
      />
      <SelectProfiles
        labelText="Perfil"
        name="profile"
        value={formData.profile}
        changeEvent={handleChange}
      />

      <div className="mt-4 flex gap-x-4 justify-end">
        <Button variant="fill">Agregar</Button>
        <Button variant="outline" type="button" event={closeModal}>
          Cancelar
        </Button>
      </div>
    </form>
  );
};

export default CreateForm;
