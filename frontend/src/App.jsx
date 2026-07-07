import { Routes, Route } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";

import Dashboard from "./pages/Dashboard";
import Warehouses from "./pages/Warehouses";
import Users from "./pages/Users";
import Shipments from "./pages/Shipments";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import ShipmentDetails from "./pages/ShipmentDetails";

function App() {
  return (
    <Routes>

      <Route element={<DashboardLayout />}>

        <Route
          path="/"
          element={<Dashboard />}
        />

        <Route
          path="/warehouses"
          element={<Warehouses />}
        />

        <Route
          path="/users"
          element={<Users />}
        />

        <Route
          path="/shipments"
          element={<Shipments />}
        />

        <Route
          path="/reports"
          element={<Reports />}
        />

        <Route
          path="/settings"
          element={<Settings />}
        />

        <Route
          path="/shipments/:id"
          element={<ShipmentDetails />}
        />

      </Route>

    </Routes>
  );
}

export default App;