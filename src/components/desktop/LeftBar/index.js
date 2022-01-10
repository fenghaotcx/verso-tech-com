import Styles from '../App.module.css';
import Logo from '../../Logo';
import {useContext,useState} from 'react';
import { GlobalContext } from '../../../App';
import LeftBarCom from './LeftBarCom';
import { styled } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

const MyIconButton = styled(IconButton)`
  width: 26px;
  height: 26px;
  border: ${({theme})=> theme === 'dark'?'1.5px solid #fff;':'1.5px solid #000;'}
  display: flex;
  align-items: center;
  justify-content: center;
`
const TopDiv  =  styled('div')`
  width: 100%;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: end;
  &>button {
    margin-right: 20px;
  }
`
const NavLinkDiv = styled('div')`

`

const routes = [
  {
    name:'Home',
  },
  {
    name:'Features',
  },
  {
    name:'Tokenomics',
  },
  {
    name:'Roadmap',
  },
  {
    name:'Community',
  },
]


const TopClose = ({toggleDrawer,theme}) => {
  return (
    <TopDiv>
      <MyIconButton theme={theme} onClick={()=>{toggleDrawer(false)}}><CloseIcon sx={{color: theme === 'dark'?'#fff':'#000',}} /></MyIconButton>
    </TopDiv>
  )
}

const LeftBar = () => {
  const [isActive,setActive] =useState('')
  const { isMobile,toggleDrawer,isopen,theme } = useContext(GlobalContext)

  const navLinkClick = (anchorName) => {
    if (anchorName) {
      toggleDrawer(false)
      setActive(anchorName)
      const anchorElement = document.getElementById(anchorName);
      if(anchorElement) {
        setTimeout(() => {
          anchorElement.scrollIntoView(
            {behavior: 'smooth'}
          );
        },200)
      }
    }
  }

  return (
    <LeftBarCom cls={theme === 'light'?Styles.lightLeft:Styles.darkLeft} theme={theme} isMobile={isMobile} toggleDrawer={toggleDrawer} isopen={isopen}>
      {!isMobile && <Logo theme={theme} isMobile={isMobile}/>}
      {isMobile && <TopClose theme={theme} toggleDrawer={toggleDrawer} />}
      {routes.map((item)=>{
        if(item?.name){
          return (
            <NavLinkDiv 
              className={
              (isActive === item.name ? `${Styles.active} ${isMobile?`${Styles.navDiv} ${Styles.navDivM}`:Styles.navDiv}`: 
               isMobile?`${Styles.navDiv} ${Styles.navDivM}`:Styles.navDiv
              )}  
              key={item.name} 
              onClick={()=> navLinkClick(item.name)}
              >
                {item.name}
            </NavLinkDiv>
          )
        }else{
          return null
        }
      })}
    </LeftBarCom>  
  )
};


export default LeftBar