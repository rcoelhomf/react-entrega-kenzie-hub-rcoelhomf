import { BsEye, BsEyeSlash } from 'react-icons/bs'

export const Input = ({ label, id, register, marker, eyeIcon, setEyeIcon, ...rest }) => {
    return(
        <div>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...rest} {...register} />
            {marker ? <span onClick={() => setEyeIcon(!eyeIcon)}>
                {eyeIcon ? <BsEye color='var(--color-grey-1)' /> : <BsEyeSlash color='var(--color-grey-1)' />}
            </span> : null}
        </div>
    )
}