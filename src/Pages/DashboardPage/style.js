import { styled } from 'styled-components'

export const StyledSection = styled.section`
    width: 100vw;
    height: 80px;

    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;

    background-color: var(--color-grey-4);
    border-bottom: 2px solid var(--color-grey-2);

    nav {
        width: 90%;
        max-width: 1200px;
        height: 100%;
        padding: 20px 0;

        display: flex;
        justify-content: space-between;
        align-items: end;
    }

    .logOut {
        width: 56px;
        height: 32px;

        background-color: var(--color-grey-3);
        border-radius: 4px;
        color: var(--color-grey-0);

        cursor: pointer;
    }

    .logOut:hover {
        background-color: var(--color-grey-2);
    }
`

export const LoadDiv = styled.div`
    width: 100vw;
    height: 100vh;

    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledHeader = styled.header`
    width: 100vw;
    height: 120px;
    margin-top: 80px;
    padding: 35px 0;

    display: flex;
    justify-content: center;

    background-color: var(--color-grey-4);
    border-bottom: 2px solid var(--color-grey-2);

    div {
        width: 90%;
        max-width: 1200px;
        height: 100%;

        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
`

export const StyledDiv = styled.div`
    width: 90%;
    max-width: 1200px;
    height: max-content;
    margin: 0 auto;
    padding: 40px 0;
`