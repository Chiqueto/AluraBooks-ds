import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface AbModalProps {
    children?: ReactNode | null;
    titulo?: string | null;
    imgUrl?: string | null;
    aberto: boolean;
    aoFechar?: () => void;
}

export const ModalStyle = styled.div`
display: flex;
flex-direction: column;
justify-content: start;
width: 50%;
height: 70%;
background-color: #fff;
border-radius: 8px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
padding: 20px;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 1000;
overflow-y: auto;
`
export const ModalHeader = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
h1 {
    font-size: 24px;
    margin: 0;
    color: #EB9B00;
    font-family: 'Arial', sans-serif;
    font-weight: 700;
}
`
export const ModalCloseButton = styled.button`
background-color: transparent;
border: none;
cursor: pointer;
font-size: 24px;
color: #002F52;
&:hover {
    color: #0056b3;
}
    font-family: 'Arial', sans-serif;
    font-weight: 700;
`

export const FundoModal = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(101, 101, 101, 0.85);
`

export const AbModal = ({ children, imgUrl, titulo, aoFechar, aberto }: AbModalProps) => {
    if (aberto) {
        return (
            <>
                <FundoModal onClick={aoFechar} />
                <ModalStyle>
                    {imgUrl && <img src={imgUrl} />}
                    <ModalHeader>
                        <h1>{titulo}</h1>
                        <ModalCloseButton onClick={aoFechar}>X</ModalCloseButton>
                    </ModalHeader>
                    {children}
                </ModalStyle>
            </>
        );
    }

    return null;
}