import { styled } from 'styled-components'

export const StyledContainer = styled.div`
    width: 100%;
    height: max-content;
`

export const StyledList = styled.ul`
    width: 100%;
    height: max-content;
    padding: 30px;
    gap: 20px;

    display: flex;
    flex-direction: column;

    background-color: var(--color-grey-2);
    border-radius: 4px;

    .listItem {
        width: 100%;
        height: 50px;
        
        display: flex;
        align-items: center;
    }
    
    .itemDiv {
        width: 100%;
        height: 100%;
        padding: 0 30px;
        
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        background-color: var(--color-grey-4);
        border-radius: 4px;
        
        cursor: pointer;
    }
    
    .itemDiv:hover {
        background-color: var(--color-grey-3);
    }

    .headerModal {
        width: 100%;
        height: 45px;
        padding: 0 20px;

        background-color: var(--color-grey-2);

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .buttonHeader {
        background-color: transparent;
        color: var(--color-grey-0);

        cursor: pointer;
    }

    .editForm {
        width: 100%;
        height: max-content;
        padding: 20px;
        gap: 30px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .bottomDiv {
        width: 100%;
        gap: 20px;

        display: flex;
        justify-content: space-between;
    }

    .submitBtn {
        height: 45px;
        width: 60%;

        background-color: var(--color-color-primary-disable);
        border-radius: 4px;
        color: var(--color-grey-0);

        cursor: pointer;
    }

    .submitBtn:hover {
        background-color: var(--color-color-primary-50);
    }

    .deleteBtn {
        height: 45px;
        width: 30%;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: var(--color-grey-1);
        border-radius: 4px;
        color: var(--color-grey-0);

        cursor: pointer;
    }

    .deleteBtn:hover {
        background-color: var(--color-grey-2);
    }
`