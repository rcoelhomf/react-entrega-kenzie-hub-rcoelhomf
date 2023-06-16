import { styled } from "styled-components";

export const StyledHeader = styled.header`
    width: 100vw;
    height: 120px;
    padding: 20px 0;

    display: flex;
    justify-content: center;
    align-items: end;
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

        
    .pinkBtn {
        width: 100%;
        height: 40px;

        background-color: var(--color-color-primary);
        color: var(--color-grey-0);
        border-radius: 4px;

        cursor: pointer;
    }

    .pinkBtn:hover {
        background-color: var(--color-color-primary-50);
    }

    .outsideBtn {
        width: 100%;
    }

    .greyBtn {
        width: 100%;
        height: 40px;

        background-color: var(--color-grey-1);
        color: var(--color-grey-0);
        border-radius: 4px;

        cursor: pointer;
    }

    .greyBtn:hover {
        background-color: var(--color-grey-2);
    }

`