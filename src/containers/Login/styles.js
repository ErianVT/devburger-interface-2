import { Link as ReactLink } from 'react-router-dom'

import styled from 'styled-components'

import BackgroundLogin from '../../assets/background-login.png'

export const Container = styled.div`
	display: flex;
	height: 100vh;
	width: 100vw;
	background: url('${BackgroundLogin}');
	background-size: cover;
	background-position: center;
`

export const LeftContainer = styled.div`
	height: 100%;
	width: 100%;
	max-width: 50%;

	display: flex;
	align-items: center;
	justify-content: center;

	img {
		width: 65%;
	}
`

export const RightContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: start;
	flex-direction: column;

	color: white;

	height: 100%;
	width: 100%;
	max-width: 50%;

	p {
		color: #fff;
		font-size: 18px;
		font-weight: 800;
		a {
			text-decoration: underline;
		}
	}
`
export const ContainerLogin = styled.div`
	border: inset 10px #599d28;
	border-radius: 20px;
	padding: 60px;
`

export const Title = styled.h2`
	font-family: "Road Rage", sans-serif;
	font-size: 40px;
	color: #fff;

	span {
		color: #599d28;
		font-family: "Road Rage", sans-serif;
	}
`

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding: 20px;
	width: 100%;
	max-width: 400px;
`

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
	width: 100%;

	input {
		width: 100%;
		border: none;
		height: 52px;
		border-radius: 8px;
		padding: 0 16px;
	}

	label {
		font-size: 18px;
		font-weight: 600;
		color: #fff;
	}

	p {
		color: #cf3057;
		font-size: 14px;
		line-height: 80%;
		font-weight: 600;
		height: 10px;
	}
`

export const Link = styled(ReactLink)`
	text-decoration: none;
	color: #fff;
`
