import styled from 'styled-components';
import DivTitle from './DivTitle';
import byImg from '../../public/icon/by.svg'
import SuperToroidImg from '../../public/icon/SuperToroid.svg'
import SetionOneImg from '../../public/icon/SetionOne.png'

const Setion = styled.div`
  height: ${({isMobile})=>isMobile?'100%':'778px'};
  color: ${({theme})=> theme.colors.font};
  background: #080821;
  padding: ${({isMobile})=>isMobile?'40px 20px':'120px 18.75% 0 18.75%'};
  @media (max-width: 1820px) and (min-width:1025px){
    padding: 120px 16% 0 16%;
  }
  position: relative;
  z-index: 2;
  &>.left {
    width: ${({isMobile})=>isMobile?'100%':'673px'};
    &>.allow {
      margin-top: 24px;
      margin-bottom: ${({isMobile})=>isMobile?'30px':'96px'};
      font-size: ${({isMobile})=>isMobile?'16px':'24px'};
      line-height: 150%;
      color: #BDBDBD;
      position: relative;
      z-index: 2;
    }
    &>.by {
      font-size: ${({isMobile})=>isMobile?'12px':'22px'};
      line-height: 150%;
      color: #666666;
    }
    &>img {
      width: 193px;
    }
    &>.botImg {
      width: 100%;
    }
  }
  &>.leftImg {
    position: absolute;
    width: ${({isMobile})=>isMobile?'50px':'80px'};
    top: ${({isMobile})=>isMobile?'70px':'96px'};
    ${({isMobile})=>isMobile?'right: 20px;':'left: calc(8.6%);'}
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

const SetionOne = ({isMobile}) => {
  return (
    <Setion id="Home" isMobile={isMobile}> 
      <div className='left'>
        <DivTitle tit="Pavo optimizes" />
        <DivTitle tit="your finance"/>
        <div className='allow'>
          Pavo allows you to manage all assets at your fingertips. Natively built by #Lunatics for Terra Ecosystem.
        </div>
        {isMobile &&<img className='botImg' src={SetionOneImg} alt=''/>}
        <div className='by'>Powered by</div>
        <img src={byImg} alt=''/>
      </div>
      <img className='leftImg' src={SuperToroidImg} alt=''/>
      {!isMobile && <img className='rightImg' src={SetionOneImg} alt=''/>}
    </Setion>
  )
}

export default SetionOne