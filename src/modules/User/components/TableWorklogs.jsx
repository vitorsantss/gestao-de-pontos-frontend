/* eslint-disable react/prop-types */
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Skeleton,
} from "@nextui-org/react";

// Mapeia os valores de tipo de registro para português
const logTypeMap = {
  CHECK_IN: "Entrada",
  CHECK_OUT: "Saída",
  LUNCH_START: "Início do almoço",
  LUNCH_END: "Fim do almoço",
  BREAK_START: "Início da pausa",
  BREAK_END: "Fim da pausa",
};

const columns = [
  { name: "NOME", uid: "name" },
  { name: "TIPO DE REGISTRO", uid: "log_type" },
  { name: "DATA/HORÁRIO", uid: "timestamp" },
];

const TableWorklogs = ({ user = {}, worklogs = [], isLoading = false }) => {
  // Verifica se os dados necessários estão disponíveis
  const isDataReady = typeof user === "object" && Array.isArray(worklogs);

  // Combina os dados do usuário e logs de trabalho
  const combinedData = isDataReady
    ? worklogs.map((worklog) => {
        // Converte o array de timestamp para uma data formatada
        const [year, month, day, hour, minute] = worklog.timestamp || [];
        const formattedTimestamp = year
          ? new Date(year, month - 1, day, hour, minute).toLocaleString(
              "pt-BR",
              {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              }
            )
          : "Data inválida";

        return {
          ...worklog,
          name: user.name || "Usuário desconhecido",
          email: user.email || "Email não disponível",
          avatar: user.avatar || null,
          logType: logTypeMap[worklog.logType] || "Desconhecido",
          timestamp: formattedTimestamp,
        };
      })
    : [];

  // Renderiza cada célula com base na coluna
  const renderCell = React.useCallback((item, columnKey) => {
    const cellValue = item[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: item.avatar }}
            description={item.email}
            name={cellValue}
          />
        );
      case "log_type":
        return <p className="text-sm">{item.logType || "Desconhecido"}</p>;
      case "timestamp":
        return <p className="text-sm">{cellValue}</p>;
      default:
        return cellValue;
    }
  }, []);

  // Exibe skeletons enquanto carrega
  if (isLoading || !isDataReady) {
    return (
      <Table aria-label="Carregando tabela de logs de trabalho">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.uid} align={"start"}>
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody>
          {Array.from({ length: 5 }).map((_, index) => (
            <TableRow key={index}>
              {columns.map((column) => (
                <TableCell key={column.uid}>
                  <Skeleton width="100%" height="20px" />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }

  // Renderiza a tabela com os dados combinados
  return (
    <Table aria-label="Tabela de logs de trabalho">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={"start"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={combinedData}>
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

export default TableWorklogs;
