import { FC } from "react";
import useForm from "../../hooks/useForm";
import { userApi } from "../../services/users.api";
import { Button } from "../Button";
import { Input } from "../Input";
import { SelectProfiles, SelectStates } from "../Select";

interface propsForm {
  closeModal: any;
  data?: any;
}

const EditForm: FC<propsForm> = ({ closeModal, data }) => {
  console.log(data);

  const { formData, handleChange } = useForm({
    name: data.name,
    email: data.email,
    profile: data.profile,
    state: data.state,
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const body = {
      id: data.id,
      bData: formData,
    };
    console.log(body);
    userApi.updateUser(body).then((data) => console.log(data));
  };

  return (
    <form className="gap-4 p-6" onSubmit={handleSubmit}>
      <Input
        labelText="Nombre"
        value={formData.name}
        changeEvent={handleChange}
        name="name"
        placeholder="Nombre del usuario"
      />
      <Input
        labelText="Correo electrónico"
        value={formData.email}
        changeEvent={handleChange}
        name="email"
        placeholder="Correo electrónico"
      />
      <SelectProfiles
        labelText="Perfil"
        name="profile"
        value={formData.profile}
        selected={data.profile}
        changeEvent={handleChange}
      />
      <SelectStates
        labelText="Estado"
        name="state"
        value={formData.profile}
        selected={data.state}
        changeEvent={handleChange}
      />

      <div className="mt-4 flex gap-x-4 justify-end">
        <Button variant="fill">Guardar cambios</Button>
        <Button variant="outline" type="button" event={closeModal}>
          Cancelar
        </Button>
      </div>
    </form>
  );
};

export default EditForm;
