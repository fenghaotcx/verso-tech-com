import styled from 'styled-components';
import WhiteMatteImg from '../../public/icon/White-Matte.svg';
import DivTitle from './DivTitle';
import Group1 from '../../public/icon/Group1.svg';
import Group2 from '../../public/icon/Group2.svg';
import Group3 from '../../public/icon/Group3.svg';

const Setion = styled.div`
  height: ${({isMobile})=>isMobile?'100%':'776px'};
  color: ${({theme})=> theme.colors.font};
  background:  #0F1131;
  padding: ${({isMobile})=>isMobile?'40px 20px':'96px 16% 0 16%'};
  position: relative;
  z-index: 2;
  &>.top_img {
    position: absolute;
    width: ${({isMobile})=>isMobile?'48px':'78px'};
    top:0;
    left: 62.9%;
  }
`
const SetionFlex = styled.div`
  margin-top: ${({isMobile})=>isMobile?'50px':'72px'};
  ${({isMobile})=>!isMobile?'display: flex;align-items: center;justify-content: space-between;':''}
`

const SetionFlexItem = styled.div`
  border: 1px solid #304FFD;
  box-sizing: border-box;
  border-radius: 32px;
  width: ${({isMobile})=>isMobile?'100%':'calc((62vw - 120px) /3)'};
  @media (max-width: 1520px) and (min-width:1025px){
    width: calc((68vw - 40px) /3);
  }
  height: ${({isMobile})=>isMobile?'100%':'440px'};
  padding: 64px 32px;
  ${({isMobile})=>isMobile?'margin-bottom: 20px;':''}
  &>.top_img {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 32px;
  }
  &>.title {
    font-family: Poppins-Bold;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 150%;
    color: #72E2FF;
    margin-bottom: 24px;
  }
  &>.content {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 150%;
  }
`

const flexArr = [
  {
    title:'Portfolio Tracking',
    content: 'Track all your DeFi and crypto investment in one place. Pavo supports the most holistic ecosystem on Terra Blockchain',
    icon: <img src={Group1}  alt=''/>
  },
  {
    title:'Auto Compounding',
    content: 'Save time and earn extra passive income by auto compounding your farming earnings',
    icon: <img src={Group2}  alt=''/>
  },
  {
    title:'Self-operated Treasury',
    content: 'Get secured by Pavo Treasury, which is programmed to invest, farm and manage for itself',
    icon: <img src={Group3}  alt=''/>
  }
]

const SetionItem = ({title,content,icon,isMobile}) => {
  return (
    <SetionFlexItem isMobile={isMobile}>
      <div className='top_img'>{icon}</div>
      <div className='title'>{title}</div>
      <div  className='content'>{content}</div>
    </SetionFlexItem>
  )
}

const SetionOne = ({isMobile}) => {
  return (
    <Setion id="Features"  isMobile={isMobile}>
      <img className='top_img' src={WhiteMatteImg} alt=''/>
      <DivTitle tit="Key Features" isTit={true} />
      <SetionFlex isMobile={isMobile}>
        {flexArr.map((item,index)=>{
          return <SetionItem isMobile={isMobile} key={index} title={item.title} content={item.content} icon={item.icon}/>
        })}
      </SetionFlex>
    </Setion>
  )
}

export default SetionOne