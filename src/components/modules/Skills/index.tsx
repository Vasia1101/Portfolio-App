import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'providers/ThemeProvider';
import Container from 'components/ui/Container';
import Button from 'components/ui/Button';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

const Skills = ({
  id,
  title,
  imgUrl,
  description,
  buttonText,
}: {
  id: string;
  title: string;
  imgUrl: any;
  description: string;
  buttonText: string;
}) => {
  const { theme } = useTheme();

  return (
    <Wrapper id={id}>
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <Image src={imgUrl} alt="I’m John and I’m a Backend & Devops engineer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h2>{title}</h2>
          <p>{description}</p>
          <Link href="#contact" passHref>
            <Button as="a">{buttonText}</Button>
          </Link>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};

export default Skills;
