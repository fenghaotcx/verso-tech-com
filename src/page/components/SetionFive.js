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
  height: ${({isMobile})=>isMobile?'100%':'576px'};
  color: ${({theme})=> theme.colors.font};
  background:  #080821;
  padding: ${({isMobile})=>isMobile?'40px 16px':'96px 18.75% 0 18.75%'};
  @media (max-width: 1820px) and (min-width:1025px){
    padding: 96px 16% 0 16%;
  }
`
const SetionFlex = styled.div`
  margin-top: ${({isMobile})=>isMobile?'32px':'72px'};
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
  border-radius: ${({isMobile})=>isMobile?'16px':'24px'};
  width: ${({isMobile})=>isMobile?'calc((100vw - 45px) /2)':'calc((62vw - 240px) /4)'};
  ${({isMobile,index})=>isMobile?`${!index?'margin-bottom: 12px;':''} padding-bottom:38px;`:''}
  @media (max-width: 1680px) and (min-width:1025px){
    width: calc((68vw - 120px) /4);
  }
  ${({isMobile})=>!isMobile? `&:hover .right {
    color: #fff;
  }`:''}
  ${({isMobile})=>!isMobile? `&:hover {
    border: 1px solid #fff;
  }`:''}
  &>.top_img {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: ${({isMobile})=>isMobile?'44px auto 14px':'66.5px auto 24px'};
    &>img {
      width:  ${({isMobile})=>isMobile?'48px':'64px'};
    }
  }
  &>.right {
    line-height: 150%;
    box-sizing: border-box;
    font-family: Poppins;
    font-weight: bold;
    font-size: ${({isMobile})=>isMobile?'14px':'18px'};
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

const SetionItem = ({title,link,icon,acticon,isMobile,index}) => {
  const [checked, setChecked] = useState(false);
  return (
    <SetionFlexItem index={index} isMobile={isMobile} href={link} rel="noreferrer" target="_blank" onMouseEnter={()=> setChecked(true)} onMouseLeave={()=> setChecked(false)}>
      <div className='top_img'>{checked && !isMobile?acticon:icon}</div>
      <div className='right'>{title}</div>
    </SetionFlexItem>
  )
}

const SetionThree = ({isMobile}) => {
  return (
    <Setion id="Community" isMobile={isMobile}>
      <DivTitle tit="Community" isTit={true}/>
      <SetionFlex isMobile={isMobile}>
        {flexArr.map((item,index)=>{
          return <SetionItem index={index>=2} isMobile={isMobile} key={index} title={item.title} acticon={item.acticon} link={item.link} icon={item.icon}/>
        })}
      </SetionFlex>
    </Setion>
  )
}

export default SetionThree