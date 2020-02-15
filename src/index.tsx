import React from 'react'
import First from './components/First'
import styled, { ThemeProvider } from 'styled-components/native'

export default () => (
	<ThemeProvider theme={themes.light}>
		<Container>
			<StyledText> Hello </StyledText>
		</Container>
	</ThemeProvider>
)

const StyledText = styled.Text`
	font-size: ${props => props.theme.fz.t1};
	color: ${props => props.theme.color}
`

const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.bgColor};
	align-items: center;
	justify-content: center;
`

const fz = {
	micro: "8px", // 8
	small: "14px", // 18
	regular: "17px", // 22
	large: "19px", // 24
	t3: "24px", // 28
	t2: "32px", // 36
	t1: "44px", // 56
}
const spacing = {
	tiny: "8px",
	small: "16px",
	base: "24px",
	large: "48px",
	xlarge: "64px"
}

const shared = {
	spacing,
	fz
}

const themes = {
	light: {
		type: 'light',
		bgColor: 'white',
		color: '#ff5a5f',
		primaryText: '#484848',
		...shared
	},

	dark: {
		type: 'dark',
		bgColor: '#1F2933',
		color: '#ff5a5f',
		primaryText: 'white',
		...shared

	}
};

