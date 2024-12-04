
import LoginForm from "@/components/forms/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex h-full w-full items-center justify-center mt-36">
      <div className="flex w-full max-w-sm flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
        <p className="pb-2 text-2xl font-medium">Faça seu login</p>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
