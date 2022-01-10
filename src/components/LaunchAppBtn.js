import { styled,css } from '@mui/system';
import Button from '@mui/material/Button';
import styles from 'styled-components';

const MyButton = styled(Button)`
  min-width: 130px;
  height: 32px;
  font-family: 'Poppins-Bold';
  font-size: 16px;
  background: #304FFD;
  border-radius: 32px;
  color: #fff;
  text-transform: Capitalize;
  padding: 0 16px;
  ${() =>
      css({
        '&:hover': {
          backgroundColor: '#304FFD',
        },
      })
  }
`
const Link = styles.a`
  display: flex;
  height: 32px;
  ${({isMobile}) => isMobile?'margin-right:20px;':''}
`

const LaunchAppBtn = ({isMobile}) => <Link isMobile={isMobile} href='/' rel="noreferrer" target="_blank" ><MyButton ismobile={isMobile.toString()}>Launch App</MyButton></Link>


export default LaunchAppBtn