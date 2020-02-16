import React from 'react'
import styled from 'styled-components/native'


export default () => (
    <Wrapper>
        <Button> 
            <Icon>
                👉
            </Icon>
        </Button>
    </Wrapper>
)

const Wrapper = styled.View`
    align-items: flex-end;
    padding: ${({ theme }) => theme.spacing.small};
`

const Button = styled.TouchableHighlight`
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    width: 60px;
    height: 60px;
    background-color: ${({ theme }) => theme.colors.bg}
`

const Icon = styled.Text`
    font-size: ${({ theme }) => theme.fz.t2}
`