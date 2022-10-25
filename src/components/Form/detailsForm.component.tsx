import { FC } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { SelectProfiles, SelectStates } from "../Select";

interface propsForm {
  closeModal: () => void;
  data?: any;
}

const DetailsForm: FC<propsForm> = ({ closeModal, data }) => {
  const { updated_at } = data;
  const date = updated_at.split("T")[0];

  return (
    <div className="gap-4 p-6">
      <Input
        labelText="Nombre"
        placeholder="Nombre del usuario"
        value={data.name}
        disabled
      />
      <Input
        labelText="Correo electrónico"
        placeholder="Correo electrónico"
        value={data.email}
        disabled
      />
      <SelectProfiles
        labelText="Perfil"
        name="profile"
        value={data.profile}
        selected={data.profile}
      />
      <SelectStates
        labelText="Estado"
        name="Estado"
        value={data.profile}
        selected={data.state}
      />
      <Input
        labelText="Fecha modificación"
        value={date}
        placeholder="22/10/2022"
        disabled
      />
      <div className="mt-4 flex justify-end">
        <Button variant="outline" type="button" event={closeModal}>
          Cancelar
        </Button>
      </div>
    </div>
  );
};

export default DetailsForm;
