import styled from 'styled-components';
import DivTitle from './DivTitle';
import byImg from '../../public/icon/by.svg';
import SuperToroidImg from '../../public/icon/SuperToroid.svg';
import SuperToroidImgM from '../../public/icon/SuperToroidM.svg';
import SetionOneImg from '../../public/icon/SetionOne.png';
import SetionOneMImg from '../../public/icon/SetionOneM.svg';

const Setion = styled.div`
  height: ${({isMobile})=>isMobile?'100%':'778px'};
  color: ${({theme})=> theme.colors.font};
  background: #080821;
  padding: ${({isMobile})=>isMobile?'22px 16px':'120px 18.75% 0 18.75%'};
  @media (max-width: 1820px) and (min-width:1025px){
    padding: 120px 16% 0 16%;
  }
  position: relative;
  z-index: 2;
  &>.left {
    width: ${({isMobile})=>isMobile?'100%':'673px'};
    &>.allow {
      margin-top: ${({isMobile})=>isMobile?'80px':'24px'};
      margin-bottom: ${({isMobile})=>isMobile?'48px':'96px'};
      font-size: ${({isMobile})=>isMobile?'14px':'24px'};
      line-height: 150%;
      color: #BDBDBD;
      position: relative;
      z-index: 2;
    }
    &>.by {
      font-size: ${({isMobile})=>isMobile?'12px':'22px'};
      line-height: 150%;
      color: #666666;
      ${({isMobile})=>isMobile?'margin-bottom: 8px;':''}
    }
    &>img {
      width: ${({isMobile})=>isMobile?'100px':'193px'};
      ${({isMobile})=>isMobile?'margin-bottom: 26px;':''}
    }
    &>.botImg {
      width: 100%;
    }
  }
  &>.leftImg {
    position: absolute;
    width: ${({isMobile})=>isMobile?'52px':'80px'};
    top: ${({isMobile})=>isMobile?'0':'96px'};
    ${({isMobile})=>isMobile?'left: 20px;':'left: calc(8.6%);'}
    z-index: 1;
  }
  &>.rightImg {
    position: absolute;
    width: 38.43vw;
    top: 26px;
    right: 9.8%;
    @media (max-width: 1520px) and (min-width:1025px){
      right: 4%;
    }
    z-index: 1;
  }
`
const MSetion = styled.div`
  padding: 0 7px 0 20px;
  position: relative;
  &>img {
    display: block;
    width: 100%;
  }
`
const TitD =styled.div`
  ${({isMobile})=>isMobile?
  `position: absolute;
  padding: 96px 0 0 16px;
  width: 100vw;
  left: -16px;
  background: linear-gradient(0deg, #080821 46.49%, rgba(8, 8, 33, 0) 100%);
  bottom: -67px;`:''}
`

const SetionOne = ({isMobile}) => {
  return (
    <Setion id="Home" isMobile={isMobile}> 
      <div className='left'>
        {isMobile && 
          <MSetion>
            <img className='botImg' src={SetionOneMImg} alt=''/>
            <TitD isMobile={isMobile}>
              <DivTitle tit="Pavo optimizes" />
              <DivTitle tit="your finance"/>
            </TitD>
          </MSetion>
        }
        {!isMobile && 
          <>
            <DivTitle tit="Pavo optimizes" />
            <DivTitle tit="your finance"/>
          </>
        }
        <div className='allow'>
          Pavo allows you to manage all assets at your fingertips. Natively built by #Lunatics for Terra Ecosystem.
        </div>
        <div className='by'>Powered by</div>
        <img src={byImg} alt=''/>
      </div>
      <img className='leftImg' src={isMobile?SuperToroidImgM:SuperToroidImg} alt=''/>
      {!isMobile && <img className='rightImg' src={SetionOneImg} alt=''/>}
    </Setion>
  )
}

export default SetionOne