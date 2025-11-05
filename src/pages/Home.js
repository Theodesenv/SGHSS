import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const usuarioValido = "admin";
  const senhaValida = "1234";

  const handleLogin = (e) => {
    e.preventDefault();
    if (usuario === usuarioValido && senha === senhaValida) {
      setErro("");
      navigate("/dashboard");
    } else {
      setErro("Usuário ou senha incorreta");
    }
  };

  return (
    <main className="home-page d-flex align-items-center justify-content-center vh-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-10">

            <div className="card shadow p-4 text-center">

              <h1 className="mb-3">VidaPlus</h1>
              <p className="text-muted">
                Controle de pacientes, agendas e relatórios
              </p>

              <form onSubmit={handleLogin}>

                <div className="mb-3 text-start">
                  <label className="form-label">Usuário:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3 text-start">
                  <label className="form-label">Senha:</label>
                  <input
                    type="password"
                    className="form-control"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                  />
                </div>

                {erro && <p className="text-danger">{erro}</p>}

                <button type="submit" className="btn btn-primary w-100 mt-2">
                  Entrar
                </button>

              </form>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
