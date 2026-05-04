import "./NumeroInfo.css";

function NumeroInfo({ numero }) {
  const tipo = numero === 0 ? "Zero" : numero % 2 === 0 ? "Par" : "Ímpar";

  return (
    <div className={`numero-info numero-info--${tipo.toLowerCase()}`}>
      <p>
        Número recebido: {numero} → {tipo}
      </p>
    </div>
  );
}

export default NumeroInfo;
