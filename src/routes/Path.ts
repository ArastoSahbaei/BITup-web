const signInPage = '/logga-in'
const landingPage = '/home'
const resetPasswordPage = '/reset/:token'
const gettingStartedPage = '/kom-i-kontakt'
const validateUserEmailPage = '/validate/:token'

const auth = {
	profilePage: '/profil',
	historyPage: '/historik',
	onBoardingPage: '/onboarding',
	startPaymentPage: '/ny-betalning',
}

const admin = {
	landingPage: '/admin',
}

export default {
	signInPage,
	landingPage,
	resetPasswordPage,
	gettingStartedPage,
	validateUserEmailPage,
	auth,
	admin
}