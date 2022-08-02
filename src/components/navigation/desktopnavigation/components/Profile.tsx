import styled from 'styled-components'
import { DropDownWrapper, ProfileDropDown } from './ProfileDropDown'

export const Profile = () => {
	return (
		<Wrapper>
			<Title>Konto</Title>
			<ProfileDropDown />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	cursor: pointer;
	display: grid;
	grid-gap: 6px;
	grid-template-columns: repeat(4, 1fr);
	&:hover {
		${DropDownWrapper} {
			opacity: 1 !important;
			visibility: visible !important;
		}
	}
`

const Title = styled.span`
	text-align: center;
	justify-self: center;
	align-self: center;
`
