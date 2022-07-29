import { useWindowDimensions } from 'hooks'
import { DesktopNavigation } from './desktopnavigation/DesktopNavigation'
import { MobileNavigation } from './mobilenavigation/MobileNavigation'

export const Navigation: React.FC = () => {
	const { width } = useWindowDimensions()

	const determineDimension = () => {
		return width <= 1000 ? <MobileNavigation /> : <DesktopNavigation />
	}

	return determineDimension()
}
