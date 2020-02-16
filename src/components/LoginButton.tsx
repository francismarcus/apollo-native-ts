import React from 'react'
import styled from 'styled-components/native'

export default ({ children }) => (
    <StyledTouchableHighlight>
        <StyledText>
            {children}
        </StyledText>
    </StyledTouchableHighlight>
)

const StyledTouchableHighlight = styled.TouchableHighlight`
    padding: ${({ theme }) => theme.spacing.small};
    border-radius: 40px;
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.watermelon};
    background-color: ${({ theme }) => theme.colors.bg};
    margin-bottom: ${({ theme }) => theme.spacing.base};
`

const StyledText = styled.Text`
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fz.regular};
    text-align: center;
`