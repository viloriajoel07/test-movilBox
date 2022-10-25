import { FC } from "react";
import TableHeader from "./tableHeader.component";
import Row from "./row.component";

interface tableProps {
  filtered?: any;
}

const DataTable: FC<tableProps> = ({ filtered }) => {
  return (
    <div className="w-full mb-8 overflow-x-auto h-72">
      <table className="border w-full shadow-lg">
        <TableHeader />
        <tbody>
          {filtered.map((user: any) => (
            <tr
              key={user.id}
              className="hover:bg-gray-100 gap-4 sm:gap-x-0 relative"
            >
              <Row data={user} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
