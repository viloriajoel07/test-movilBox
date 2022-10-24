import { useEffect, useState } from "react";
import { Button, ButtonCrud, Header, Input, Select, Table } from "./components";
import { API_URL } from "./constants/config";

function App() {
  const [profiles, setProfiles] = useState([{ id: 0, name: "Cargando..." }]);
  const stateUser = [
    {
      id: 1,
      name: "Activo",
    },
    {
      id: 0,
      name: "Inactivo",
    },
  ];
  useEffect(() => {
    fetch(
      `http://pruebasclaro.movilbox.net:81/desarrollo/test_mbox/public/api/profiles`
    )
      .then((response) => response.json())
      .then((data) => setProfiles(data.profiles));
  }, []);

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
          <Input labelText="Nombre" placeholder="Nombre del usuario" />
          <Input labelText="Correo" placeholder="Correo electronico" />
        </div>
        <div className="flex gap-x-12 mb-4">
          <Select labelText="Perfil" list={profiles} />
          <Select labelText="Estado" list={stateUser} />
        </div>
      </section>
      <section className="bg-white w-full px-8 py-4 mt-4 rounded-xl">
        <div className="flex items-center justify-between mb-4 border-b py-4">
          <p className="font-bold text-xl ">Usuarios</p>
          <ButtonCrud option="create" />
        </div>
        <div className="flex flex-col items-end">
          <div className="w-72 mb-2">
            <Input
              labelText="Buscar"
              placeholder="Buscar usuario"
              containerClass=""
            />
          </div>
          <Table />
        </div>
      </section>
    </div>
  );
}

export default App;
