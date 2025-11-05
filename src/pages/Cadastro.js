import { useState, useEffect } from "react";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [pacientes, setPacientes] = useState([]);

  // carrega do localStorage ao montar
  useEffect(() => {
    const stored = localStorage.getItem("sg_hss_pacientes");
    if (stored) setPacientes(JSON.parse(stored));
  }, []);

  // atualiza localStorage sempre que pacientes mudarem
  useEffect(() => {
    localStorage.setItem("sg_hss_pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const novo = { id: Date.now(), nome: nome.trim(), idade: Number(idade) };
    setPacientes([...pacientes, novo]);
    setNome("");
    setIdade("");
  };

  const remover = (id) => {
    setPacientes(pacientes.filter(p => p.id !== id));
  };

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Cadastro de Pacientes</h1>

      <form onSubmit={handleSubmit} style={{ margin: "1rem 0", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        <input
          placeholder="Nome do paciente"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          style={{ padding: "0.6rem", minWidth: "220px" }}
        />
        <input
          placeholder="Idade"
          type="number"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
          required
          style={{ padding: "0.6rem", width: "100px" }}
        />
        <button type="submit" style={{ padding: "0.6rem 1rem" }}>Adicionar</button>
      </form>

      <h2>Pacientes cadastrados</h2>
      <ul>
        {pacientes.length === 0 ? <p>Nenhum paciente cadastrado.</p> :
          pacientes.map(p => (
            <li key={p.id} style={{ marginBottom: '0.5rem' }}>
              {p.nome} — {p.idade} anos
              <button onClick={() => remover(p.id)} style={{ marginLeft: '1rem' }}>Remover</button>
            </li>
          ))
        }
      </ul>
    </main>
  );
}
