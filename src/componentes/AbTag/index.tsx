import React from 'react';
import styled from 'styled-components';

const TagEstilizada = styled.div`
    background-color: #EB9B00;
    padding: 24px 32px;
    color: #FFF;
    font-wheight: 700;
    font-size: 24px;
    display: inline-block;
    font-family: sans-serif;
`

export interface AbTagProps {
    texto?: string;
}


export const AbTag = ({ texto }: AbTagProps) => {
    return (
        <TagEstilizada>
            {texto}
        </TagEstilizada>);
}
