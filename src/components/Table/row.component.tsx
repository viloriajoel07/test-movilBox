import { FC } from "react";
import { ButtonOption } from "../Button";

interface rowProps {
  data?: any;
}

const Row: FC<rowProps> = ({ data }) => {
  return (
    <tr className="hover:bg-gray-100" key={data.id}>
      <td className="text-center">1</td>
      <td className="text-center font-bold flex items-center justify-center gap-x-3 py-1">
        <span className="w-8 h-8 text-sm flex rounded-full items-center justify-center bg-green-100 text-green-400">
          JD
        </span>{" "}
        Jhon Doe
      </td>
      <td className="text-center">{data.email}</td>
      <td className="text-center">{data.profile}</td>
      <td className="text-center">
        {data.state === 1 ? (
          <span className="bg-gray-200 p-2 rounded-full">inactivo</span>
        ) : (
          <span className="bg-green-100 text-green-400 p-2 rounded-full">
            Activo
          </span>
        )}
      </td>
      <td className="text-center">{data.date}</td>
      <td className="text-center">
        <ButtonOption />
      </td>
    </tr>
  );
};

export default Row;
