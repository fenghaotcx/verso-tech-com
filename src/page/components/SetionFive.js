import styled from 'styled-components';
import DivTitle from './DivTitle';
import TwitterImg from '../../public/icon/TwitterImg.svg';
import TelegramImg from '../../public/icon/TelegramImg.svg';
import MediumImg from '../../public/icon/MediumImg.svg';
import DiscordImg from '../../public/icon/DiscordImg.svg';
import TwitterImgAct from '../../public/icon/TwitterImgAct.svg';
import TelegramImgAct from '../../public/icon/TelegramImgAct.svg';
import MediumImgAct from '../../public/icon/MediumImgAct.svg';
import DiscordImgAct from '../../public/icon/DiscordImgAct.svg';
import {useState} from 'react'

const Setion = styled.div`
  height: ${({isMobile})=>isMobile?'100%':'700px'};
  color: ${({theme})=> theme.colors.font};
  background:  #080821;
  padding: ${({isMobile})=>isMobile?'40px':'100px 16% 0 16%'};
`
const SetionFlex = styled.div`
  margin-top: ${({isMobile})=>isMobile?'50px':'113px'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({isMobile})=>isMobile?'flex-wrap: wrap;':''}
`

const SetionFlexItem = styled.a`
  display: block;
  height: ${({isMobile})=>isMobile?'100%':'240px'};
  background: #0F1131;
  border: 1px solid #304FFD;
  box-sizing: border-box;
  border-radius: 24px;
  width: ${({isMobile})=>isMobile?'calc((100vw - 100px) /2)':'calc((62vw - 240px) /4)'};
  ${({isMobile})=>isMobile?'margin-bottom: 20px;padding-bottom:20px;':''}
  @media (max-width: 1520px) and (min-width:1025px){
    width: calc((68vw - 120px) /4);
  }
  &:hover .right {
    border: 1px solid #304FFD;
    color: #304FFD;
  }
  &>.top_img {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: ${({isMobile})=>isMobile?'22px':'54px'} auto 32px;
    &>img {
      width: 80px;
    }
  }
  &>.right {
    width: ${({isMobile})=>isMobile?'70%':'50%'};
    height: 43px;
    line-height: 43px;
    border: 1px solid #9193AF;
    box-sizing: border-box;
    border-radius: 100px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    font-size: 18px;
    color: #9193AF;
    text-align: center;
    margin: 0 auto;
  }
`

const flexArr = [
  {
    title:'Twitter',
    icon: <img src={TwitterImg}  alt=''/>,
    acticon: <img src={TwitterImgAct}  alt=''/>,
    link: 'https://twitter.com/pavo_finance'
  },
  {
    title:'Telegram',
    icon: <img src={TelegramImg}  alt=''/>,
    acticon: <img src={TelegramImgAct}  alt=''/>,
    link: 'https://t.me/pavofinance'
  },
  {
    title:'Discord',
    icon: <img src={DiscordImg}  alt=''/>,
    acticon: <img src={DiscordImgAct}  alt=''/>,
    link: 'https://discord.gg/cME7P6ySsM'
  },
  {
    title:'Medium',
    icon: <img src={MediumImg}  alt=''/>,
    acticon: <img src={MediumImgAct}  alt=''/>,
    link: 'https://medium.com/@pavo-finance'
  },
  
]

const SetionItem = ({title,link,icon,acticon,isMobile}) => {
  const [checked, setChecked] = useState(false);
  return (
    <SetionFlexItem isMobile={isMobile} href={link} rel="noreferrer" target="_blank" onMouseEnter={()=> setChecked(true)} onMouseLeave={()=> setChecked(false)}>
      <div className='top_img'>{checked?acticon:icon}</div>
      <div className='right'>{title}</div>
    </SetionFlexItem>
  )
}

const SetionThree = ({isMobile}) => {
  return (
    <Setion id="Community" isMobile={isMobile}>
      <DivTitle tit="Community" isTit={true} line={true} bottom={15}/>
      <SetionFlex isMobile={isMobile}>
        {flexArr.map((item,index)=>{
          return <SetionItem isMobile={isMobile} key={index} title={item.title} acticon={item.acticon} link={item.link} icon={item.icon}/>
        })}
      </SetionFlex>
    </Setion>
  )
}

export default SetionThree