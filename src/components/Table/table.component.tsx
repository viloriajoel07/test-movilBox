import React, { FC, useEffect } from "react";
import getUsers, { setUsers, startLoading } from "../../app/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import TableHeader from "./tableHeader.component";
import { ButtonOption } from "../Button";
import Row from "./row.component";
import { userApi } from "../../services/users.api";

interface tableProps {
  filtered?: any;
}

const DataTable: FC<tableProps> = ({ filtered }) => {
  useEffect(() => {
    console.log(filtered);
  }, [filtered]);

  return (
    <div className="w-full mb-8">
      <table className="border w-full shadow-lg">
        <TableHeader />
        <tbody>
          {filtered.map((user: any) => (
            <tr key={user.id} className="hover:bg-gray-100">
              <Row data={user} />
            </tr>
          ))}
        </tbody>
      </table>

      <p className="py-4 text-gray-500">Total de registros 2</p>
    </div>
  );
};

export default DataTable;
