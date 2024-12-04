import { Routes, Route } from "react-router-dom";
import Dashboard from "@/modules/User/pages/Dashboard";

const UserRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default UserRouter;
