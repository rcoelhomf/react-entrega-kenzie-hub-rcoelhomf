import { styled } from 'styled-components'

export const StyleTitle1 = styled.h1`
    font-size: 1.125rem;
    font-family: 'Inter';
    font-weight: 700;
    font-style: normal;
    line-height: 1.75rem;
    text-decoration: none;
    text-transform: none;
    color: ${({ font }) => font ? font : 'var(--color-grey-0)'};
`

export const StyleTitle2 = styled.h2`
    font-size: 1rem;
    font-family: 'Inter';
    font-weight: 700;
    font-style: normal;
    line-height: 1.625rem;
    text-decoration: none;
    text-transform: none;
    color: ${({ font }) => font ? font : 'var(--color-grey-0)'};
`

export const StyleTitle3 = styled.h3`
    font-size: .875rem;
    font-family: 'Inter';
    font-weight: 700;
    font-style: normal;
    line-height: 1.5rem;
    text-decoration: none;
    text-transform: none;
    color: ${({ font }) => font ? font : 'var(--color-grey-0)'};
`

export const StyleHeadline = styled.p`
    font-size: .75rem;
    font-family: 'Inter';
    font-weight: 400;
    font-style: normal;
    line-height: 1.375rem;
    text-decoration: none;
    text-transform: none;
    color: ${({ font }) => font ? font : 'var(--color-grey-0)'};
`

export const StyleHeadlineBold = styled.p`
    font-size: .75rem;
    font-family: 'Inter';
    font-weight: 700;
    font-style: normal;
    line-height: 1.125rem;
    text-decoration: none;
    text-transform: none;
    color: ${({ font }) => font ? font : 'var(--color-grey-0)'};
`

export const StyleHeadlineItalic = styled.p`
    font-size: .75rem;
    font-family: 'Inter';
    font-weight: 400;
    font-style: italic;
    line-height: 1.125rem;
    text-decoration: none;
    text-transform: none;
    color: ${({ font }) => font ? font : 'var(--color-grey-0)'};
`
