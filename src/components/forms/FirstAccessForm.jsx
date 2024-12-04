import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/react";
import InputEmail from "@/components/InputEmail";
import InputPassword from "@/components/InputPassword";

const schema = z
  .object({
    email: z.string().email("E-mail inválido."),
    password: z.string(),
    confirmPassword: z
      .string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem.",
    path: ["confirmPassword"],
  });

const FirstAccessForm = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),
  });
  const { errors } = formState;
  const [loading, setLoading] = useState(false);

  const handleFirstAccess = async (values) => {
    setLoading(true);
    try {
      // Lógica para o primeiro acesso
      console.log("Primeiro acesso:", values);
    } catch (error) {
      console.error("Erro ao realizar primeiro acesso:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={handleSubmit(handleFirstAccess)}>
      <InputEmail
        {...register("email")}
        errorMessage={errors.email?.message}
        placeholder="Digite seu e-mail"
        isRequired
      />
      <InputPassword
        {...register("password")}
        errorMessage={errors.password?.message}
        placeholder="Crie uma nova senha"
        isRequired
      />
      <InputPassword
        {...register("confirmPassword")}
        errorMessage={errors.confirmPassword?.message}
        placeholder="Confirme sua nova senha"
        isRequired
      />
      <Button
        variant="shadow"
        type="submit"
        className="bg-black text-white"
        isDisabled={loading}>
        {loading ? "Carregando..." : "Confirmar"}
      </Button>
    </form>
  );
};

export default FirstAccessForm;
