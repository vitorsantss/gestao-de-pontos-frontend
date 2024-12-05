import { Route, Routes } from "react-router-dom";
import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";
import PublicRouter from "@/routers/PublicRouter";
import UserRouter from "@/routers/UserRouter";
import AdminRouter from "@/routers/AdminRouter";

const AppRouter = () => {
  const { signed, user } = useContext(AuthContext);



  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Routes>
          {!signed ? (
            <Route path="/*" element={<PublicRouter />} />
          ) : user.role === "USER" ? (
            <Route path="/*" element={<UserRouter />} />
          ) : user.role === "ADMIN" ? (
            <Route path="/*" element={<AdminRouter />} />
          ) : null}
        </Routes>
      </main>
    </div>
  );
};

export default AppRouter;
