import { makeStyles } from '@material-ui/styles';
import { Typography } from '@mui/material';
import React from 'react';

const useStyle = makeStyles(() => ({
	container: {
		display: 'flex',
		flexDirection: 'column',
	},
	headerTitleBackground: {
		backgroundColor: '#132345f0',
		padding: '0 25px',
		borderRadius: '0 20px',
		color: '#fff',
	},
	headerContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '20px 0',
	},
	contentContainer: {
		display: 'flex',
		justifyContent: 'space-around',
		padding: '15px 0',
		width: '100%',
		background:
			'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(19,35,69,1) 69%, rgba(31,47,79,1) 100%);',
	},
	divContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around',
	},
	divContainerContent: {
		color: '#fff',
		display: 'flex',
		flexDirection: 'column',
		maxWidth: 420,
		margin: '30px 0',
	},
}));

import ecommerceIcon from '../../assets/ecommerce.png';
import webServiceIcon from '../../assets/web_service.png';
import websitesIcon from '../../assets/websites.png';
import socialMediaIcon from '../../assets/social_media.png';
import googleIcon from '../../assets/google_publi.png';

const Services: React.FC = () => {
	const classes = useStyle();

	return (
		<div className={classes.container}>
			<div className={classes.headerContainer}>
				<div className={classes.headerTitleBackground}>
					<h1>Serviços</h1>
				</div>
			</div>
			<div className={classes.contentContainer}>
				<div className={classes.divContainer}>
					<div className={classes.divContainerContent}>
						<img
							src={ecommerceIcon.src}
							alt="E-commerce"
							width="13%"
							style={{ marginBottom: 8 }}
						/>
						<Typography component="p" variant="h5" fontSize={38}>
							E-commerce{' '}
							<span style={{ fontSize: 20 }}>(loja virtual)</span>
						</Typography>
						<Typography component="p" variant="body1">
							Venda seus produtos de maneira prática e segura. Nós
							temos a solução perfeita para suas vendas.
						</Typography>
					</div>
					<div className={classes.divContainerContent}>
						<img
							src={webServiceIcon.src}
							alt="Sistemas Web"
							width="13%"
							style={{ marginBottom: 8 }}
						/>
						<Typography component="p" variant="h5" fontSize={38}>
							Sistemas Web
						</Typography>
						<Typography component="p" variant="body1">
							Cada ramo de negócio tem suas particularidades, para
							isso nós somos especialistas em desenvolver sistemas
							personalizados de acordo com sua necessidade.
						</Typography>
					</div>
				</div>
				<div className={classes.divContainer}>
					<div className={classes.divContainerContent}>
						<img
							src={websitesIcon.src}
							alt="Websites"
							width="13%"
							style={{ marginBottom: 8, margin: 'auto' }}
						/>
						<Typography
							component="p"
							variant="h5"
							fontSize={38}
							textAlign="center"
						>
							Websites
						</Typography>
						<Typography
							component="p"
							variant="body1"
							textAlign="center"
						>
							Responsivos, dinâmicos e atraentes garantem a
							simpatia do visitante ao conhecer a sua marca e seus
							serviços. Inove em sua página na rede.
						</Typography>
					</div>
				</div>
				<div className={classes.divContainer}>
					<div className={classes.divContainerContent}>
						<img
							src={socialMediaIcon.src}
							alt="Sistemas Web"
							width="13%"
							style={{ marginBottom: 8, marginLeft: '87%' }}
						/>
						<Typography
							component="p"
							variant="h5"
							fontSize={38}
							textAlign="right"
						>
							Social Media Marketing
						</Typography>
						<Typography
							component="p"
							variant="body1"
							textAlign="right"
						>
							A interação nas redes sociais merece um planejamento
							especial que talvez seu dia-a-dia na empresa
							impeça-o de fazer, deixe essa missão conosco.
						</Typography>
					</div>
					<div className={classes.divContainerContent}>
						<img
							src={googleIcon.src}
							alt="Sistemas Web"
							width="13%"
							style={{ marginBottom: 8, marginLeft: '87%' }}
						/>
						<Typography
							component="p"
							variant="h5"
							fontSize={38}
							textAlign="right"
						>
							Publicidade Google
						</Typography>
						<Typography
							component="p"
							variant="body1"
							textAlign="right"
						>
							O Adwords é a maior ferramenta de marketing da web,
							onde você pesquisa por determinado termo e é
							apontado para você diversas opções de anúncios e
							você pode ser um desses anunciantes. Fale conosco.
						</Typography>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
