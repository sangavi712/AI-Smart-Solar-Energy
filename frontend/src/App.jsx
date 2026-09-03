import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import SolarMonitoring from "./pages/SolarMonitoring";
import EnergyUsage from "./pages/EnergyUsage";
import Battery from "./pages/Battery";
import Analytics from "./pages/Analytics";
import Savings from "./pages/Savings";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <Navigate
              to="/login"
              replace
            />
          }
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
        <Route
          path="/solar-monitoring"
          element={<SolarMonitoring />}
        />
        <Route
          path="/energy-usage"
          element={<EnergyUsage />}
        />
        <Route
          path="/battery"
          element={<Battery />}
        />
        <Route
          path="/analytics"
          element={<Analytics />}
        />
        <Route
          path="/savings"
          element={<Savings />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;