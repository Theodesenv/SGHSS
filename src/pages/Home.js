import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  // Usuário e senha válidos
  const usuarioValido = "admin";
  const senhaValida = "1234";

  const handleLogin = (e) => {
    e.preventDefault();
    if (usuario === usuarioValido && senha === senhaValida) {
      setErro("");
      navigate("/dashboard"); // Redireciona para Dashboard
    } else {
      setErro("Usuário ou senha incorreta");
    }
  };

  return (
    <main className="home-page">
      <div className="home-bg">
        <div className="home-box">
          <h1>VidaPlus</h1>
          <p>Controle completo de pacientes, agendas e relatórios.</p>

          <form onSubmit={handleLogin} className="login-form">
            <label>Usuário:</label>
            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              required
            />

            <label>Senha:</label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />

            {erro && <p className="erro">{erro}</p>}

            <button type="submit" className="home-btn">Entrar</button>
          </form>
        </div>
      </div>
    </main>
  );
}
