import styled from 'styled-components';

const ContainerDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  color: ${({theme})=> theme.colors.font};
`

const Container = ({children}) => {
    return(
        <ContainerDiv>
            {children}
        </ContainerDiv>
    )
}

export default Container