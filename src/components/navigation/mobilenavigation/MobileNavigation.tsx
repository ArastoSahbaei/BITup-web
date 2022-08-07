import { HamburgerButton } from './components/HamburgerButton'
import { SideBar } from './components/SideBar'
import { Backdrop } from 'components/Backdrop'
import { useState } from 'react'
import styled from 'styled-components'

export const MobileNavigation: React.FC = (): JSX.Element => {
	const [openDrawer, setOpenDrawer] = useState<boolean>(false)

	return (
		<Div>
			<HamburgerButton drawerHandler={setOpenDrawer} />
			<SideBar drawerIsOpen={openDrawer} drawerHandler={setOpenDrawer} />
			{openDrawer && <Backdrop drawerHandler={setOpenDrawer} />}
		</Div>
	)
}

const Div = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 4%;
	background-color: ${(props) => props.theme.bColor};
	position: sticky;
	top: ${(props) => props.theme.top};
	width: 100%;
	vertical-align: middle;
	z-index: 1000;
	transition: top 0.6s;
`
