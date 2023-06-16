import { styled } from "styled-components";

export const StyledDiv = styled.div`
    width: 100%;

    position: relative;
    display: flex;
    flex-direction: column;
    align-items: start;

    input {
        width: 100%;
        height: 40px;
        padding: 0 20px;

        background-color: var(--color-grey-2);
        color: var(--color-grey-0);
        border: 2px solid transparent;
        border-radius: 4px;
        ::placeholder{
            color: var(--color-grey-1);
        }

        &:focus {
            border: 2px solid var(--color-grey-0);
        }

        &:focus::placeholder{
            color: transparent;
        }
    }

    .eyeIcon {
        position: absolute;
        top: 34px;
        right: 12px;

        cursor: pointer;
    }
`