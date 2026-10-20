import { ContainerBox } from "../../Components/Container/Container.styled";
import {
  ProjectsBox,
  Backdrop,
  PageBox,
  Eyebrow,
  PageTitle,
  Accent,
  Intro,
  FeaturedCard,
  FeaturedImage,
  FeaturedContent,
  Badge,
  ProjectTitle,
  ProjectSubtitle,
  ProjectText,
  Tags,
  Tag,
  Actions,
  PrimaryLink,
  SecondaryLink,
  SectionHeader,
  SectionTitle,
  SectionNote,
  ProjectsGrid,
  ProjectCard,
  ProjectImage,
  CardBody,
} from "./Projects.styled";

const projects = [
  {
    title: "Pets — Team Project",
    description: "Full-stack pet adoption platform developed with a team. As Team Lead and developer, I coordinated tasks and contributed to authentication UI and backend endpoints.",
    image: "petly",
    featured: true,
    tags: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB"],
    demo: "https://pets-front-end.vercel.app/",
    github: "https://github.com/yanakhorolska/pets_front-end",
    backend: "https://github.com/yanakhorolska/pets_back-end",
  },
  {
    title: "Weekendly",
    description: "React and TypeScript app for organizing saved places, with place details, state management, a mock API and a tested component architecture.",
    image: "weekendly",
    featured: true,
    tags: ["React", "TypeScript", "Redux Toolkit", "Vite", "Vitest"],
    github: "https://github.com/yanakhorolska/Weekendly-App",
  },
  {
    title: "Phonebook",
    description: "React contacts application showcasing authenticated navigation, Redux Toolkit state management and API integration.",
    image: "portfolio",
    tags: ["React", "Redux Toolkit", "React Router", "Axios", "Material UI"],
    github: "https://github.com/yanakhorolska/phonebook",
  },
  {
    title: "Weather App",
    description: "Responsive React weather application with city search and forecast data from the OpenWeatherMap API.",
    image: "weather",
    tags: ["React", "JavaScript", "Axios", "OpenWeatherMap API"],
    demo: "https://yanakhorolska.github.io/weather--app/",
    github: "https://github.com/yanakhorolska/weather--app",
  },
  {
    title: "My Profile — Portfolio Website",
    description: "This responsive React portfolio, featuring theme customization, lazy-loaded pages and a working contact form.",
    image: "portfolio",
    tags: ["React", "Emotion", "React Router", "Formspree"],
    demo: "https://me-two-phi.vercel.app/",
    github: "https://github.com/yanakhorolska/my-profile",
  },
  {
    title: "DevApply — In Progress",
    description: "An early-stage job application tracker. The repository currently contains the React/TypeScript client setup, an Express server scaffold and the product specification.",
    image: "weekendly",
    tags: ["React", "TypeScript", "Express", "Work in progress"],
    github: "https://github.com/yanakhorolska/DevApply-Job-Application-Tracker",
  },
];

export const Projects = () => {
  return (
    <ProjectsBox>
      <Backdrop>
        <PageBox>
          <ContainerBox>
            <Eyebrow>Portfolio</Eyebrow>
            <PageTitle>My <Accent>Projects</Accent></PageTitle>
            <Intro>
              Selected projects I&apos;ve built while learning and growing as a front-end and full-stack developer.
            </Intro>

            <FeaturedCard>
              <FeaturedImage />
              <FeaturedContent>
                <Badge>Featured Project</Badge>
                <ProjectTitle>TaskFlow</ProjectTitle>
                <ProjectSubtitle>Full-Stack Productivity App</ProjectSubtitle>
                <ProjectText>
                  A task management application for organizing daily work, tracking progress,
                  and practicing modern Angular architecture.
                </ProjectText>
                <Tags>
                  {["Angular", "TypeScript", "RxJS", "Signals", "SCSS", "REST API"].map((tag) => <Tag key={tag}>{tag}</Tag>)}
                </Tags>
                <Actions>
                  <PrimaryLink href="https://task-flow-dun-seven-81.vercel.app/" target="_blank" rel="noreferrer">Live Demo</PrimaryLink>\n                  <SecondaryLink href="https://github.com/yanakhorolska/task-flow" target="_blank" rel="noreferrer">GitHub</SecondaryLink>
                </Actions>
              </FeaturedContent>
            </FeaturedCard>

            <SectionHeader>
              <SectionTitle>More Projects</SectionTitle>
              <SectionNote>Exploring ideas, building solutions, and learning something new</SectionNote>
            </SectionHeader>

            <ProjectsGrid>
              {projects.map((project) => (
                <ProjectCard key={project.title}>
                  <ProjectImage variant={project.image} />
                  <CardBody>
                    {project.featured && <Badge>Featured Project</Badge>}\n                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectText>{project.description}</ProjectText>
                    <Tags>
                      {project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
                    </Tags>
                    <Actions>
                      {project.demo && <PrimaryLink href={project.demo} target="_blank" rel="noreferrer">Live Demo</PrimaryLink>}
                      <SecondaryLink href={project.github} target="_blank" rel="noreferrer">{project.backend ? "Frontend" : "GitHub"}</SecondaryLink>\n                      {project.backend && <SecondaryLink href={project.backend} target="_blank" rel="noreferrer">Backend</SecondaryLink>}
                    </Actions>
                  </CardBody>
                </ProjectCard>
              ))}
            </ProjectsGrid>
          </ContainerBox>
        </PageBox>
      </Backdrop>
    </ProjectsBox>
  );
};
