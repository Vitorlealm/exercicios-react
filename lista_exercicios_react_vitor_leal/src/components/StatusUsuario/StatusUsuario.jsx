import "./StatusUsuario.css";

function StatusUsuario({ estadoUsuario }) {
  const status = estadoUsuario.ativo ? "ativo" : "inativo";
  const mensagem = `Usuário '${estadoUsuario.nome}' status: ${status}`;

  const className = estadoUsuario.ativo ? "status-ativo" : "status-inativo";

  return (
    <div className={`status-usuario ${className}`}>
      <p>{mensagem}</p>
    </div>
  );
}

export default StatusUsuario;
