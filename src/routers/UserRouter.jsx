import { Routes, Route } from "react-router-dom";
import Dashboard from "@/modules/User/pages/Dashboard";
import RegisterWorklog from "@/modules/User/pages/RegisterWorklog";

const UserRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register-worklog" element={<RegisterWorklog />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </>
  );
};

export default UserRouter;
