/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { TimeInput } from "@nextui-org/react";
import { forwardRef } from "react";
import { format } from "date-fns";

const InputTime = forwardRef(({ errorMessage, onChange, ...props }, ref) => {
  const handleTimeChange = (time) => {

    if (time && time.hour !== undefined && time.minute !== undefined) {
      const now = new Date(); // Data atual
      const formattedDate = format(now, "yyyy-MM-dd"); // Formata como yyyy-MM-dd

      // Já no formato 24 horas
      const hours = time.hour;
      const formattedTime = `${String(hours).padStart(2, "0")}:${String(
        time.minute
      ).padStart(2, "0")}:00`; // Formata como HH:mm:ss

      // Gerar o timestamp no formato ISO-8601
      const timestamp = `${formattedDate}T${formattedTime}`; // yyyy-MM-ddTHH:mm:ss

      // Passar o timestamp no formato correto
      onChange?.({ target: { name: "timestamp", value: timestamp } });
    } else {
      onChange?.({ target: { name: "timestamp", value: "" } }); // String vazia para valores inválidos
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <TimeInput
        ref={ref}
        label="Horário"
        placeholder="Selecione o horário"
        variant="bordered"
        onChange={handleTimeChange}
        {...props}
        className="max-w-xs"
      />
      {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
    </div>
  );
});

export default InputTime;
