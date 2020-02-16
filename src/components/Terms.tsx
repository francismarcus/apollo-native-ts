import React from 'react'
import styled, { ThemeContext } from 'styled-components/native'

export default () => (

    <TermsAndConditions>
        <StyledTermsText>
            By tapping Continue, Create Account or More
    </StyledTermsText>
        <StyledTermsText>{" options,"}</StyledTermsText>
        <StyledTermsText>{"I agree to Myprogram's "}</StyledTermsText>
        <TextButton>
            <StyledTermsText>Terms of Service</StyledTermsText>
        </TextButton>
        <StyledTermsText>,</StyledTermsText>
        <TextButton>
            <StyledTermsText>Payments Terms of Service</StyledTermsText>
        </TextButton>
        <StyledTermsText>,</StyledTermsText>
        <TextButton>
            <StyledTermsText>Privacy Policy</StyledTermsText>
        </TextButton>
        <StyledTermsText>, and</StyledTermsText>
        <TextButton>
            <StyledTermsText>Nondiscrimination Policy</StyledTermsText>
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