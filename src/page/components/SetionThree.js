import styled from 'styled-components';
import DivTitle from './DivTitle';
import Group4 from '../../public/icon/Group4.svg';
import Group5 from '../../public/icon/Group5.svg';

const Setion = styled.div`
  height:  ${({isMobile})=>isMobile?'100%':'650px'};
  color: ${({theme})=> theme.colors.font};
  background:  #080821;
  padding: ${({isMobile})=>isMobile?'40px 20px':'100px 16% 0 16%'};
`
const SetionFlex = styled.div`
  margin-top: ${({isMobile})=>isMobile?'50px':'113px'};
  ${({isMobile})=>!isMobile?'display: flex;align-items: center;justify-content: space-between;':''}
`

const SetionFlexItem = styled.div`
  width: ${({isMobile})=>isMobile?'100%':'calc((62vw - 90px) /2)'};
  @media (max-width: 1520px) and (min-width:1025px){
    width: calc((68vw - 40px) /2);
  }
  ${({isMobile})=>isMobile?'margin-bottom: 40px;':''}
  display: flex;
  &>.top_img {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${({isMobile})=>isMobile?'20px':'32px'};
    &>img {
      ${({isMobile})=>isMobile?'width: 110px;':''}
    }
  }
  &>.right {
    &>.title {
      font-family: Poppins-Bold;
      font-style: normal;
      font-weight: bold;
      font-size: ${({isMobile})=>isMobile?'20px':'36px'};
      line-height: 150%;
      color: #72E2FF;
      margin-bottom: 8px;
    }
    &>.content {
      font-family: Poppins;
      font-style: normal;
      font-weight: normal;
      font-size: ${({isMobile})=>isMobile?'14px':'18px'};
      line-height: 150%;
    }
  }
`

const flexArr = [
  {
    title:'Governance',
    content: 'Participate in Pavo’s DAO governance process and vote on proposals',
    icon: <img src={Group4}  alt=''/>
  },
  {
    title:'Staking Utility',
    content: 'Stake or lock your $Pavo token to earn an extra cut from all the platform fees',
    icon: <img src={Group5}  alt=''/>
  },
]

const SetionItem = ({title,content,icon,isMobile}) => {
  return (
    <SetionFlexItem isMobile={isMobile}>
      <div className='top_img'>{icon}</div>
      <div className='right'>
        <div className='title'>{title}</div>
        <div  className='content'>{content}</div>
      </div>
    </SetionFlexItem>
  )
}

const SetionThree = ({isMobile}) => {
  return (
    <Setion id="Tokenomics"  isMobile={isMobile}>
      <DivTitle tit="Tokenomics" isTit={true} line={true} bottom={15}/>
      <SetionFlex isMobile={isMobile}>
        {flexArr.map((item,index)=>{
          return <SetionItem isMobile={isMobile} key={index} title={item.title} content={item.content} icon={item.icon}/>
        })}
      </SetionFlex>
    </Setion>
  )
}

export default SetionThree