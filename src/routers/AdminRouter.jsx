import { Routes, Route } from "react-router-dom";
import Dashboard from "@/modules/Admin/pages/Dashboard";
import Header from "@/modules/Admin/components/Header";
import RegisterUser from "@/modules/Admin/pages/RegisterUser";

const AdminRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-user" element={<RegisterUser />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </>
  );
};

export default AdminRouter;
