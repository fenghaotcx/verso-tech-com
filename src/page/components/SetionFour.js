import styled from 'styled-components';
import DivTitle from './DivTitle';
import WhiteGlossy from '../../public/icon/White-Glossy.svg';
import Ellipse from '../../public/icon/Ellipse.svg';

const Setion = styled.div`
  height: ${({isMobile})=>isMobile?'100%':'1339px'};
  color: ${({theme})=> theme.colors.font};
  background:  #0F1131;
  padding: ${({isMobile})=>isMobile?'40px 0px':'96px 16% 0 16%'};
  position: relative;
  z-index: 2;
  &>.glossy {
    position: absolute;
    width: ${({isMobile})=>isMobile?'90px':'197px'};
    top: 0;
    right: ${({isMobile})=>isMobile?'10%':'20.4%'};
    z-index: 1;
  }
  &>.ellipse {
    position: absolute;
    height: ${({isMobile})=>isMobile?'493px':'993px'};
    top:  ${({isMobile})=>isMobile?'60px':'234px'};
    left: 0px;
    z-index: 1;
  }
`
const SetionFlex = styled.div`
  margin: ${({isMobile})=>isMobile?'50px':'74px'} auto 0;
  width: ${({isMobile})=>isMobile?'100%':'100%'};
`

const SetionFlexItem = styled.div`
  margin: 0 auto;
`

const Step = styled.div`
  width: 32px;
  height: 32px;
  background: rgba(48, 79, 253, 0.8);
  box-shadow: 0px 0px 16px 2px #304FFD;
  border-radius: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &>.step {
    width: 16px;
    height: 16px;
    background: #3F8CFF;
    border-radius: 100%;
  }
`

const Line =  styled.div`
  width: 4px;
  height: ${({height,isMobile})=> isMobile?height-20+'px':height+'px'};
  margin: 0 auto;
  background: linear-gradient(180deg, rgba(48, 79, 253, 0) 0%, #3049FD 16.33%, #304FFD 85.93%, rgba(48, 79, 253, 0) 100%);
`

const Content = styled.div`
  position: absolute;
  z-index: 9;
  top: 0;
  ${({index,isMobile})=> index ?`right: ${isMobile?'40px':'58px'};text-align: right;`:`left: ${isMobile?'40px':'58px'};`}}
  width: ${({isMobile})=>isMobile?'calc(100vw/2 - 30px)':'380px'};
  &>.tit {
    font-family: Poppins-Bold;
    font-weight: bold;
    font-size: ${({isMobile})=>isMobile?'18px':'24px'};
    line-height: 150%;
    color: #72E2FF;
    margin-bottom: ${({isMobile})=>isMobile?'8px':'16px'};
  }
  &>.content {
    font-family: Poppins;
    font-size: ${({isMobile})=>isMobile?'13px':'18px'};
    line-height: 150%;
  }
`

const flexArr = [
  {
    title:'2022 Q1',
    content: <p>Pavo Project 1.0 Launch<br />Dashboard Feature<br />Autofarm Feature<br />28-Day Lock Pool<br />Swap<br />Token IDO<br />Add LP Pools</p>,
    height: '275'
  },
  {
    title:'2022 Q2',
    content: <p>Fully Responsive to Mobile<br />Treasury Feature<br />Support Solana Blockchain<br />Source Code Auditing<br />Token Repurchase and Burn</p>,
    height: '203'
  },
  {
    title:'2022 Q3',
    content: <p>List $Pavo on Exchanges<br />NFT Collaborations<br />Add in NFT Staking<br />DAO Governance<br />Integrate with More Projects</p>,
    height: '203'
  },
  {
    title:'2022 Q4',
    content: <p>Continue to Improve Features<br />Improve DAO Governance<br />Integrate with More Chains<br />Integrate with Other Wallet DApps</p>,
    height: '176'
  },
  {
    title:'Many more to come',
    content: '',
    height: '0'
  },
]

const SetionItem = ({title,content,index,height,isMobile}) => {
  return (
    <>
      <SetionFlexItem isMobile={isMobile}>
        <Step>
          <div className='step'></div>
          <Content isMobile={isMobile} index={index%2===0}>
            <div className='tit'>{title}</div>
            {content && <div className='content'>{content}</div>}
          </Content>
        </Step>
        <Line isMobile={isMobile} height={height}/>
      </SetionFlexItem>
    </>
    
  )
}

const SetionFour = ({isMobile}) => {
  return (
    <Setion id="Roadmap" isMobile={isMobile}>
      <img className='glossy' src={WhiteGlossy}  alt=''/>
      <img className='ellipse' src={Ellipse}  alt=''/>
      <DivTitle tit="Roadmap" isTit={true} />
      <SetionFlex isMobile={isMobile}>
        {flexArr.map((item,index)=>{
          return <SetionItem isMobile={isMobile} key={index} height={item.height} index={index+1} title={item.title} content={item.content} />
        })}
      </SetionFlex>
    </Setion>
  )
}

export default SetionFour