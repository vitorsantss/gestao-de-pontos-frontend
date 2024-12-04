import { Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import FirstAccessPage from "@/pages/FirstAccessPage";

const PublicRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/first-access" element={<FirstAccessPage />} />
      </Routes>
    </>
  );
};

export default PublicRouter;
