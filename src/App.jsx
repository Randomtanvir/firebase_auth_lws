import Home from "./pages/Home";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Singup from "./pages/Singup";
import ResetPass from "./pages/ResetPass";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <div>
      <div>
        <h1 className="text-center p-4 text-white bg-teal-400 text-2xl">
          fireBase
        </h1>
        <Routes>
          <Route element={<PrivateRoute />} errorElement={<div>404</div>}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/singup" element={<Singup />} />
          <Route path="/reset" element={<ResetPass />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
