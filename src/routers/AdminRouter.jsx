import { Routes, Route } from "react-router-dom";
import Dashboard from "@/modules/Admin/pages/Dashboard";
import RegisterUser from "@/modules/Admin/pages/RegisterUser";
import Header from "@/components/Header";

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
