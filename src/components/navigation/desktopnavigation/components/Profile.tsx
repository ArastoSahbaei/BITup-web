import styled from 'styled-components'
import { DropDownWrapper, ProfileDropDown } from './ProfileDropDown'

export const Profile = () => {
	return (
		<Wrapper>
			<p>Konto</p>
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
