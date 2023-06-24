import { styled } from 'styled-components'

export const StyledHeader = styled.header`
    width: 90%;
    max-width: 370px;
    height: 120px;
    margin: 0 auto;
    padding: 20px 0;


    display: flex;
    justify-content: space-between;
    align-items: end;

    .backBtn {
        width: 80px;
        height: 32px;

        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;

        background-color: var(--color-grey-3);
        color: var(--color-grey-0);
        border-radius: 4px;

        cursor: pointer;
    }

    .backBtn:hover {
        background-color: var(--color-grey-2);
    }
`

export const StyledMain = styled.main`
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;

    form {
        width: 90%;
        max-width: 370px;
        padding: 20px;
        gap: 20px;

        display: flex;
        flex-direction: column;
        align-items: center;

        background-color: var(--color-grey-3);
    }

    .registerBtn {
        width: 100%;
        height: 40px;

        background-color: var(--color-color-primary-disable);
        color: var(--color-grey-0);
        border-radius: 4px;

        cursor: pointer;
    }

    .registerBtn:hover {
        background-color: var(--color-color-primary-50);
    }
`