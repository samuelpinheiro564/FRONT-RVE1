import React, { useState } from "react";
import "./styles.css";
const App = () => {
  const [student, setStudent] = useState("");
  const [course, setCourse] = useState("");
  const [classGroup, setClassGroup] = useState("");
  const [ra, setRa] = useState("");
  const [teacherSignature, setTeacherSignature] = useState("");
  const [qualityAnalystSignature, setQualityAnalystSignature] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [history, setHistory] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = `${time} ${date}`;
    setHistory([...history, newEntry]);
    setDate("");
    setTime("");
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#f8f8f8" }}>
      <h1>JUSTIFICATIVA SAÍDA</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Aluno:</label>
          <input
            type="text"
            value={student}
            onChange={(e) => setStudent(e.target.value)}
          />
        </div>
        <div>
          <label>Curso:</label>
          <input
            type="text"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
        </div>
        <div>
          <label>Turma:</label>
          <input
            type="text"
            value={classGroup}
            onChange={(e) => setClassGroup(e.target.value)}
          />
        </div>
        <div>
          <label>RA:</label>
          <input
            type="text"
            value={ra}
            onChange={(e) => setRa(e.target.value)}
          />
        </div>
        <div>
          <label>Assinatura do professor:</label>
          <input
            type="text"
            value={teacherSignature}
            onChange={(e) => setTeacherSignature(e.target.value)}
          />
        </div>
        <div>
          <label>Assinatura do analista de qualidade:</label>
          <input
            type="text"
            value={qualityAnalystSignature}
            onChange={(e) => setQualityAnalystSignature(e.target.value)}
          />
        </div>
        <div>
          <label>Data:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <label>Hora:</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <button type="submit">Enviar Saída</button>
      </form>
      <h2>Histórico de Saídas e Atestados</h2>
      <ul>
        {history.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
