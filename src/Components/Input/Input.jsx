import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { StyleHeadline } from '../../Styles/Typography'
import { StyledDiv } from './style'

export const Input = ({ label, register, marker, errors, eyeIcon, setEyeIcon, ...rest }) => {
    return(
        <StyledDiv>
            <StyleHeadline>{label}</StyleHeadline>
            <input {...rest} {...register} />
            {marker ? <span className='eyeIcon' onClick={() => setEyeIcon(!eyeIcon)}>
                {eyeIcon ? <BsEye color='var(--color-grey-1)' /> : <BsEyeSlash color='var(--color-grey-1)' />}
            </span> : null}
            {errors ? <StyleHeadline font={'var(--color-negative)'}>{errors.message}</StyleHeadline> : null}
        </StyledDiv>
    )
}