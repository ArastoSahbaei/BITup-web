import { primaryColor, secondaryColor } from 'shared/styles/GlobalStyles'
import { MouseEvent } from 'react'
import { Spinner } from 'components'
import styled from 'styled-components'

export interface IButton {
	text: string
	onClick?: (event: MouseEvent) => void
	isLoading?: boolean
	disabled?: boolean
	upperCase?: boolean
	style?: any
}

export const Button: React.FC<IButton> = (props: IButton) => {
	const { text, onClick, isLoading, disabled, upperCase } = props
	return (
		<ButtonWrapper onClick={onClick} disabled={disabled} text={text} isLoading={isLoading} upperCase={upperCase} style={props.style}>
			<Span>{isLoading || text}</Span>
			{isLoading && <Spinner />}
		</ButtonWrapper>
	)
}

function isDisabled(props: Partial<IButton>) {
	return (
		props.disabled &&
		`
	background-color: #b2b2b2 !important;
	color: black !important;
	cursor: not-allowed !important;
	`
	)
}

const Span = styled.p`
	text-align: center;
	margin-top: 4px;
`

const ButtonWrapper = styled.button<IButton>`
	${(props) => props.style}
	display: inline-block;
	width: calc(${(props) => props.text?.length * 1.5}em + 1em);
	height: 3rem;
	color: white;
	${isDisabled}
	background-color: ${(props) => (props.isLoading ? secondaryColor : primaryColor)};
	outline: none;
	transition: background-color 0.2s;
	text-transform: ${(props) => (props.upperCase ? 'uppercase' : 'none')};
	letter-spacing: 1px;
	border-radius: 30px;
	font-weight: bold;
	cursor: pointer;
	box-shadow: rgb(4 17 29 / 25%) 8px 8px 8px 8px;

	${Span} {
		display: inline-block;
		position: relative;
		transition: 0.3s;
	}

	&:hover ${Span} {
		padding-right: ${(props) => (props.isLoading ? '0px;' : '20px;')};
	}
	${Span}:after {
		content: '${(props) => (props.isLoading ? '' : '»')}';
		position: absolute;
		opacity: 0;
		top: 0;
		right: -20px;
		transition: 0.5s;
	}
	&:hover ${Span}:after {
		opacity: 1;
		right: 0;
	}
`
