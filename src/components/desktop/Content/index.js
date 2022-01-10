// import {Router} from '../../../routes';
import Styles from '../App.module.css';
import Boundary from "../../Boundary";
import Home from "../../../page/Home"

const Content = ({isMobile,theme}) => {
  return (
    <div className={`${isMobile?Styles.right_m:Styles.right} ${theme==='dark'?Styles.darkRight:''}`}> 
      <Boundary>
        <Home />
      </Boundary>
    </div>
  )
};


export default Content