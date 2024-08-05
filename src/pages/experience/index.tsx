import Title from "../../components/Title/Title";
import Container from "../../components/Container/Container";
import { experienceList } from "./experienceList";
import Card, {
  CardContent,
  CardDescription,
  CardTitle,
} from "../../components/Cards/Card";

export const Experience = () => {
  return (
    <Container jsContent="start" mb="200px" mt="50px">
      <Title>Experiência</Title>

      {experienceList.map((experience, index) => {
        return (
          <Card w="400px" key={index}>
            <CardContent>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: 10,
                }}
              >
                <CardDescription color="--color-yellow-700">
                  {experience.date}
                </CardDescription>
                <CardDescription color="--color-blue-800">
                  {experience.enterprise}
                </CardDescription>
              </div>
              <div
                style={{
                  padding: 10,
                  overflow: "auto",
                }}
              >
                <CardTitle as="h2" color="--color-grey-900" fontSize="1em">
                  {experience.position}
                </CardTitle>
                <CardDescription
                  style={{
                    whiteSpace: "pre-line",
                    border: "1px solid var(--color-grey-400)",
                    borderRadius: "10px",
                    padding: "10px",
                    overflow: "auto",
                   backgroundColor: "var(--color-grey-50)",
                  }}
                  color="--color-grey-700"
                >
                  {experience.description}
                </CardDescription>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </Container>
  );
};
