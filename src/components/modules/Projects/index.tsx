import { useTheme } from 'providers/ThemeProvider';
import Container from 'components/ui/Container';
import { Card } from 'components/ui/Card';
import projects from 'data/projects';
import { Wrapper, Grid, Item, Content, Tags, Tag, Link } from './styles';

const Project = () => {
  const { theme } = useTheme();

  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Grid>
        {projects.map((project) => (
          <Item key={project.title} theme={theme}>
            <Card theme={theme}>
              <Content>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </Content>
              <Tags>
                {project.stack.map((item) => (
                  <Tag key={item} theme={theme}>
                    {item}
                  </Tag>
                ))}
              </Tags>
              <Link href={project.link} target="_blank" rel="noopener noreferrer" theme={theme}>
                View project
              </Link>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Project;
