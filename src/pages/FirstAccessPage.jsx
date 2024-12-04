import { Button, Divider } from "@nextui-org/react";
import { Link } from "react-router-dom";
import FirstAccessForm from "@/components/forms/FirstAccessForm";

const FirstAccessPage = () => {
  return (
    <div className="flex h-full w-full items-center justify-center mt-36">
      <div className="flex w-full max-w-sm flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
        <p className="pb-2 text-2xl font-medium">Faça seu primeiro acesso</p>
        <FirstAccessForm />
        <div className="flex items-center gap-4 py-2">
          <Divider className="flex-1" />
          <p className="shrink-0 text-tiny text-default-500">OU</p>
          <Divider className="flex-1" />
        </div>
        <Link to="/login">
          <div className="flex flex-col">
            <Button variant="bordered">Entrar</Button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FirstAccessPage;
