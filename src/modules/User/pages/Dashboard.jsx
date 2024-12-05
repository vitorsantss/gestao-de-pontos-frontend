/* eslint-disable react-hooks/exhaustive-deps */
import ActionCard from "@/components/ActionCard";
import { UserService } from "@/services/UserService";
import { WorklogService } from "@/services/WorklogService";
import { useContext, useEffect, useState } from "react";
import TableWorklogs from "../components/TableWorklogs";
import { AuthContext } from "@/contexts/AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  const [userData, setUserData] = useState({});
  const [worklogs, setWorklogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const response = await UserService.getById(user.id);
        setUserData(response.data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    const fetchWorklogs = async () => {
      try {
        const response = await WorklogService.getAll();
        setWorklogs(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchSummary = async () => {
      try {
        const response = await WorklogService.getSummary();

        setSummary(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSummary();
    fetchWorklogs();
    fetchUser();
  }, []);

  return (
    <div className="mt-4 mx-4">
      <div className="my-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>

      <div className="flex max-y-sm flex-col xl:flex-row gap-3">
        <ActionCard
          description="Registrar ponto de jornada de trabalho"
          icon="solar:document-add-linear"
          title="Registrar Ponto"
          href="/register-worklog"
        />
      </div>

      <h2 className="text-2xl font-bold my-8">Resumo do dia</h2>
      <div className="flex max-y-sm flex-col xl:flex-row gap-3">
        {summary && (
          <>
            <ActionCard
              description="Tempo total trabalhado"
              icon="solar:time-circle-bold"
              title={summary.totalWorked || "N/A"}
            />
            <ActionCard
              description="Tempo restante"
              icon="solar:clock-bold"
              title={summary.remainingTime || "N/A"}
            />
            <ActionCard
              description="Horas extras"
              icon="solar:plus-circle-bold"
              title={summary.extraHours || "N/A"}
            />
            <ActionCard
              description="Jornada concluída"
              icon={
                summary.completed
                  ? "solar:check-circle-bold"
                  : "solar:close-circle-bold"
              }
              title={summary.completed ? "Concluída" : "Incompleta"}
            />
          </>
        )}
      </div>

      <div className="my-8">
        <h2 className="text-2xl font-bold my-4">Registros de Pontos</h2>
        <TableWorklogs
          user={userData}
          worklogs={worklogs}
          isLoading={loading}
        />
      </div>
    </div>
  );
};

export default Dashboard;
