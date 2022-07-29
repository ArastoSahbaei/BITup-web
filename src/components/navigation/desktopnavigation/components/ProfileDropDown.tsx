import Path from 'routes/Path'
import styled from 'styled-components'
import { Item } from './Item'

export const ProfileDropDown = () => {
	return (
		<DropDownWrapper>
			<UList>
				<Item navigateTo={Path.auth.profilePage} image={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/2214px-How_to_use_icon.svg.png'} text='Profil' />
				<Item navigateTo={Path.auth.startPaymentPage} image={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/2214px-How_to_use_icon.svg.png'} text='Betalningar' />
				<Item navigateTo={Path.auth.historyPage} image={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/2214px-How_to_use_icon.svg.png'} text='Historik' />
				<Item image={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/2214px-How_to_use_icon.svg.png'} text='Logga ut' />
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
