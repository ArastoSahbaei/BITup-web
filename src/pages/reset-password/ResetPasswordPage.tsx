import React, { useState, useEffect } from 'react'
import { useAuthentication } from '../../hooks'

export const ResetPasswordPage: React.FC = () => {
	const [newPassword, setNewPassword] = useState<string>('')
	const [data, setData] = useState<any>({})
	const getTokenFromURL = window.location.href.split('/').reverse()[0]
	const { login, resetPasswordWithToken } = useAuthentication()

	const requestNewPassword = async () => {
		const newPasswordWithEmailToken = { password: newPassword, resetPasswordToken: getTokenFromURL }
		/* const response = await CodicAPIService.resetPassword(newPasswordWithEmailToken)
		setData(response) */
	}

	const loginUserIfPasswordGotReset = async () => {
		const loginCredentials: any = { username: data.data?.username, password: newPassword }
		if (data.status == 200) {
			login(loginCredentials)
		}
	}

	useEffect(() => {
		loginUserIfPasswordGotReset()
	}, [data])

	return (
		<div>
			<h1>This is the resetPasswordView</h1>
			<input placeholder='Your new password' onChange={(event) => setNewPassword(event.target.value)} /> <br />
			<button onClick={() => resetPasswordWithToken({ newPassword: newPassword, token: getTokenFromURL })}>reset pw</button>
		</div>
	)
}
