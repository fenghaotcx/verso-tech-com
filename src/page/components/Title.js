import styled from 'styled-components';
import {useContext} from 'react';
import { GlobalContext } from '../../App';
import Logo from '../../components/Logo';
import TopNavBar from '../../components/TopNavBar';
import MenuImg from '../../public/icon/menu.svg';
import CloseImg from '../../public/icon/close.svg';

// import LaunchAppBtn from '../../components/LaunchAppBtn';
// import LoginDialog from '../../components/LoginDialog'

const Tit = styled.div`
  font-family: 'Poppins-Bold';
  font-style: normal;
  font-weight: bold;
  font-size: ${({isMobile}) => isMobile?'22px':'40px'};
  height: ${({isMobile}) => isMobile?'56px':'64px'};
  color: ${({theme})=> theme.colors.font};
  ${({isMobile}) => isMobile?'padding:0 16px;':''}
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #0F1131;
  position: sticky;
  top: 0px;
  z-index: 1999;
`

const TopBar = styled.div`
  width: 100%;
  height: 100%; 
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 18.75%;
  @media (max-width: 1820px) and (min-width:1025px){
    padding: 0 16%;
  }
`

const Nav = styled.div`
  display: flex;
  align-items: center;
`

const MRight = styled.div`
  display: flex;
  align-items: center;
  &>.menu {
    display: flex;
    align-items: center;
    &>img {
      width: 32px;
    }
  }
`

const barArr = ['Home','Features','Tokenomics','Roadmap','Community']

const Title = () => {
  const {toggleDrawer,isMobile,theme,isopen} = useContext(GlobalContext)
  return (
    <>
      <Tit id='tab-bar' isMobile={isMobile}> 
        {!isMobile && 
          <TopBar>
            <Nav>
              <Logo theme={theme} isMobile={isMobile}/>
              {barArr.map((item,index)=>{
                return <TopNavBar name={item} index={index} key={index}/>
              })}
            </Nav>
            {/* <LaunchAppBtn isMobile={isMobile} /> */}
          </TopBar>
        }
        {isMobile && 
          <>
            <Logo theme={theme} isMobile={isMobile}/>
            <MRight>
              {/* <LaunchAppBtn isMobile={isMobile} /> */}
              <div className='menu' onClick={()=>{toggleDrawer(!isopen)}}>
                <img src={isopen?CloseImg:MenuImg} alt='menu'/>
              </div>
            </MRight>
          </>
        }
      </Tit>
    </>
  )
}

export default Title