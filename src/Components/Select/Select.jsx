import { StyleHeadline } from "../../Styles/Typography"
import { StyledSelect } from "./style"

export const Select = ({ children, label, register, errors }) => {
    return(
        <div>
            <StyleHeadline>{label}</StyleHeadline>
            <StyledSelect {...register}>
                {children}
            </StyledSelect>
            {errors ? <StyleHeadline font={'var(--color-negative)'}>{errors.message}</StyleHeadline> : null}
        </div>
    )
}