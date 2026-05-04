# exercicios-react

PARA RODAR A APLICAÇÃO VITE:
Clonar repositorio e no terminal na pasta raiz em "lista_exercicios_react_vitor_leal" instalar as dependencias com "npm install" e depois para rodar "npm run dev".

DESCRIÇÃO DA ATIVIDADE

Exercício 1 – Par, Ímpar ou Zero (2,0 pontos)
Descrição
Crie um componente chamado NumeroInfo.jsx que receba uma prop chamada numero.

Requisitos
Exibir o número recebido
Verificar se o número é:
Zero
Par
Ímpar
Exibir o resultado corretamente
Regras
Utilizar operador ternário
Criar um arquivo CSS próprio (NumeroInfo.css)
Aplicar estilos diferentes para cada caso
Exemplo esperado
Número recebido: 0 → Zero
Número recebido: 4 → Par
Número recebido: 7 → Ímpar

Exercício 2 – Status de Usuário (2,0 pontos)
Descrição
Crie um componente chamado StatusUsuario.jsx.

Requisitos
Se o usuário estiver ativo:
Exibir: "Usuário ativo: nome"
Se não estiver:
Exibir: "Usuário inativo"
Regras
Usar renderização condicional
Criar CSS próprio
Destacar:
ativo em verde
inativo em vermelho
Exercício 3 – Classificação de Nota (2,0 pontos)
Descrição
Crie um componente chamado ClassificacaoNota.jsx.

Regras de classificação
nota >= 9 → Excelente
nota >= 7 → Bom
nota >= 5 → Regular
abaixo de 5 → Insuficiente
Requisitos
Exibir a nota
Exibir a classificação
Usar operador ternário encadeado
Diferencial
Aplicar cores diferentes para cada classificação

Exercício 4 – Produto em Estoque (2,0 pontos)
Descrição
Crie um componente chamado Produto.jsx.

Requisitos
Exibir o nome do produto
Se quantidade > 0:
Exibir "Em estoque"
Se quantidade === 0:
Exibir "Produto esgotado"
Regras
Usar operador && para exibir mensagem adicional quando houver estoque
Criar CSS para diferenciar visualmente os estados
Exercício 5 – Desafio Integrador (2,0 pontos)
Descrição
Criar um componente chamado PainelResumo.jsx que utilize pelo menos dois componentes criados anteriormente.

Requisitos
Importar e utilizar componentes
Organizar visualmente em seções
Aplicar CSS global e CSS local
Passar props corretamente
Avaliação
Será considerado:

organização do código
reutilização de componentes
clareza da interface
funcionamento correto das condições
