import React from 'react'
import { Form, Field } from 'formik';
import AuthInput from './AuthInput';

import { ApolloError } from 'apollo-client';

const LoginForm: React.FC<Props> = ({ error, ...props }) => (
	<>
		<AuthInput name="email" placeholder="Email" label="Email" />
		<AuthInput
			name="password"
			placeholder="Password"
			label="Password"
			type="password"
		/>
	</>


);

interface Props {
	error: ApolloError | undefined;
}

export default LoginForm;