/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
  getKeyValue,
} from "@nextui-org/react";

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

const columns = [
  { name: "NOME", uid: "name" },
  { name: "PERFIL", uid: "role" },
  { name: "HORÁRIO DE TRABALHO", uid: "work_schedule" },
];

const TableUsers = ({ users }) => {
  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: user.avatar }}
            description={user.email}
            name={cellValue}>
            {user.email}
          </User>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">
              {cellValue === "ADMIN" ? "Adminstrador" : "Colaborador"}
            </p>
          </div>
        );
      case "work_schedule":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[user.work_schedule]}
            size="sm"
            variant="flat">
            {cellValue === "EIGHT_HOURS" ? "8 horas" : "6 horas"}
          </Chip>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={"start"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={users}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TableUsers;
