import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routers/AppRouter";
import { AuthProvider } from "./contexts/AuthContext";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
