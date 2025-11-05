import { useEffect, useState } from "react";

export default function Dashboard() {
  const [pacientes, setPacientes] = useState([]);
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
    const p = JSON.parse(localStorage.getItem("sg_hss_pacientes") || "[]");
    const c = JSON.parse(localStorage.getItem("sg_hss_consultas") || "[]");
    setPacientes(p);
    setConsultas(c);
  }, []);

 
  const faturamento = consultas.length * 150;

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Visão Geral do Sistema de Saúde</h1>
      <div className="cards-container">
        <div className="card">
          <h3>Pacientes</h3>
          <p>{pacientes.length}</p>
        </div>
        <div className="card">
          <h3>Consultas</h3>
          <p>{consultas.length}</p>
        </div>
        <div className="card">
          <h3>Faturamento</h3>
          <p>R$ {faturamento.toLocaleString()}</p>
        </div>
      </div>
    </main>
  );
}
