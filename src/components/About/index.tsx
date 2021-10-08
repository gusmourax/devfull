import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#132345f0',
		color: '#fff',
		padding: '10px 0',
	},
}));

const About: React.FC = () => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<div>
				<h1>Sobre nós</h1>
			</div>
			<div style={{ maxWidth: 1000, textAlign: 'center', lineHeight: 2 }}>
				<p style={{ fontSize: 20 }}>
					Desde 2021 no mercado, a Dev Full orgulha-se em atender
					grandes e pequenas empresas com o objetivo de incluí-las no
					mercado digital ou informatizar processos que façam a
					diferença em seus dia-a-dia.
				</p>
			</div>
		</div>
	);
};

export default About;
