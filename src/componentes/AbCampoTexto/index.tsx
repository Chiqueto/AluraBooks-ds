import React from "react"
import styled from "styled-components"

export const InputEstilizado = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 4px;
    margin: 16px 0;
    label{
        padding-left: 24px;
        font-family: sans-serif;
        color: #002F52;
        font-Weight: 700;
        font-size: 16px;
    }
    input{
        padding: 10px 24px;
        border: 1px solid #002F52;
        border-radius: 24px;
        font-family: sans-serif;
        font-weight: 400;
        font-size: 16px;
    }

`

export const AbCampoTexto = () => {
    return (
        <InputEstilizado>
            <label>Email</label>
            <input type="text" />
        </InputEstilizado>
    )
}