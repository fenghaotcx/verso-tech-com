import { styled,css } from '@mui/system';
import Button from '@mui/material/Button';

const MyButton = styled(Button)`
  height: 30px;
  font-family: 'Poppins';
  font-size: 14px;
  background:  rgba(48, 79, 253, 0.2);
  border-radius: 32px;
  color: #fff;
  text-transform: Capitalize;
  padding: 0 16px;
  margin-left: ${({index})=> index===0 ?'40px':'24px'} ;
  ${() =>
      css({
        '&:hover': {
          backgroundColor: '#304FFD',
          // fontFamily: 'Poppins-Bold',
        },
      })
  }
`

const TopNavBar = ({name,index}) => {
  const scrollToAnchor = (anchorName) => {
    if (anchorName) {
      const anchorElement = document.getElementById(anchorName);
      if(anchorElement) {
        setTimeout(() => {
          anchorElement.scrollIntoView(
            {behavior: 'smooth'}
          );
        },200)
      }
    }
  }
  return (
    <MyButton onClick={()=> scrollToAnchor(name)} index={index}>{name}</MyButton>
  )
}


export default TopNavBar