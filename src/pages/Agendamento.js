import { useState, useEffect } from "react";

export default function Agendamento() {
  const [pacientes, setPacientes] = useState([]);
  const [pacienteId, setPacienteId] = useState("");
  const [tipo, setTipo] = useState("Consulta Geral");
  const [data, setData] = useState("");
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
    try {
      const storedPacientes = JSON.parse(localStorage.getItem("sg_hss_pacientes") || "[]");
      const storedConsultas = JSON.parse(localStorage.getItem("sg_hss_consultas") || "[]");
      setPacientes(storedPacientes);
      setConsultas(storedConsultas);
    } catch (err) {
      console.error("Erro ao carregar localStorage:", err);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!pacienteId || !data) {
      alert("Selecione um paciente e uma data!");
      return;
    }

    const novaConsulta = {
      id: Date.now(),
      pacienteId: Number(pacienteId),
      tipo,
      data,
    };

    const atualizadas = [...consultas, novaConsulta];
    setConsultas(atualizadas);
    localStorage.setItem("sg_hss_consultas", JSON.stringify(atualizadas));

    setPacienteId("");
    setTipo("Consulta Geral");
    setData("");
  };

  const getPacienteNome = (id) => {
    const p = pacientes.find((pac) => pac.id === id);
    return p ? p.nome : "Paciente não encontrado";
  };

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Agendamento de Consultas</h1>

      {pacientes.length === 0 ? (
        <p>Cadastre pelo menos um paciente antes de agendar.</p>
      ) : (
        <>
          <form
            onSubmit={handleSubmit}
            style={{
              marginBottom: "1rem",
              display: "flex",
              gap: "0.5rem",
              flexWrap: "wrap",
            }}
          >
            <select
              value={pacienteId}
              onChange={(e) => setPacienteId(e.target.value)}
              required
              style={{ padding: "0.6rem" }}
            >
              <option value="">Selecione o paciente</option>
              {pacientes.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.nome} ({p.idade} anos)
                </option>
              ))}
            </select>

            <select
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              style={{ padding: "0.6rem" }}
            >
              <option>Consulta Geral</option>
              <option>Consulta Cardiológica</option>
              <option>Exame Laboratorial</option>
              <option>Retorno</option>
            </select>

            <input
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
              required
              style={{ padding: "0.6rem" }}
            />

            <button type="submit" style={{ padding: "0.6rem 1rem" }}>
              Agendar
            </button>
          </form>

          <h2>Consultas Agendadas</h2>

          {consultas.length === 0 ? (
            <p>Nenhuma consulta registrada.</p>
          ) : (
            <ul>
              {consultas.map((c) => (
                <li key={c.id}>
                  📅 {new Date(c.data).toLocaleDateString()} — {c.tipo} — {getPacienteNome(c.pacienteId)}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </main>
  );
}
