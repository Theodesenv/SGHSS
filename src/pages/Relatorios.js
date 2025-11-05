import { useEffect, useState } from "react";

export default function Relatorios() {
  const [consultas, setConsultas] = useState([]);
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    setConsultas(JSON.parse(localStorage.getItem("sg_hss_consultas") || "[]"));
    setPacientes(JSON.parse(localStorage.getItem("sg_hss_pacientes") || "[]"));
  }, []);

  const getPacienteNome = (id) => pacientes.find(p => p.id === id)?.nome || "—";

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Relatórios de Consultas</h1>
      {consultas.length === 0 ? <p>Sem consultas registradas.</p> : (
        <table>
          <thead>
            <tr>
              <th>ID</th><th>Paciente</th><th>Tipo</th><th>Data</th>
            </tr>
          </thead>
          <tbody>
            {consultas.map(c => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{getPacienteNome(c.pacienteId)}</td>
                <td>{c.tipo}</td>
                <td>{c.data}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
