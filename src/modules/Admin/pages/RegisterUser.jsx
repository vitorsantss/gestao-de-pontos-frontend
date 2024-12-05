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
import InputName from "../components/InputName";
import InputRole from "../components/InputRole";
import InputWorkSchedule from "../components/InputWorkSchedule";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  name: z.string(),
  email: z.string().email("E-mail inválido."),
  password: z.string(),
  role: z.enum(["ADMIN", "USER"]),
  work_schedule: z.enum(["EIGHT_HOURS", "SIX_HOURS"]),
});

const RegisterUser = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),
  });
  const { errors } = formState;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (values) => {
    setLoading(true);
    try {
      const response = await UserService.create(values);
      navigate("/")
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-4 mx-4">
      <div className="my-8">
        <h1 className="text-3xl font-bold">Cadastrar Usuário</h1>

        <div className="mt-6">
          <form
            className="flex flex-col gap-3"
            onSubmit={handleSubmit(handleRegister)}>
            <InputName
              {...register("name")}
              errorMessage={errors.name?.message}
              isRequired
            />
            <InputRole
              {...register("role")}
              errorMessage={errors.role?.message}
              isRequired
            />
            <InputWorkSchedule
              {...register("work_schedule")}
              errorMessage={errors.work_schedule?.message}
              isRequired
            />
            <InputEmail
              {...register("email")}
              errorMessage={errors.email?.message}
              placeholder="Digite o e-mail"
              isRequired
            />
            <InputPassword
              {...register("password")}
              errorMessage={errors.password?.message}
              placeholder="Digite a senha"
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

export default RegisterUser;
