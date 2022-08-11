import { withStyles } from '@material-ui/core/styles'
import TextField from '@mui/material/TextField'
import styled from 'styled-components'

const InputField = withStyles({
	root: {
		'& label.Mui-focused': {
			color: '#6e26fc',
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: '#6e26fc',
		},
		'& .MuiOutlinedInput-root': {
			'&.Mui-focused fieldset': {
				borderColor: '#6e26fc',
			},
		},
	},
})(TextField)

interface Props {
	label: string
	onChange?: any
	error?: boolean
	type?: string
}

export const Input: React.FC<Props> = (props: Props) => {
	const { label, type, error = false } = props

	return (
		<Wrapper>
			<InputField onChange={props.onChange} type={type} error={error} id='outlined-basic' label={label} variant='outlined' fullWidth={true} />
		</Wrapper>
	)
}

const Wrapper = styled.div``
