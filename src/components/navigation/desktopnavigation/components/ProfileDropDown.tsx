import Path from 'routes/Path'
import styled from 'styled-components'
import { Item } from './Item'
import logout from 'shared/images/svg/logout.svg'
import history from 'shared/images/svg/history.svg'
import profile from 'shared/images/svg/profile.svg'
import invoice from 'shared/images/svg/invoice.svg'

export const ProfileDropDown = () => {
	return (
		<DropDownWrapper>
			<UList>
				<Item navigateTo={Path.auth.profilePage} image={profile} text='Profil' />
				<Item navigateTo={Path.auth.startPaymentPage} image={invoice} text='Ny Betalning' />
				<Item navigateTo={Path.auth.historyPage} image={history} text='Historik' />
				<hr />
				<Item image={logout} text='Logga ut' />
			</UList>
		</DropDownWrapper>
	)
}

export const DropDownWrapper = styled.div`
	position: absolute;
	opacity: 0;
	visibility: hidden;
	color: rgb(4, 17, 29);
	background-color: rgb(255, 255, 255);
	box-shadow: rgb(0 0 0 / 16%) 0px 4px 16px;
	transition: visibility 0.3s linear, opacity 0.2s linear;
	z-index: 9999;
	width: 250px;
	margin-top: 42px;
	border-radius: 2%;
	&:hover {
		opacity: 1;
		visibility: visible;
	}
`

const UList = styled.ul`
	list-style-type: none;
`
