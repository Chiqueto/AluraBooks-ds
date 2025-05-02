import React, { useState } from "react"
import styled from "styled-components"

export const StyledButton = styled.button`
background: #002F52;
border-radius: 100px;
width: 28px;
height: 28px;
text-align: center;
border: none;
color: #FFFFFF;
font-size: 24px;
font-weight: 400;
font-family: sans-serif;
cursor: pointer;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
&:hover{
    background:rgb(1, 42, 73);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.18);

}`

export const StyledContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 12px;
`
export const StyledText = styled.p`
  font-family: sans-serif;
  font-weight: 400;
  font-size: 18px;
  background: linear-gradient(90deg, #002F52 0%, #326589 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent; /* Fallback para navegadores modernos */
`;

const ContainerEstilizado = styled.div`
    width: 100px;
    text-align: center;
    display: inline-block;
`
const LabelEstilizada = styled.label`
    color: #002F52;
    display: block;
    font-weight: 700;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 8px;
`

export const AbQuantidade = () => {
    const [quantidade, setQuantidade] = useState(1)
    return (
        <ContainerEstilizado>
            <LabelEstilizada>Quantidade</LabelEstilizada>
            <StyledContainer>
                <StyledButton onClick={() => setQuantidade(quantidade > 0 ? quantidade - 1 : 0)}>-</StyledButton>
                <StyledText>{quantidade}</StyledText>
                <StyledButton onClick={() => setQuantidade(quantidade + 1)}>+</StyledButton>
            </StyledContainer>
        </ContainerEstilizado>

    )
}