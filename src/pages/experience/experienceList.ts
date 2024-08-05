interface experienceListProps {
  position: string;
  date: string;
  description: string;
  enterprise?: string;
}

export const experienceList: experienceListProps[] = [
  {
    date: "2022 - 2023",
    position: "Estágio em desenvolvimento Front-end",
    description: `-GeneXus18;
    -React
    -TypeScript
    -Material-UI
    -Swagger
    -Kanban
    -Código limpo`,
    enterprise: "-Agro CRM",
  },
  {
    date: "2023 - Atual",
    position: "Desenvolvedor Front-end",
    enterprise: "-Agro CRM",
    description: `- Implementação de Telas através da Biblioteca React de acordo com as demandas;
    - Consumo de Dados e Leitura de APIs pelo Swagger;
    - Utilização de Metodologias ágeis como Kanban;
    - Adição de Novas funcionalidades aos Sistemas Construídos;
    - Manutenção de Código através de Boas Práticas de Código limpo.`,
  },
];
