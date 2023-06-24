import { styled } from 'tyled-components'

export const BackGroundModal = styled.div`
    position: fixed;

    display: flex;
    justify-content: center;
    align-items: center;

    inset: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,.5);
`

export const ModalContainer = styled.div`
    width: 90%;
    max-width: 369px;
    height: 342px;

    background-color: var(--color-grey-3);
    border-radius: 4px;

    overflow: hidden;
`