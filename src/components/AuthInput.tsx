import React from 'react'
import styled from 'styled-components/native'
import { useField } from 'formik'
export default ({ label, ...props }: any) => {
    const [field, meta] = useField(props);
    const errorMsg = meta.touched && meta.error;

    return (
        <StyledView>
            <StyledText>
                {label}
            </StyledText>
            <StyledInput />
        </StyledView>
    )
}

const StyledView = styled.View`
    display: flex;
    margin-top: ${({ theme }) => theme.spacing.base};
`

const StyledText = styled.Text`
    color: ${({ theme }) => theme.colors.bg};
    font-size: ${({ theme }) => theme.fz.regular};
`

const StyledInput = styled.TextInput`
    color: ${({ theme }) => theme.colors.bg};
    padding: ${({ theme }) => theme.spacing.small} 0;
    border-bottom-color: ${({ theme }) => theme.colors.bg}
    border-bottom-width: 1px;
`