import { useState } from "react";
import "./App.css";
import NumeroInfo from "./components/NumeroInfo/NumeroInfo";
import StatusUsuario from "./components/StatusUsuario/StatusUsuario";

function App() {
  const [numero, setNumero] = useState(0);
  const [estadoUsuario, setEstadoUsuario] = useState({
    nome: "",
    ativo: false,
  });

  const handleInputChange = (e) => {
    setNumero(Number(e.target.value) || 0);
  };

  const handleNomeChange = (e) => {
    setEstadoUsuario({ ...estadoUsuario, nome: e.target.value });
  };

  const handleAtivoToggle = () => {
    setEstadoUsuario({ ...estadoUsuario, ativo: !estadoUsuario.ativo });
  };

  return (
    <>
      <div className="flex-column">
        <div className="container-exercicio">
          <h1>Exercício 1: Par, Ímpar ou Zero</h1>
          <div className="input-container">
            <label htmlFor="numero-input">Digite um número: </label>
            <input
              id="numero-input"
              type="number"
              value={numero}
              onChange={handleInputChange}
              placeholder="Digite um número"
            />
          </div>
          <NumeroInfo numero={numero} />
        </div>

        <div className="container-exercicio">
          <h1>Exercício 2: Status de Usuário</h1>
          <div className="container-flex-row">
            <div className="input-container">
              <label htmlFor="nome-input">Nome: </label>
              <input
                id="nome-input"
                type="text"
                value={estadoUsuario.nome}
                onChange={handleNomeChange}
                placeholder="Digite seu nome"
              />
            </div>
            <div className="toggle-container">
              <label htmlFor="ativo-toggle">Ativo: </label>
              <input
                id="ativo-toggle"
                type="checkbox"
                checked={estadoUsuario.ativo}
                onChange={handleAtivoToggle}
              />
            </div>
          </div>
          {estadoUsuario.nome && (
            <StatusUsuario estadoUsuario={estadoUsuario} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
