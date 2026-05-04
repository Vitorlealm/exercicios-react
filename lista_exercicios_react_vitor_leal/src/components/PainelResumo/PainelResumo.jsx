import NumeroInfo from "../NumeroInfo/NumeroInfo";
import StatusUsuario from "../StatusUsuario/StatusUsuario";
import "./PainelResumo.css";

function PainelResumo({
  numero,
  estadoUsuario,
  handleInputChange,
  handleNomeChange,
  handleAtivoToggle,
}) {
  return (
    <div className="painel-resumo">
      <h2>Resumo dos Dados Inseridos</h2>

      <div className="secao-resumo">
        <h3>Seção 1: Verificação de Número</h3>
        <div className="input-container">
          <label htmlFor="numero-input-painel">Digite um número: </label>
          <input
            id="numero-input-painel"
            type="number"
            value={numero}
            onChange={handleInputChange}
            placeholder="Digite um número"
          />
        </div>
        {numero && numero !== 0 && <NumeroInfo numero={numero} />}
      </div>

      <div className="secao-resumo">
        <h3>Seção 2: Status do Usuário</h3>
        <div className="container-flex-row">
          <div className="input-container">
            <label htmlFor="nome-input-painel">Nome: </label>
            <input
              id="nome-input-painel"
              type="text"
              value={estadoUsuario.nome}
              onChange={handleNomeChange}
              placeholder="Digite seu nome"
            />
          </div>
          <div className="toggle-container">
            <label htmlFor="ativo-toggle-painel">Ativo: </label>
            <input
              id="ativo-toggle-painel"
              type="checkbox"
              checked={estadoUsuario.ativo}
              onChange={handleAtivoToggle}
            />
          </div>
        </div>
        {estadoUsuario.nome && <StatusUsuario estadoUsuario={estadoUsuario} />}
      </div>
    </div>
  );
}

export default PainelResumo;
