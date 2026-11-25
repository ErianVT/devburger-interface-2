import { Link } from 'react-router-dom'

import styled from 'styled-components'

import Background from '../../assets/background-home.png'
import BannerMenu from '../../assets/background-menu.svg'

export const Container = styled.div`
	width: 100%;
	min-height: 100vh;

	background:
		linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
		url('${Background}');
	background-size: cover;
`

export const Banner = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 480px;
	width: 100%;
	position: relative;

	background: url('${BannerMenu}') no-repeat;
	background-color: #1f1f1f;
	background-position: center;
	background-size: cover;

	h1 {
		font-family: "Road Rage", sans-serif;
		font-size: 80px;
		line-height: 65px;
		color: #fff;
		position: absolute;

		right: 20%;
		top: 30%;

		span {
			display: block;
			color: #fff;
			font-size: 20px;
		}
	}
`

export const CategoryMenu = styled.div`
	display: flex;
	justify-content: center;
	gap: 50px;
	margin-top: 30px;
`

export const CategoryButton = styled(Link)`
	text-decoration: none;
	cursor: pointer;
	background: none;
	color: ${(props) => (props.$isActiveCategory ? ' #ff8c05' : '#5d5d5e')};
	font-size: 24px;
	font-weight: 600;
	padding-bottom: 5px;
	line-height: 20px;
	border: none;
	border-bottom: ${(props) => props.$isActiveCategory && '3px solid #ff8c05'};
	animation: ${(props) =>
		props.$isActiveCategory && ' subirEDescer 2s ease-in-out infinite'};

	@keyframes subirEDescer {
		0%,
		100% {
			transform: translateY(1px); /* Posição inicial e final */
		}
		50% {
			transform: translateY(-3px); /* Sobe 15 pixels na metade do tempo */
		}
	}
`

export const ProductsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	padding: 40px;
	gap: 60px;
	justify-content: center;
	max-width: 1280;
	margin: 50px 5%;
`

// animation: subirEDescer 2s ease-in-out infinite;

// PAREI NA AULA 29
