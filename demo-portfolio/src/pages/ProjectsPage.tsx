import { type Project, projects as defaultProjects} from "../constants/ProjectsData";
import Heading from "../components/Heading";
import Container from "../components/Container";
import Projects from "../components/Projects";

const ProjectsPage = ({ projects = defaultProjects }: { projects?: Project[] }) => {
  return (
    <Container className="min-h-screen md:pb-10">
      <Heading>Projects</Heading>
      <Projects projects={projects} />
    </Container>
  );
};

export default ProjectsPage;
