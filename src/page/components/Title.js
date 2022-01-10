import styled from 'styled-components';
import {useContext} from 'react';
import { GlobalContext } from '../../App';
import DehazeIcon from '@mui/icons-material/Dehaze';
import Logo from '../../components/Logo';
import LaunchAppBtn from '../../components/LaunchAppBtn';
import TopNavBar from '../../components/TopNavBar';


// import LoginDialog from '../../components/LoginDialog'

const Tit = styled.div`
  font-family: 'Poppins-Bold';
  font-style: normal;
  font-weight: bold;
  font-size: ${({isMobile}) => isMobile?'22px':'40px'};
  height: ${({isMobile}) => isMobile?'50px':'100px'};
  color: ${({theme})=> theme.colors.font};
  ${({isMobile}) => isMobile?'padding:10px 20px;':''}
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #0F1131;
  position: sticky;
  top: 0px;
  z-index: 99;
`

const TopBar = styled.div`
  width: 100%;
  height: 100%; 
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16%;
`

const Nav = styled.div`
  display: flex;
  align-items: center;
`

const MRight = styled.div`
  display: flex;
  align-items: center;
`

const barArr = ['Home','Features','Tokenomics','Roadmap','Community']

const Title = () => {
  const {toggleDrawer,isMobile,theme} = useContext(GlobalContext)
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
            <LaunchAppBtn isMobile={isMobile} />
          </TopBar>
        }
        {isMobile && 
          <>
            <Logo theme={theme} isMobile={isMobile}/>
            <MRight>
              <LaunchAppBtn isMobile={isMobile} />
              <DehazeIcon onClick={()=>{toggleDrawer(true)}} />
            </MRight>
          </>
        }
      </Tit>
    </>
  )
}

export default Title