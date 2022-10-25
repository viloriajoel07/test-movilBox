import { useEffect } from "react";
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

  const switchEv = useSelector(({ users }: any) => users.switchEvent);

  useEffect(() => {
    dispatch(startLoading());
    userApi.allUsers().then((data) => dispatch(setUsers(data.users)));
  }, [switchEv]);

  useEffect(() => {
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
    cleanFilter,
  } = useSearch(users);

  return (
    <div className="p-4 bg-gray-100">
      <Header />
      <section className="bg-white w-full px-8 py-4 mt-4 rounded-xl">
        <div className="flex items-start gap-y-2 sm:items-center justify-between mb-4 flex-col sm:flex-row">
          <p className="font-bold text-xl ">Filtros de Búsqueda</p>
          <Button
            variant="outline"
            icon="fluent:broom-24-regular"
            buttonClass="hover:bg-gray-400 hover:text-white"
            event={cleanFilter}
          >
            Limpiar filtro
          </Button>
        </div>
        <div className="flex gap-x-12 mb-4 flex-col md:flex-row">
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
        <div className="flex gap-x-12 mb-4 flex-col md:flex-row">
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
        <div className="flex items-start gap-y-2 sm:items-center justify-between mb-4 border-b py-4 flex-col sm:flex-row">
          <p className="font-bold text-xl ">Usuarios</p>
          <ButtonCrud option="create" varianButton="fill" />
        </div>
        <div className="flex flex-col items-end">
          <Table filtered={userFiltered} />
        </div>
        <p className="py-4 text-gray-500">
          Total de registros {`${userFiltered.length}`}
        </p>
      </section>
    </div>
  );
}

export default App;
