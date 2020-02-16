import React from 'react'
import styled, { ThemeContext } from 'styled-components/native'

export default () => (

    <TermsAndConditions>
        <StyledTermsText>
            By tapping Create account or Login,
    </StyledTermsText>
        <StyledTermsText>{"I agree to Myprogram's "}</StyledTermsText>
        <TextButton>
            <StyledTermsText>Terms of Service</StyledTermsText>
        </TextButton>
        <StyledTermsText>.</StyledTermsText>

        <StyledTermsText>As this is our pre-beta version our </StyledTermsText>
        <TextButton>
            <StyledTermsText>Terms of Service</StyledTermsText>
        </TextButton>
        <StyledTermsText>are subject to change, </StyledTermsText>

        <StyledTermsText>you can follow our roadmap </StyledTermsText>
        <TextButton>
            <StyledTermsText>here</StyledTermsText>
        </TextButton>
        <StyledTermsText>.</StyledTermsText>

    </TermsAndConditions>
)

const TermsAndConditions = styled.View`
    flex-wrap: wrap;
    align-items: flex-start;
    flex-direction: row;
    margin-top: ${({ theme }) => theme.spacing.large};
`

const StyledTermsText = styled.Text`
    color: ${({ theme }) => theme.colors.bg};
    font-size: ${({ theme }) => theme.fz.small};
`
const TextButton = styled.TouchableHighlight`
    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.colors.bg};
`
/*
  termsText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  linkButton: {
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
  },
  */