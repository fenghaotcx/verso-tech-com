import styled from 'styled-components'
import logoImg from '../public/icon/Logo.svg'

const LogoDiv = styled.div`
  font-family: 'Poppins-Bold';
  font-weight: bold;
  font-size: 24px;
  line-height: 150%;
  display: flex;
  align-items: center;
  color: ${({theme})=> theme.colors.font};
  & img {
    width: 26px;
    margin-right: 5px;
  }
`

const Logo = ({isMobile}) => <LogoDiv isMobile={isMobile}><img src = {logoImg} alt = "logo" />PAVO</LogoDiv>


export default Logo