import { Routes, Route } from "react-router-dom";
import Dashboard from "@/modules/User/pages/Dashboard";

const UserRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </>
  );
};

export default UserRouter;
