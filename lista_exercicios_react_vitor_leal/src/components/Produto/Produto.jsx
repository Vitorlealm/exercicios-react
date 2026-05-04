import "./Produto.css";

function Produto({ nome, quantidade }) {
  const estaEmEstoque = quantidade > 0;

  return (
    <div
      className={`produto ${estaEmEstoque ? "produto-estoque" : "produto-esgotado"}`}
    >
      <h3>{nome}</h3>
      <p>Quantidade: {quantidade}</p>
      <p className="status">
        {estaEmEstoque ? "Em estoque" : "Produto esgotado"}
      </p>
      {estaEmEstoque && (
        <p className="mensagem-adicional">✓ Disponível para compra</p>
      )}
    </div>
  );
}

export default Produto;
