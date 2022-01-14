import Styles from '../App.module.css';
import {useContext,useState} from 'react';
import { GlobalContext } from '../../../App';
import LeftBarCom from './LeftBarCom';
import { styled } from '@mui/system';


const NavLinkDiv = styled('div')`
  height: 70px;
  margin-bottom: 0px;
  padding-left: 16px;
  font-size: 14px;
  color: #BDBDBD;
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


const LeftBar = () => {
  const [isActive,setActive] =useState('')
  const { isMobile,toggleDrawer,isopen,theme } = useContext(GlobalContext)

  const navLinkClick = (anchorName) => {
    if (anchorName) {
      toggleDrawer(false)
      setActive(anchorName)
      const anchorElement = document.getElementById(anchorName);
      const height = document.getElementById(anchorName).offsetTop
      if(anchorElement) {
        setTimeout(() => {
          window.scroll({
            top: height-56,
            behavior: 'smooth',
          });
        },100)
      }
    }
  }

  return (
    <LeftBarCom cls={theme === 'light'?Styles.lightLeft:Styles.darkLeft} theme={theme} isMobile={isMobile} toggleDrawer={toggleDrawer} isopen={isopen}>
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