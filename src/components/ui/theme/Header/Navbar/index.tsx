import Link from 'next/link';
import { useTheme } from 'providers/ThemeProvider';
import Container from 'components/ui/Container';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, Brand } from './styles';

const Navbar = () => {
  const { theme } = useTheme();

  return (
    <Wrapper as={Container}>
      <Link href="/" passHref>
        <Brand as="a" theme={theme}>
          Vasyl Haida
        </Brand>
      </Link>
      <NavbarLinks desktop />
    </Wrapper>
  );
};

export default Navbar;
