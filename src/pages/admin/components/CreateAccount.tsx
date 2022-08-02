import { useState } from 'react'
import { useAuthentication } from '../../../hooks'
import { IcreateAccount, IpersonalDetails } from '../../../shared/interfaces'

export const CreateAccount = () => {
	const { createAccountAndSendInvite } = useAuthentication()
	const [personalDetails, setPersonalDetails] = useState<IpersonalDetails>({
		firstName: '123',
		lastName: '123',
		country: '123',
		address: '123',
		zipCode: '123',
		phone: '123',
	})
	const [accountData, setAccountData] = useState<IcreateAccount>({
		email: '',
		storeName: '',
		personalDetails: personalDetails,
	})

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>, target: keyof IcreateAccount | any) => {
		setAccountData({ ...accountData, [target]: event.target.value })
	}

	return (
		<div>
			<h1>{accountData.personalDetails.firstName}</h1>
			<input placeholder='email' onChange={(event) => handleChange(event, 'email')} /> <br />
			<input placeholder='storeID' onChange={(event) => handleChange(event, 'storeID')} /> <br />
			<input placeholder='firstName' onChange={(event) => handleChange(event, 'firstName')} /> <br />
			<input placeholder='lastName' onChange={(event) => handleChange(event, 'personalDetails.lastName')} /> <br />
			<input placeholder='country' onChange={(event) => handleChange(event, 'email')} /> <br />
			<input placeholder='address' onChange={(event) => handleChange(event, 'email')} /> <br />
			<input placeholder='zipCode' onChange={(event) => handleChange(event, 'email')} /> <br />
			<input placeholder='phone' onChange={(event) => handleChange(event, 'email')} /> <br />
			<button onClick={() => createAccountAndSendInvite(accountData)}>send invite</button>
		</div>
	)
}
