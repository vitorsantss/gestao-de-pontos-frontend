/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { Select, SelectItem } from "@nextui-org/select";
import { forwardRef } from "react";

const InputWorkSchedule = forwardRef(({ errorMessage, ...props }, ref) => {
  return (
    <div className="flex flex-col gap-2">
      <Select
        ref={ref} // Passa o ref para o Select
        label="Selecione a Jorna de Trabalho"
        variant="bordered"
        className="max-w-xs"
        {...props} // Aceita outras props do React Hook Form
        isInvalid={!!errorMessage} // Aplica estilos de erro, se houver
      >
        <SelectItem key={"EIGHT_HOURS"}>{"Jornada de 8 horas"}</SelectItem>
        <SelectItem key={"SIX_HOURS"}>{"Jornada de 6 horas"}</SelectItem>
      </Select>
      {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}{" "}
      {/* Exibe a mensagem de erro */}
    </div>
  );
});

export default InputWorkSchedule;
