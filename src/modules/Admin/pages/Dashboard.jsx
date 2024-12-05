import { useEffect, useState } from "react";
import ActionCard from "../../../components/ActionCard";
import TableUsers from "../components/TableUsers";
import { UserService } from "@/services/UserService";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await UserService.getAll();
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="mt-4 mx-4">
      <div className="my-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>

      <div className="flex max-y-sm flex-col xl:flex-row gap-3">
        <ActionCard
          description="Cadastre novos usuários para o sistema"
          icon="solar:user-rounded-linear"
          title="Cadastrar Usuário"
          href="/create-user"
        />
      </div>

      <div className="my-8">
        <h2 className="text-2xl font-bold my-4">Usuários</h2>
        <TableUsers users={users} />
      </div>
    </div>
  );
};

export default Dashboard;
