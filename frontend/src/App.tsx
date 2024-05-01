import EmployeeTable from "./components/employees/employee-table";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import Layout from "./components/layout/layout";
import Login from "./components/login/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="employeetable" element={<EmployeeTable />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
