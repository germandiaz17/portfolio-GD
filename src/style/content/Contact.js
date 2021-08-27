import styled from "styled-components";

export const TitleContact = styled.h4`
    color: blue;
    font-weight: 700;
    text-align: center;
`

export const InfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Social = styled.div`
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const FormInfo = styled.div`
    display: flex;
    justify-content: space-between;

    @media(max-width: 776px) {
        display: block;
    }
`


export const InputText = styled.input`
    border: 0;
    padding: 7px;
    margin-bottom: 10px;
    border: 1px gray solid;
`

export const AreaText = styled.textarea`
    border: 0;
    height: 140px;
    border: 1px gray solid;
`