import { styled } from '@mui/material/styles';
import { Link } from '@mui/material';
import HeaderLogo from './HeaderLogo';

const HeaderContainer = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding: 40px;
  box-sizing: border-box;
`;

const StyledLink = styled(Link)`
  font-size: 16px;
  font-weight: 600;
  color: #1a1a1a;
  text-decoration: none;
`;

export default function Header() {
  return (
    <header>
      <HeaderContainer>
        <StyledLink href="/">
          <HeaderLogo />
        </StyledLink>
        <StyledLink href="https://apps.apple.com/us/app/callin-social-podcasting/id1568011211">
          Download
        </StyledLink>
      </HeaderContainer>
    </header>
  );
}