interface ProjectDetailsProps {
  title: string;
  description: string;
  image: string;
  gitHublink?: string;
  link?: string;
  tags?: string[];
}

export const ProjectDetails: ProjectDetailsProps[] = [
  {
    title: "Word wise",
    description:
      "Este projeto é um sistema de gerenciamento de hospedagem em hoteis",
    image: "../../public/projectImgs/wordWise.png",
    gitHublink: "https://github.com/eduardo-alves-neto/projectReact",
    link: "https://oasis-project-react.netlify.app/login",
  },
  {
    title: "TMDB Filmes",
    description:
      "Este projeto é um site para aluguel de filmes, desenvolvido utilizando Next.js ",
    image: "../../public/projectImgs/TMDBfilmes.png",
    gitHublink: "https://github.com/eduardo-alves-neto/projectMAP",
  },
  {
    title: "AUTH JWT",
    description:
      "Este projeto é uma aplicação para autenticação de usuários utilizando JSON Web Tokens (JWT)",
    image: "../../public/projectImgs/authJWT.png",
  },
];
