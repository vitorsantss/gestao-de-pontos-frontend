/* eslint-disable no-unused-vars */
import InputEmail from "@/components/InputEmail";
import InputPassword from "@/components/InputPassword";
import { UserService } from "@/services/UserService";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Spinner } from "@nextui-org/spinner";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import InputLogtype from "../components/InputLogtype";
import InputTime from "../components/InputTime";
import { WorklogService } from "@/services/WorklogService";

const schema = z.object({
  logType: z.enum([
    "CHECK_IN",
    "CHECK_OUT",
    "LUNCH_START",
    "LUNCH_END",
    "BREAK_START",
    "BREAK_END",
  ]),
  timestamp: z.string().refine((value) => {
    const date = new Date(value); // Tenta criar um objeto Date
    return !isNaN(date.getTime()); // Verifica se é uma data válida
  }, "O horário deve estar no formato válido ISO-8601: yyyy-MM-dd'T'HH:mm:ss"),
});

const RegisterWorklog = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),
  });
  const { errors } = formState;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (values) => {
    setLoading(true);
    try {
      const response = await WorklogService.create(values);
      navigate("/");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-4 mx-4">
      <div className="my-8">
        <h1 className="text-3xl font-bold">Registrar ponto</h1>

        <div className="mt-6">
          <form
            className="flex flex-col gap-3"
            onSubmit={handleSubmit(handleRegister)}>
            <InputLogtype
              {...register("logType")}
              errorMessage={errors.logType?.message}
              isRequired
            />
            <InputTime
              {...register("timestamp")}
              errorMessage={errors.timestamp?.message}
              isRequired
            />
            <Button
              variant="shadow"
              type="submit"
              className="bg-black text-white max-w-xs"
              isDisabled={loading}>
              {loading ? <Spinner /> : "Cadastrar"}
            </Button>
            <Button
              onClick={() => navigate("/")}
              color="default"
              variant="bordered"
              className="max-w-xs">
              Voltar
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterWorklog;
