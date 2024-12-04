/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { Input } from "@nextui-org/input";
import { forwardRef } from "react";

const InputName = forwardRef(({ errorMessage, ...props }, ref) => {
  return (
    <div className="flex flex-col gap-2">
      <Input
        ref={ref} // Passa o ref para o Input
        label="Nome"
        placeholder="Digite o nome"
        variant="bordered"
        {...props}
        isInvalid={!!errorMessage} // Aplica estilos de erro no Input, se houver
        className="max-w-xs"
      />
      {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}{" "}
      {/* Exibe a mensagem de erro */}
    </div>
  );
});

export default InputName;
