const landingPage = '/home'
const signInPage = '/logga-in'
const gettingStartedPage = '/kom-i-kontakt'
const resetPasswordPage = '/reset/:token'
const validateUserEmailPage = '/validate/:token'

const auth = {
	profilePage: '/profil',
	historyPage: '/historik',
	startPaymentPage: '/ny-betalning',
}

const admin = {
	landingPage: '/admin',
}

export default {
	landingPage,
	signInPage,
	gettingStartedPage,
	resetPasswordPage,
	validateUserEmailPage,
	auth,
	admin
}