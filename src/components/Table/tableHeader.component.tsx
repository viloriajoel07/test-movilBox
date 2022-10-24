const columns = [
  { colId: "id", headerName: "#" },
  { colId: "name", headerName: "Nombre" },
  { colId: "email", headerName: "Correo" },
  { colId: "profile", headerName: "Perfil" },
  { colId: "state", headerName: "Estado" },
  { colId: "update_at", headerName: "Fecha modificación" },
  { colId: "actions", headerName: "Acciones" },
];

const TableHeader = () => {
  return (
    <thead className="">
      <tr className="px-2 py-4 bg-gray-300">
        {columns.map((col) => (
          <th className="py-3" key={col.colId} id={col.colId}>
            {col.headerName}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
