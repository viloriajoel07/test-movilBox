import { FC } from "react";
import { ButtonOption } from "../Button";

interface rowProps {
  data?: any;
}

const Row: FC<rowProps> = ({ data }) => {
  const { updated_at } = data;
  const date = updated_at.split("T")[0];

  return (
    <>
      <td className="text-center">{data.id}</td>
      <td className="text-center font-bold flex items-center justify-center gap-x-3 py-1">
        {data.name}
      </td>
      <td className="text-center">{data.email}</td>
      <td className="text-center">
        {data.profile === 1
          ? "Practicante"
          : data.profile === 2
          ? "Desarrollador"
          : data.profile === 3
          ? "Vendedor"
          : "Administrativo"}
      </td>
      <td className="text-center">
        {data.state === 0 ? (
          <span className="bg-gray-200 px-2 rounded-full">Inactivo</span>
        ) : (
          <span className="bg-green-100 text-green-400 px-2 rounded-full">
            Activo
          </span>
        )}
      </td>
      <td className="text-center">{date}</td>
      <td className="text-center">
        <ButtonOption data={data} />
      </td>
    </>
  );
};

export default Row;
