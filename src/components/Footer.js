import styled from 'styled-components';
import Logo from './Logo';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { withStyles } from '@mui/styles';
import ArrowDown from '../public/icon/Arrow-Down.svg';
import { useState } from 'react';

const Foot = styled.div`
  height: ${({isMobile})=>isMobile?'100%':'220px'};
  padding: ${({isMobile})=>isMobile?'20px 20px':'48px 16% 0 16%'};
  border-top: 1px solid #6E708C;
  background: #080821;
  display: ${({isMobile})=>isMobile?'block':'flex'};
  color: ${({theme})=> theme.colors.font};
  & div {
    font-family: Poppins-Bold;
    font-weight: bold;
  }
  & .up {
    transform: rotate(180deg);
  }
`
const BottomDiv = styled.div`
  margin-left: 11%;
  &>.tit {
    font-size: 24px;
    line-height: 150%;
  }
  &>.tit_child {
    display: block;
    font-size: 18px;
    line-height: 150%;
    margin-top: 16px;
    color: #9193AF;
  }
`

const NavItem = styled.a`
  display: block;
  width: 100%;
  margin-bottom: 12px;
  color: #9193AF;
  :last-child{
    margin-bottom: 30px;
  }
`

const MuiAccordionSummary = withStyles({
  root: {
    marginBottom: '-1px !important',
    minHeight: '63px !important',
    padding: '0px !important',
    fontSize: '18px !important',
    fontWeight: '600 !important',
    display:'flex !important',
    '&.Mui-expanded': {
      minHeight: '63 !important',
    },
    '&>.MuiAccordionSummary-content': {
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },
})(AccordionSummary)

const MuiAccordionDetails = withStyles({
  root: {
    padding: '0px !important',
    display: 'block !important'
  },
})(AccordionDetails)

const MuiAccordion = withStyles({
  root: {
    boxShadow: 'none !important',
    background: '#080821 !important',
    color: '#fff !important',
    '&:before': {
      display: 'none !important',
    },
    '&.Mui-expanded': {
      margin: 'auto !important',
    },
  },
})(Accordion)

const botArr = [
  {
    tit: 'ABOUT',
    id: 'ABOUT',
    child: [
      {
        tit: 'Docs',
        link: ''
      },
      {
        tit: 'FAQ',
        link: ''
      }
    ]
  },
  {
    tit: 'LEARN MORE',
    id: 'LEARN_MORE',
    child: [
      {
        tit: 'Github',
        link: ''
      },
      {
        tit: 'Tokenomics',
        link: ''
      }
    ]
  }
]

const BottomFlex = ({item}) => {
  return (
    <BottomDiv>
      <div className='tit'>{item.tit}</div>
      {item.child.map((x,i)=>{
        return <a href={x.link} rel="noreferrer" target="_blank" className='tit_child' key={i}>{x.tit}</a>
      })}
    </BottomDiv>
  )
}

const Footer = ({isMobile}) => {
  const [expanded, setExpanded] = useState('')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  };

  return (
    <Foot isMobile={isMobile}>
      <div><Logo /></div>
      {/* {botArr.map((v,i)=>{
        if(isMobile){
          return (
            <MuiAccordion
              key={'accordin'+v.id}
              square
              expanded={expanded === ('panel'+i)}
              onChange={handleChange('panel'+i)}
            >
              <MuiAccordionSummary>
                <div>{v.tit}</div>
                <img className={expanded === ('panel'+i) ? 'down' : 'up'} src={ArrowDown}  alt=''/>
              </MuiAccordionSummary>
              <MuiAccordionDetails>
                {v.child&&v.child.map(v => <NavItem key={v.tit} href={v.link} rel="noreferrer" target="_blank">{v.tit}</NavItem>)}
              </MuiAccordionDetails>
            </MuiAccordion>
          )
        }else{
          return <BottomFlex item={v} key={i} />
        }
      })} */}
    </Foot>
  )
}


export default Footer