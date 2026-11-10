import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { api } from '../../services/api'
import { toast } from 'react-toastify'

import Logo from '../../assets/logo-cor-glow.png'
import { Button } from '../../components/Button'
import {
	Container,
	ContainerLogin,
	Form,
	InputContainer,
	LeftContainer,
	RightContainer,
	Title,
} from './styles'

export function Login() {
	const schema = yup
		.object({
			email: yup
				.string()
				.email('Digite um email válido')
				.required('O email é obrigatório'),
			password: yup
				.string()
				.min(6, 'A senha deve ter no mínimo 6 caracteres')
				.required('Digite sua senha'),
		})
		.required()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	})

	const onSubmit = async (data) => {
		const response = await toast.promise(

			api.post('/sessions', {
				email: data.email,
				password: data.password
			}),
			{
				pending: 'Verificando suas credenciais...',
				success: 'Login realizado com sucesso! 🍔',
				error: 'Email ou senha inválidos 😕',
			}

		)

		console.log(response);






	}

	return (
		<Container>
			<LeftContainer>
				<img src={Logo} alt="Logo" />
			</LeftContainer>
			<RightContainer>
				<ContainerLogin>
					<Title>
						Olá, seja bem vindo ao <span>Dev Burguer! </span>
						<br />
						Acesse com seu <span>Login e senha.</span>
					</Title>
					<Form onSubmit={handleSubmit(onSubmit)}>
						<InputContainer>
							<label>Email:</label>
							<input type="email" {...register('email')} />
							<p>{errors?.email?.message}</p>
						</InputContainer>
						<InputContainer>
							<label>Senha:</label>
							<input type="password" {...register('password')} />
							<p>{errors?.password?.message}</p>
						</InputContainer>
						<Button type="submit">Entrar</Button>
					</Form>
					<p>
						Não possui uma conta? <a>Cadastre-se</a>
					</p>
				</ContainerLogin>
			</RightContainer>
		</Container>
	)
}
