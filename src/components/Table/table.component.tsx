import React, { useEffect } from "react";
import getUsers, { setUsers, startLoading } from "../../app/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import TableHeader from "./tableHeader.component";
import { ButtonOption } from "../Button";
import Row from "./row.component";

const DataTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoading());
    fetch(
      "http://pruebasclaro.movilbox.net:81/desarrollo/test_mbox/public/api/1043930221/users/index"
    )
      .then((response) => response.json())
      .then((data) => dispatch(setUsers(data.profiles)));
  }, []);

  const stateUsers = useSelector((state: any) => state.users);
  return (
    <div className="w-full mb-8">
      <table className="border w-full shadow-lg">
        <TableHeader />
        <tbody>
          {stateUsers.users &&
            stateUsers.users.map((user: any) => <Row data={user} />)}
          {/* {users?.map((data: any) => (
            <Row data={data} key={data.id} />
          ))} */}
          <tr className="hover:bg-gray-100">
            <td className="text-center">1</td>
            <td className="text-center font-bold flex items-center justify-center gap-x-3 py-1">
              <span className="w-8 h-8 text-sm flex rounded-full items-center justify-center bg-green-200 text-green-400">
                JD
              </span>{" "}
              Jhon Doe
            </td>
            <td className="text-center">Jhon@Doe.com</td>
            <td className="text-center">Desarrollador</td>
            <td className="text-center">inactivo</td>
            <td className="text-center">23/10/2022</td>
            <td className="text-center">
              <ButtonOption />
            </td>
          </tr>
        </tbody>
        {/* <TableBody /> */}
      </table>

      <p className="py-4 text-gray-500">Total de registros 2</p>
    </div>
  );
};

export default DataTable;
