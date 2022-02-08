// import { Wrapper } from './styles';
import Container from 'components/ui/Container';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 0;
`;

const Project = () => {
  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
    </Wrapper>
  );
};

export default Project;
