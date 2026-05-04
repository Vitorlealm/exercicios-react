import "./ClassificacaoNota.css";

function ClassificacaoNota({ nota }) {
  const classificacao =
    nota >= 9
      ? "Excelente"
      : nota >= 7
        ? "Bom"
        : nota >= 5
          ? "Regular"
          : "Insuficiente";

  const className =
    nota >= 9
      ? "nota-excelente"
      : nota >= 7
        ? "nota-bom"
        : nota >= 5
          ? "nota-regular"
          : "nota-insuficiente";

  return (
    <div className={`classificacao-nota ${className}`}>
      <p>
        Nota: {nota} → {classificacao}
      </p>
    </div>
  );
}

export default ClassificacaoNota;
