import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyle = makeStyles((theme) => ({
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
	contentContainer: {},
}));

const Services: React.FC = () => {
	const classes = useStyle();

	return (
		<div className={classes.container}>
			<div className={classes.headerContainer}>
				<div className={classes.headerTitleBackground}>
					<h1>Serviços</h1>
				</div>
			</div>
			<div></div>
		</div>
	);
};

export default Services;
