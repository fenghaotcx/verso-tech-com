import styled from 'styled-components';
import DivTitle from './DivTitle';
import byImg from '../../public/icon/by.svg'
import SuperToroidImg from '../../public/icon/SuperToroid.svg'
import SetionOneImg from '../../public/icon/SetionOne.png'

const Setion = styled.div`
  height: ${({isMobile})=>isMobile?'100%':'900px'};
  color: ${({theme})=> theme.colors.font};
  background: #080821;
  padding: ${({isMobile})=>isMobile?'40px 20px':'140px 16% 0 16%'};
  position: relative;
  z-index: 2;
  &>.left {
    width: ${({isMobile})=>isMobile?'100%':'673px'};
    &>.allow {
      margin-top: 45px;
      margin-bottom: ${({isMobile})=>isMobile?'30px':'55px'};
      font-size: ${({isMobile})=>isMobile?'16px':'32px'};
      line-height: 150%;
      position: relative;
      z-index: 2;
    }
    &>.by {
      font-size: ${({isMobile})=>isMobile?'12px':'22px'};
      line-height: 150%;
      color: rgba(255, 255, 255, 0.7);
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
    top: ${({isMobile})=>isMobile?'70px':'140px'};
    ${({isMobile})=>isMobile?'right: 20px;':'left: calc(16% - 80px);'}
    z-index: 1;
  }
  &>.rightImg {
    position: absolute;
    width: 42vw;
    top: 24px;
    right: 0px;
    z-index: 1;
  }
`

const SetionOne = ({isMobile}) => {
  return (
    <Setion id="Home" isMobile={isMobile}> 
      <div className='left'>
        <DivTitle tit="Pavo optimizes" />
        <DivTitle tit="your finance" line={true} bottom={20}/>
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