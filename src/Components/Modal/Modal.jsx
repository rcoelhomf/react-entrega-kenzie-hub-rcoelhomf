import { useContext, useEffect } from "react"
import { TechContext } from "../../Providers/TechProvider"
import { BackGroundModal, ModalContainer } from "./Style"

export const Modal = ({ children }) => {

    const { setHandleModal, setTechnology } = useContext(TechContext)

    useEffect(() => {
        const handleKey = (e) => {
            if(e.key === 'Escape'){
                setHandleModal(false)
                setTechnology(null)
            }
        }

        window.addEventListener('keydown', handleKey)
        
        return () => {
            window.removeEventListener('keydown', handleKey)
        }

    }, [])

    return (
        <BackGroundModal>
            <ModalContainer>
                { children }
            </ModalContainer>
        </BackGroundModal>
    )
}