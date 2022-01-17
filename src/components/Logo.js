import styled from 'styled-components'
import logoImg from '../public/icon/Logo.svg'
import PAVOImg from '../public/icon/PAVO.svg'

const LogoDiv = styled.div`
  font-size: 24px;
  line-height: 150%;
  display: flex;
  align-items: center;
  color: ${({theme})=> theme.colors.font};
  &>.logo {
    width: 40px;
    margin-right: 4px;
  }
  &>.pavo {
    width: 64px;
  }
`

const Logo = ({isMobile}) => <LogoDiv isMobile={isMobile}>
  <img className='logo' src = {logoImg} alt = "PAVO" />
  <img className='pavo' src={PAVOImg} alt="PAVO" />
  </LogoDiv>


export default Logo