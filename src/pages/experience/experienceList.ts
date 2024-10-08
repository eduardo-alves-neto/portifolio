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
    description: `- Implementação de telas com React de acordo com as demandas;
    - Leitura de APIs pelo Swagger;
    - Utilização de metodologias ágeis como kanban;
    - Adição de novas funcionalidades aos sistemas construídos;
    - Manutenção de código.`,
  },
];
