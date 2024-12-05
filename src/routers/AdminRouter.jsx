import { Routes, Route } from "react-router-dom";
import Dashboard from "@/modules/Admin/pages/Dashboard";
import RegisterUser from "@/modules/Admin/pages/RegisterUser";

const AdminRouter = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-user" element={<RegisterUser />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </>
  );
};

export default AdminRouter;
