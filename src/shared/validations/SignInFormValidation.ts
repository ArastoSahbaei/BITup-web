import * as Yup from 'yup'

export const signInFormValidation = Yup.object({
	email: Yup.string()
		.email('Ogiltigt email-format')
		.required('Detta fält är obligatoriskt.'),
	password: Yup.string()
		.min(2, 'Ange vad ärendet gäller. Ex: Ang. utbildning')
		.required('Detta fält är obligatoriskt.'),
})
