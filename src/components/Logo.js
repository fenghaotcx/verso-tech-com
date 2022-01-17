import styled from 'styled-components';
import PAVOImg from '../public/icon/logo_pavo.svg';

const LogoDiv = styled.div`
  font-size: 24px;
  line-height: 150%;
  display: flex;
  align-items: center;
  color: ${({theme})=> theme.colors.font};
  &>.logo {
    width: ${({isMobile})=> isMobile?'97px':'110px'};
  }
`

const Logo = ({isMobile}) => <LogoDiv isMobile={isMobile}>
  <img className='logo' src={PAVOImg} alt="PAVO" />
  </LogoDiv>


export default Logo