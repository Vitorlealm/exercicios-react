import { useState } from "react";
import "./App.css";
import NumeroInfo from "./components/NumeroInfo/NumeroInfo";
import StatusUsuario from "./components/StatusUsuario/StatusUsuario";
import ClassificacaoNota from "./components/ClassificacaoNota/ClassificacaoNota";
import Produto from "./components/Produto/Produto";
import PainelResumo from "./components/PainelResumo/PainelResumo";

function App() {
  const [numero, setNumero] = useState(null);
  const [estadoUsuario, setEstadoUsuario] = useState({
    nome: "",
    ativo: false,
  });
  const [nota, setNota] = useState(null);
  const [produtos, setProdutos] = useState([
    { id: 1, nome: "Notebook", quantidade: 5 },
    { id: 2, nome: "Mouse", quantidade: 0 },
    { id: 3, nome: "Teclado", quantidade: 3 },
  ]);

  const handleInputChange = (e) => {
    setNumero(Number(e.target.value) || 0);
  };

  const handleNomeChange = (e) => {
    setEstadoUsuario({ ...estadoUsuario, nome: e.target.value });
  };

  const handleAtivoToggle = () => {
    setEstadoUsuario({ ...estadoUsuario, ativo: !estadoUsuario.ativo });
  };

  const handleNotaChange = (e) => {
    setNota(Number(e.target.value) || 0);
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
          {numero && numero !== 0 && <NumeroInfo numero={numero} />}
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

        <div className="container-exercicio">
          <h1>Exercício 3: Classificação de Nota</h1>
          <div className="input-container">
            <label htmlFor="nota-input">Digite uma nota: </label>
            <input
              id="nota-input"
              type="number"
              min="0"
              max="10"
              value={nota}
              onChange={handleNotaChange}
              placeholder="nota de 0 a 10"
            />
          </div>
          {nota && <ClassificacaoNota nota={nota} />}
        </div>

        <div className="container-exercicio">
          <h1>Exercício 4: Produto em Estoque</h1>
          <div className="produtos-container">
            {produtos.map((produto) => (
              <Produto
                key={produto.id}
                nome={produto.nome}
                quantidade={produto.quantidade}
              />
            ))}
          </div>
        </div>

        <div className="container-exercicio">
          <h1>Exercício 5: Desafio Integrador</h1>
          <PainelResumo
            numero={numero}
            estadoUsuario={estadoUsuario}
            handleInputChange={handleInputChange}
            handleNomeChange={handleNomeChange}
            handleAtivoToggle={handleAtivoToggle}
          />
        </div>
      </div>
    </>
  );
}

export default App;
