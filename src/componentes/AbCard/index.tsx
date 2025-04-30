import React, { ReactNode } from 'react';
import { styled } from 'styled-components';

export interface CardProps {
    children: ReactNode;
}

const CardEstilizado = styled.div`
    background-color: #FFFFFF;
    border-radius: 10px;
    padding: 48px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`


export const AbCard = ({ children }: CardProps) => {
    return (<CardEstilizado>
        {children}
    </CardEstilizado>)
}