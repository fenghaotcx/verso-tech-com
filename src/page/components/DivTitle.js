import styled from 'styled-components';
import {useContext} from 'react';
import { GlobalContext } from '../../App';

const Title = styled.div`
  color: #FFFFFF;
  width: fit-content;
  position: relative;
  ${({isTit})=>isTit?'margin: 0 auto;':''}
  &>.tit {
    font-family: Poppins-Bold;
    font-style: normal;
    font-weight: bold;
    font-size: ${({isMobile})=>isMobile?'36px':'64px'};
    line-height: 150%;
    z-index: 2;
    position: relative;
  }
  &>.tit.tit-small {
    // font-family: Source Han Sans CN;
    font-size: ${({isMobile})=>isMobile?'28px':'48px'};
    line-height: 150%;
  }
`

const Line = styled.div`
  width: 100%;
  background: #304FFD;
  height: ${({isMobile})=>isMobile?'10px':'20px'};
  left: 0;
  bottom: ${({bottom,isMobile})=> bottom ? isMobile?+bottom/2 + 'px' : bottom+'px':'0px'} ;
  position: absolute;
  z-index: 1;
`

const DivTitle = ({tit,line,bottom,isTit,}) => {
  const {isMobile} = useContext(GlobalContext)
  return (
      <Title isMobile={isMobile} isTit={isTit}>
        <div className={isTit?'tit tit-small':'tit'}>{tit}</div>
        {line && <Line isMobile={isMobile} bottom={bottom}/>}  
      </Title>
  )
}

export default DivTitle