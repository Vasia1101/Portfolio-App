import Image from 'next/image';
import Container from 'components/ui/Container';
import social from './social.json';
import TelegramIcon from 'assets/social/telegram.svg';
import GithubIcon from 'assets/social/github.svg';
import LinkedingIcon from 'assets/social/linkeding.svg';
import { Wrapper, Flex, Links, Details } from './styles';

const icons = {
  Telegram: TelegramIcon,
  Github: GithubIcon,
  Linkeding: LinkedingIcon,
};

const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>Vasyl Haida</h2>
        <span>
          © All rights are reserved | {new Date().getFullYear()} | Made with{' '}
          <span aria-label="love" role="img">
            💖
          </span>{' '}
          by{' '}
          <a
            href="https://drive.google.com/file/d/1Ph7BOqecu716NtDZh6doY3cDE0FdlxQ9/view?usp=sharing"
            rel="noopener noreferrer"
            target="_blank"
          >
            Vasilij Haida
          </a>
        </span>
      </Details>
      <Links>
        {social.map(({ id, name, link }) => (
          <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
            <Image width={24} height={24} layout="fixed" src={icons[name]} alt={name} />
          </a>
        ))}
      </Links>
    </Flex>
  </Wrapper>
);

export default Footer;
