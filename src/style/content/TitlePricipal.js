import styled from "styled-components";

export const Content = styled.div`
    width: 65%;
    height: 100vh;
    margin: auto;

    @media(max-width: 568px) {
        width: 80%;
    }
`

export const ContentInfo = styled.div`
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContentSection = styled.div`
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

export const ContentTitle = styled.div`
    text-align: center;
    font-size: 20px;
` 

export const BackTitle = styled.h2`
    position: relative;
    font-size: 600%;
    font-weight: 800;
    color: #EEEEEE;

    @media(max-width: 1123px) {
        font-size: 400%;
    }

    @media(max-width: 547px) {
        font-size: 200%;
    }

    @media(max-width: 378px) {
        font-size: 80%;
    }
`
export const FrontTitle = styled.h4` 
    position: absolute;
    bottom: 32%;
    left: 41%;
    color:  black;
    font-weight: 700;
    font-size: 22px;

    @media(max-width: 1123px) {
        font-size: 20px;
        left: 35%;
    }

    @media(max-width: 550px) {
        font-size: 15px;
        bottom: 15%;
        left: 35%;
    }

    @media(max-width: 378px) {
        font-size: 5px;
        bottom: 0%;
        left: 42%;
    }
`