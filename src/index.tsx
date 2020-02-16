import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import Welcome from './screens/Welcome'

export default () => (
	<ThemeProvider theme={themes.light}>
		<Welcome />
	</ThemeProvider>
)

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

const colors = {
	watermelon: '#FF5A5F',
	green: '#00A699',
	darkcyan: '#008388',
	orange: '#FC642D',
	charcoal: '#484848',
	bluecharcoal: '#1F2933',
	grey: '#767676',
}

const shared = {
	spacing,
	fz
}

const themes = {
	light: {
		colors: {
			bg: 'white',
			primary: colors.watermelon,
			secondary: colors.green,
			accent: colors.orange,
			text: colors.charcoal,
			...colors
		},
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

