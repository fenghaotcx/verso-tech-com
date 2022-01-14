import Drawer from '@mui/material/Drawer';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  drawer: {
    '& .MuiPaper-root': {
      background:  ({theme}) => theme === 'dark'?'#0F1131':'#fff',
      top: '56px',
    }
  }
})

const anchor = 'top'


const LeftBarCom = ({children,toggleDrawer,isopen,cls,theme}) => {
  const classes = useStyles({theme})
  return (
    <Drawer 
      className={`${classes.drawer} ${cls}`} 
      anchor={anchor} 
      open={isopen} 
      onClose={()=>{toggleDrawer(false)}}>
      {children}
    </Drawer>
  )
};
  
  
export default LeftBarCom