import { Routes, Route } from "react-router-dom";
import LoginPage from "@/pages/LoginPage";

const PublicRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </>
  );
};

export default PublicRouter;
