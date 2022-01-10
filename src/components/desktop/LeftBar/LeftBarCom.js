import styled from 'styled-components';
import Drawer from '@mui/material/Drawer';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  drawer: {
    '& .MuiPaper-root': {
      background:  ({theme}) => theme === 'dark'?'#080821':'#fff',
    }
  }
})

const anchor = 'left'

const Left = styled.div`
  width: 20%;
  height: 100vh;
  padding: 35px 0 0 40.5px;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  top: 0;
  overflow: hidden;
  background: ${({theme}) => theme.colors.Leftbackground};
`

const LeftBarCom = ({children,isMobile,toggleDrawer,isopen,cls,theme}) => {
  const classes = useStyles({theme})
  return (
    isMobile?
    <Drawer 
      className={`${classes.drawer} ${cls}`} 
      anchor={anchor} 
      open={isopen} 
      onClose={()=>{toggleDrawer(false)}}>
      {children}
    </Drawer>:
    <Left className={cls}>{children}</Left>
  )
};
  
  
export default LeftBarCom