import { useState } from 'react';
import styled, {css} from "styled-components"
import { StyledButton } from './styles';

 const GreenButton = styled(StyledButton)`
  background-color: #75B02A;
`

 const RedButton = styled(StyledButton)`
 ${({theme}) => {
  return css`
  background-color: ${theme.primary};
 `
 }}
  
`


const RedButton2 = styled(StyledButton)`
  background-color: red; 
`

 const BlueButton = styled(StyledButton)`
  background-color: #2A3FB0;
`
 const FooterGrid = styled.div`
  display: flex;
  justify-content: space-between;
  > * {
    max-width: 160px;
  }  
`
export function Footer() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function increment2() {
    setCount2(count2 + 1);
  }
  function increment3() {
    setCount3(count3 + 1);
  }
  return <FooterGrid>
    <RedButton onClick={increment}>Counter 1: {count}</RedButton>
    <GreenButton onClick={increment2}>Counter 2: {count2}</GreenButton>
    <BlueButton onClick={increment3}>Counter 3: {count3}</BlueButton>
  </FooterGrid>;
}
