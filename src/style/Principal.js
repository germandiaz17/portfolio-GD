import styled from 'styled-components'

export const ContentPricipal = styled.div`
    display: flex;
    font-family: 'Roboto', sans-serif;
`

export const NavBar = styled.div`
    background-color: #131111;
    min-width: 300px;
    height: 100vh;
    position: fixed;
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media (max-width: 960px) {
        display: none;
    }
`

export const Portfolio = styled.div`
    width: 100%;
    margin-left: 313px;
    @media (max-width: 960px) {
        margin-left: 0;
    }
`