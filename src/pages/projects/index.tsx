import Card, {
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../../components/Cards/Card";
import Title from "../../components/Title/Title";
import Container from "../../components/Container/Container";
import Button from "../../components/Buttons/button";
import { ProjectDetails } from "./projectDetails";
import { FaGithub } from "react-icons/fa";
import ButtonIcon from "../../components/Buttons/ButtonIcon";

export const Projects = () => {
  return (
    <Container jsContent="start">
      <Title mY="30px">Projetos</Title>
      {ProjectDetails.map((project) => {
        return (
          <Card>
            <CardContent>
              <img src={project.image} />
              <div
                style={{
                  position: "absolute",
                  padding: 8,
                  maxWidth: 300,
                }}
              >
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </div>

              <CardFooter>
                <ButtonIcon>
                  <a href={project.gitHublink} target="_blank">
                    <FaGithub />
                  </a>
                </ButtonIcon>
                {project.link && (
                  <Button variation="secondary">
                    <a href={project.link} target="_blank">
                      visitar
                    </a>
                  </Button>
                )}
              </CardFooter>
            </CardContent>
          </Card>
        );
      })}
    </Container>
  );
};
