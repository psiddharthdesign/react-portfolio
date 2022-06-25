import styled, {css, keyframes} from "styled-components"
import {StyledButton} from './styles'

const rotateAnimation = keyframes`
  0%{
    transform: rotateZ(0deg);
  }
  100%{
    transform: rotateZ(360deg);
  }
`

const scaleAnimation = keyframes`
0%{
  transform: translateX(50%) scale(2);
}
50%{
  transform: scale(1);
}
100%{
  transform: translateX(50%) scale(2) ;
}
`

const colorAnimation = keyframes`
0%, 100%{
  color: red;
}
20%{
  color: purple;
}
40%{
  color: pink;
}
60%{
  color: brown;
}

`

 const HeaderGrid = styled.div`
  justify-content: space-between;
  margin-bottom: 32px;
`

const StyledImage = styled.img`
  height: 300px;
  width: 300px;
  margin: 16px 0px;
  border-radius: 50%;
  border: 5px dashed pink;
  animation: ${rotateAnimation} 1s infinite linear;
  `

 const HeaderContent = styled.div`
  grid-row-gap: 24px;
`

 const StyledHeading1 = styled.h1` 
  font-size: 48px;
  animation: ${scaleAnimation} 1s infinite ease, ${colorAnimation} 2s infinite ease;
`

 const HeaderContentBio = styled.p`
  font-size: 14px;
  line-height: 24px;
  width: 492px;
  animation: ${scaleAnimation} 3s infinite ease 0.15s, ${colorAnimation} 5s infinite ease 0.35s;
`
 

 const StyledParagraph2 = styled.p`
 ${({theme}) => css`
  border: 1px solid pink;
    padding:16px 24px;
    background-color: ${theme.secondary};
 `}
`

 const HeroButton = styled(StyledButton)`
  padding: 16px 64px;
  font-size: 24px;
`

export function Header() {
  return <HeaderGrid>
    <HeaderContent>
      <StyledHeading1>Siddharth Ponnapalli</StyledHeading1>
      <HeaderContentBio>Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </HeaderContentBio>
      <StyledImage src="https://cdn.dribbble.com/users/2177664/avatars/normal/8750d45b91318c0ab6327cecbee79c63.jpeg?1650276894" />
      <HeroButton>Let’s get started</HeroButton>
    </HeaderContent>

    <StyledParagraph2>Hello World 3</StyledParagraph2>
  </HeaderGrid>;
}
