import Title from '../components/Title';
import SetionOne from '../components/SetionOne';
import SetionTwo from '../components/SetionTwo';
import SetionThree from '../components/SetionThree';
import SetionFour from '../components/SetionFour';
import SetionFive from '../components/SetionFive';
import Footer  from '../../components/Footer';
import {useContext} from 'react';
import { GlobalContext } from '../../App';
// import styled from 'styled-components';


// const LoadDiv = styled.div`
//   width: 100%;
//   height:  calc(100vh - 178px);
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `


const Home = () => {

  const { isMobile, } = useContext(GlobalContext)

  return (
    <>
      <Title />
      <SetionOne isMobile={isMobile} />
      <SetionTwo isMobile={isMobile} />
      <SetionThree isMobile={isMobile} />
      <SetionFour isMobile={isMobile} />
      <SetionFive isMobile={isMobile} />
      <Footer isMobile={isMobile}/>
    </>
  )
}

export default Home