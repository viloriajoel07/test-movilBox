import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoading, setProfiles, setUsers } from "./app/slices/userSlice";
import {
  Button,
  ButtonCrud,
  Header,
  Input,
  SelectProfiles,
  SelectStates,
  Table,
} from "./components";
import { useSearch } from "./hooks/useSearch";
import { userApi } from "./services/users.api";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startLoading());
    userApi.allUsers().then((data) => dispatch(setUsers(data.users)));
    dispatch(startLoading());
    userApi.profilesFind().then((data) => dispatch(setProfiles(data.profiles)));
  }, []);

  const users = useSelector(({ users }: any) => users.users);

  const {
    userFiltered,
    handleChangeName,
    handleChangeEmail,
    handleChangeProfiles,
    handleChangeStates,
    searchName,
    searchEmail,
    searchProfiles,
    searchStates,
  } = useSearch(users);

  return (
    <div className="p-4 bg-gray-100">
      <Header />
      <section className="bg-white w-full px-8 py-4 mt-4 rounded-xl">
        <div className="flex items-center justify-between mb-4">
          <p className="font-bold text-xl ">Filtros de Búsqueda</p>
          <Button variant="outline" icon="fluent:broom-24-regular">
            Limpiar filtro
          </Button>
        </div>
        <div className="flex gap-x-12 mb-4">
          <Input
            labelText="Nombre"
            name="name"
            changeEvent={handleChangeName}
            value={searchName}
            placeholder="Nombre del usuario"
          />
          <Input
            labelText="Correo"
            name="email"
            value={searchEmail}
            changeEvent={handleChangeEmail}
            placeholder="Correo electronico"
          />
        </div>
        <div className="flex gap-x-12 mb-4">
          <SelectProfiles
            labelText="Perfil"
            name="profiles"
            value={searchProfiles}
            changeEvent={handleChangeProfiles}
          />
          <SelectStates
            labelText="Estado"
            name="states"
            value={searchStates}
            changeEvent={handleChangeStates}
          />
        </div>
      </section>
      <section className="bg-white w-full px-8 py-4 mt-4 rounded-xl">
        <div className="flex items-center justify-between mb-4 border-b py-4">
          <p className="font-bold text-xl ">Usuarios</p>
          <ButtonCrud option="create" />
        </div>
        <div className="flex flex-col items-end">
          <Table filtered={userFiltered} />
        </div>
      </section>
    </div>
  );
}

export default App;
