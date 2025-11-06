import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header"> {/* mantenha sua .header no CSS */}
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Visão geral</Link>
        <Link to="/cadastro">Cadastro</Link>
        <Link to="/agendamento">Agendamento</Link>
        <Link to="/relatorios">Relatórios</Link>
      </nav>
    </header>
  );
}
