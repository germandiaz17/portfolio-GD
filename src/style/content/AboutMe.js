import styled from "styled-components";

export const SpanName = styled.span`
    color: blue;
    font-weight: 600;
`

export const Email = styled.a`
    text-decoration: none;
    color: black;
`

export const DownloadBtn = styled.button`   
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    background-color: blue;
    color: white;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    :hover {
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.4);
    }
`