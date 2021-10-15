import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Button, Container, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';

const useStyle = makeStyles(() => ({
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		padding: '30px 0',
	},
	formContainer: {
		backgroundColor: '#bdcced',
		marginTop: 20,
		padding: '20px 50px',
		borderRadius: '20px 0',
		minWidth: 600,
	},
	form: {
		width: '100%',
	},
}));

const Contact: React.FC = () => {
	const classes = useStyle();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const appUrl =
			window.location.protocol +
			'//' +
			window.location.hostname +
			(window.location.port ? ':' + window.location.port : '');
		try {
			await axios.post(`${appUrl}/api/contact`, {
				name,
				email,
				message,
				appUrl,
			});
			alert('Mensagem enviada!');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Container maxWidth="md" className={classes.container}>
			<Typography
				component="p"
				variant="h3"
				fontSize={40}
				marginBottom={3}
				textAlign="center"
			>
				Contato
			</Typography>
			<Typography
				component="p"
				variant="body1"
				textAlign="center"
				fontSize={22}
			>
				Obrigado por ter chegado até nossa página! Teremos um enorme
				prazer em realizar seu projeto ou atender sua solicitação de
				suporte.
			</Typography>
			<div className={classes.formContainer}>
				<form className={classes.form} onSubmit={handleSubmit}>
					<TextField
						label="Nome"
						variant="outlined"
						fullWidth
						margin="normal"
						required
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<TextField
						label="E-mail"
						variant="outlined"
						fullWidth
						margin="normal"
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<TextField
						label="Nos informe o que precisa aqui..."
						variant="outlined"
						fullWidth
						margin="normal"
						multiline
						rows={7}
						required
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
					<Button
						variant="contained"
						fullWidth
						style={{ marginTop: 10 }}
						type="submit"
					>
						Enviar
					</Button>
				</form>
			</div>
		</Container>
	);
};

export default Contact;
