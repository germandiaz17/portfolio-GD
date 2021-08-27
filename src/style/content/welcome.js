import styled from "styled-components";
import bg from '../../img/fondo.jpg'

export const Init = styled.div`
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
`

export const DarkScreen =styled.div`
    position: absolute;
    top: 0;
    left: 314px;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 960px) {
        left: 0;
    }
`

export const TitleContent = styled.div`
    text-align: center;
    color: white;
`