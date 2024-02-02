import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CustomerHome from "./pages/CustomerHome";
import LoginPage from "./pages/LoginPage";
import AdminHome from "./pages/AdminHome";
import ExercisePage from "./pages/ExercisePage";
import YogaPage from "./pages/YogaPage";
import ConsultantPage from "./pages/ConsultantPage";
import AdminUsers from "./pages/AdminUsers";
import AdminEmployees from "./pages/AdminEmployees";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CustomerHome />} />
        <Route path="/auth" element={<LoginPage />} />
        <Route path="/adminHome" element={<AdminHome />} />
        <Route path="/exercise" element={<ExercisePage />} />
        <Route path="/yoga" element={<YogaPage />} />
        <Route path="/consultant" element={<ConsultantPage />} />
        <Route path="/adminUsers" element={<AdminUsers />} />
        <Route path="/adminEmployees" element={<AdminEmployees />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
