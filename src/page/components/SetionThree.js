import styled from 'styled-components';
import DivTitle from './DivTitle';
import Group4 from '../../public/icon/Group4.svg';
import Group5 from '../../public/icon/Group5.svg';

const Setion = styled.div`
  height:  ${({isMobile})=>isMobile?'100%':'496px'};
  color: ${({theme})=> theme.colors.font};
  background:  #080821;
  padding: ${({isMobile})=>isMobile?'40px 16px':'96px 18.75% 0 18.75%'};
  @media (max-width: 1820px) and (min-width:1025px){
    padding: 96px 16% 0 16%;
  }
`
const SetionFlex = styled.div`
  margin-top: ${({isMobile})=>isMobile?'50px':'72px'};
  ${({isMobile})=>!isMobile?'display: flex;align-items: center;justify-content: space-between;':''}
`

const SetionFlexItem = styled.div`
  width: ${({isMobile})=>isMobile?'100%':'calc((62vw - 90px) /2)'};
  @media (max-width: 1520px) and (min-width:1025px){
    width: calc((68vw - 40px) /2);
  }
  ${({isMobile,index})=>isMobile&&!index?'margin-bottom: 40px;':''}
  display: flex;
  align-items: center;
  &>.top_img {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${({isMobile})=>isMobile?'10px':'32px'};
    &>img {
      ${({isMobile})=>isMobile?'width: 100px;':''}
    }
  }
  &>.right {
    &>.title {
      font-family: Poppins-Bold;
      font-style: normal;
      font-weight: bold;
      font-size: ${({isMobile})=>isMobile?'20px':'24px'};
      line-height: 150%;
      color: #72E2FF;
      margin-bottom: ${({isMobile})=>isMobile?'8px':'16px'};
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

const SetionItem = ({title,content,icon,isMobile,index}) => {
  return (
    <SetionFlexItem index={index} isMobile={isMobile}>
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
      <DivTitle tit="Tokenomics" isTit={true} />
      <SetionFlex isMobile={isMobile}>
        {flexArr.map((item,index)=>{
          return <SetionItem isMobile={isMobile} key={index} index={index === flexArr.length-1} title={item.title} content={item.content} icon={item.icon}/>
        })}
      </SetionFlex>
    </Setion>
  )
}

export default SetionThree