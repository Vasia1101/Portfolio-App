import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 0;
`;

export const Grid = styled.div`
  display: grid;
  align-items: stretch;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);

  h3 {
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};
    font-size: 12pt;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${({ theme }) => (theme === 'light' ? '#707070' : '#c7c7c7')};
  }
`;

export const Content = styled.div`
  padding: 0.5rem 0 1rem;
  min-height: 150px;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const Tag = styled.span`
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  background: ${({ theme }) => (theme === 'light' ? '#f0f0f0' : '#2a2a2a')};
  color: ${({ theme }) => (theme === 'light' ? '#212121' : '#f7f7f7')};
  font-size: 0.8rem;
`;

export const Link = styled.a`
  font-weight: 600;
  color: ${({ theme }) => (theme === 'light' ? '#1a1a1a' : '#fff')};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
