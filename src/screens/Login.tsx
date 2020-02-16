import React from 'react'
import styled from 'styled-components/native'
import LoginForm from '../components/LoginForm'
import gql from 'graphql-tag'
import { Formik } from 'formik';
import { useMutation } from '@apollo/react-hooks'
import * as yup from 'yup'
import RoundButton from '../components/RoundButton'
export const schema = yup.object().shape({
    email: yup
        .string()
        .email()
        .required(),

    password: yup
        .string()
        .min(4)
        .required()
})

export default () => {

    const [login, { error, client, loading }] = useMutation(LoginDocument);
    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={schema}
            onSubmit={async ({ email, password }: FieldProps) => {
                const response = await login({
                    variables: { credentials: { email, password } }
                });

                const { token } = response.data!.login;
                if (token && client) {
                    saveToken(token, client);
                    await localStorage.setItem('authToken', token);
                }
            }}
        >
            <KeyboardView>
                <Wrapper>
                    <Scroll>
                        <StyledText>
                            Login
                    </StyledText>


                        <LoginForm error={error} />
                    </Scroll>
                </Wrapper>
                <RoundButton />
            </KeyboardView>
        </Formik>
    )
}

const KeyboardView = styled.KeyboardAvoidingView`
    display: flex;
    flex: 1;
    background-color: ${({ theme }) => theme.colors.primary}
`

const Wrapper = styled.View`
    margin-top: 40%;
    flex: 1;
    margin-left: ${({ theme }) => theme.spacing.small};
    margin-right: ${({ theme }) => theme.spacing.small};
`

const Scroll = styled.ScrollView`

`

const StyledText = styled.Text`
    font-size: ${({ theme }) => theme.fz.t3};
    color: ${({ theme }) => theme.colors.bg};
    margin-bottom: ${({ theme }) => theme.spacing.base};
`

interface FieldProps {
    email: string;
    password: string;
}

export const LoginDocument = gql`
    mutation Login($credentials: LoginInput!) {
  login(credentials: $credentials) {
    token
    user {
      id
    }
  }
}`

export function saveToken(token: string, client: any) {
    return client.writeData({
        data: {
            myToken: token
        }
    });
}