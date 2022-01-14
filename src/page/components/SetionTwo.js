import styled from 'styled-components';
import WhiteMatteImg from '../../public/icon/White-Matte.svg';
import WhiteMatteImgM from '../../public/icon/White-MatteM.svg';

import DivTitle from './DivTitle';
import Group1 from '../../public/icon/Group1.svg';
import Group2 from '../../public/icon/Group2.svg';
import Group3 from '../../public/icon/Group3.svg';

const Setion = styled.div`
  height: ${({isMobile})=>isMobile?'100%':'776px'};
  color: ${({theme})=> theme.colors.font};
  background:  #0F1131;
  padding: ${({isMobile})=>isMobile?'40px 16px':'96px 18.75% 0 18.75% '};
  @media (max-width: 1820px) and (min-width:1025px){
    padding: 96px 16% 0 16%;
  }
  position: relative;
  z-index: 2;
  &>.top_img {
    position: absolute;
    width: ${({isMobile})=>isMobile?'63px':'78px'};
    top:0;
    left: ${({isMobile})=>isMobile?'70.6%':'62.9%'};
  }
`
const SetionFlex = styled.div`
  margin-top: ${({isMobile})=>isMobile?'32px':'72px'};
  ${({isMobile})=>!isMobile?'display: flex;align-items: center;justify-content: space-between;':''}
`

const SetionFlexItem = styled.div`
  border: 1px solid #304FFD;
  box-sizing: border-box;
  border-radius: 32px;
  width: ${({isMobile})=>isMobile?'100%':'calc((62vw - 120px) /3)'};
  @media (max-width: 1680px) and (min-width:1420px){
    width: calc((68vw - 40px) /3);
  }
  @media (max-width: 1420px) and (min-width:1025px){
    width: calc((70vw - 40px) /3);
  }
  height: ${({isMobile})=>isMobile?'100%':'440px'};
  padding: ${({isMobile})=>isMobile?'32px 24px':'64px 32px'};
  ${({isMobile})=>isMobile?'margin-bottom: 20px;':''}
  &>.top_img {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${({isMobile})=>isMobile?'24px':'32px'};
    &>img {
      width: ${({isMobile})=>isMobile?'100px':'120px'};
    }
  }
  &>.title {
    font-family: Poppins-Bold;
    font-style: normal;
    font-weight: bold;
    font-size: ${({isMobile})=>isMobile?'20px':'24px'};
    @media (max-width: 1680px) and (min-width:1420px){
      font-size: 20px;
    }
    @media (max-width: 1420px) and (min-width:1025px){
      font-size: 18px;
    }
    line-height: ${({isMobile})=>isMobile?'100%':'150%'};
    color: #72E2FF;
    margin-bottom: ${({isMobile})=>isMobile?'8px':'24px'};
  }
  &>.content {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: ${({isMobile})=>isMobile?'14px':'18px'};
    @media (max-width: 1680px) and (min-width:1420px){
      font-size: 16px;
    }
    @media (max-width: 1420px) and (min-width:1025px){
      font-size: 14px;
    }
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
      <img className='top_img' src={isMobile?WhiteMatteImgM:WhiteMatteImg} alt=''/>
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