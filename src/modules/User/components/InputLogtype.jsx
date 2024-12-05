/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { Select, SelectItem } from "@nextui-org/select";
import { forwardRef } from "react";

const InputLogtype = forwardRef(({ errorMessage, ...props }, ref) => {
  return (
    <div className="flex flex-col gap-2">
      <Select
        ref={ref} // Passa o ref para o Select
        label="Selecione o tipo de registro"
        variant="bordered"
        className="max-w-xs"
        {...props} // Aceita outras props do React Hook Form
        isInvalid={!!errorMessage} // Aplica estilos de erro, se houver
      >
        <SelectItem key={"CHECK_IN"}>{"Entrada"}</SelectItem>
        <SelectItem key={"CHECK_OUT"}>{"Saída"}</SelectItem>
        <SelectItem key={"LUNCH_START"}>{"Início do almoço"}</SelectItem>
        <SelectItem key={"LUNCH_END"}>{"Fim do almoço"}</SelectItem>
        <SelectItem key={"BREAK_START"}>{"Início da pausa"}</SelectItem>
        <SelectItem key={"BREAK_END"}>{"Fim da pausa"}</SelectItem>
      </Select>
      {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}{" "}
      {/* Exibe a mensagem de erro */}
    </div>
  );
});

export default InputLogtype;
