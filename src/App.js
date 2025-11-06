import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Cadastro from "./pages/Cadastro";
import Relatorios from "./pages/Relatorios";
import Agendamento from "./pages/Agendamento";
import Home from "./pages/Home";
import "./App.css"; 

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Home COMO TELA INICIAL */}
        <Route path="/" element={<Home />} />

        {/* Dashboard em /dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Demais rotas */}
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/agendamento" element={<Agendamento />} />
        <Route path="/relatorios" element={<Relatorios />} />
      </Routes>
    </Router>
  );
}

export default App;
