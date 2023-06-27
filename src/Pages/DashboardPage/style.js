import { styled } from 'styled-components'

export const StyledSection = styled.section`
    width: 100%;
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
    width: 100%;
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
    gap: 20px;

    display: flex;
    flex-direction: column;


    .divHeader {
        width: 100%;

        display: flex;
        justify-content: space-between;
    }

    .plusBtn {
        width: 32px;
        height: 32px;

        background-color: var(--color-grey-3);
        border-radius: 4px;
        color: var(--color-grey-0);
        font-weight: 500;
        font-size: 1.25rem;
    
        cursor: pointer;
    }

    .plusBtn:hover {
        background-color: var(--color-grey-2);
    }

    .modalHeader {
        width: 100%;
        height: 45px;
        padding: 0 20px;

        background-color: var(--color-grey-2);

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .closeBtn {
        background-color: transparent;
        color: var(--color-grey-0);

        cursor: pointer;
    }

    .addForm {
        width: 100%;
        height: max-content;
        padding: 20px;
        gap: 30px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .buttonAdd {
        width: 100%;
        height: 50px;

        background-color: var(--color-color-primary);
        border-radius: 4px;
        color: var(--color-grey-0);

        cursor: pointer;
    }

    .buttonAdd:hover {
        background-color: var(--color-color-primary-50);
    }
`