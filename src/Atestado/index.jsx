import React, { useState } from 'react';  
import './styles.css'; // Import your CSS file  

const Atestado = () => {  
  const [dataInicial, setDataInicial] = useState('');  
  const [dataFinal, setDataFinal] = useState('');  
  const [justificativa, setJustificativa] = useState('');  

  return (  
    <div className="atestado-container">  
      <h1>Atestado</h1>  
      <div className="form-group">  
        <label>Aluno:</label>  
        <input type="text" />  
      </div>  
      <div className="form-group">  
        <label>Turma:</label>  
        <input type="text" />  
      </div>  
      <div className="form-group">  
        <label>Curso:</label>  
        <input type="text" />  
      </div>  
      <div className="form-group">  
        <label>RA:</label>  
        <input type="text" />  
      </div>  
      <div className="date-group">  
        <div className="date-input">  
          <label>Data inicial</label>  
          <input  
            type="text"  
            placeholder="mm/dd/yyyy"  
            value={dataInicial}  
            onChange={(e) => setDataInicial(e.target.value)}  
          />  
        </div>  
        <div className="date-input">  
          <label>Data final</label>  
          <input  
            type="text"  
            placeholder="mm/dd/yyyy"  
            value={dataFinal}  
            onChange={(e) => setDataFinal(e.target.value)}  
          />  
        </div>  
      </div>  
      <div className="form-group">  
        <label>Justificativa:</label>  
        <textarea  
          value={justificativa}  
          onChange={(e) => setJustificativa(e.target.value)}  
        />  
      </div>  
      <div className="upload-section">  
        <label>Imagem:</label>  
        <div className="upload-area">  
          <span>⬆️</span>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default Atestado;