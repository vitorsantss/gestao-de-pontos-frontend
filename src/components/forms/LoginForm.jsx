
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Spinner } from "@nextui-org/react";
import InputEmail from "@/components/InputEmail";
import InputPassword from "@/components/InputPassword";
import { AuthContext } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";

const schema = z.object({
  email: z.string().email("E-mail inválido."),
  password: z.string(),
});

const LoginForm = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),
  });
  const { errors } = formState;

  const { signIn, signed } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (values) => {
    setLoading(true);
    try {
      await signIn(values);
      
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      
    } finally {
      setLoading(false);
    }
  };

  if (signed) {
    return <Navigate to="/" replace />;
  }

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(handleSignIn)}>
      <InputEmail
        {...register("email")}
        errorMessage={errors.email?.message}
        placeholder="Digite seu e-mail"
        isRequired
      />
      <InputPassword
        {...register("password")}
        errorMessage={errors.password?.message}
        placeholder="Digite sua senha"
        isRequired
      />
      <Button
        variant="shadow"
        type="submit"
        className="bg-black text-white mt-4"
        isDisabled={loading}>
        {loading ? <Spinner /> : "Entrar"}
      </Button>
    </form>
  );
};

export default LoginForm;
