import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    background-color: ${(props) => props.theme.colors.primary};
    
`

export const Button = styled.button`
    border: 0;
    max-width: 80%;
    background-color: ${(props) => (props.disabled ? props.theme.colors.primary : props.theme.colors.secondary )}

`