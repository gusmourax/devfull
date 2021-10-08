import { useTheme, useMediaQuery } from '@mui/material';
import { Box } from '@material-ui/system';
import React from 'react';

import Carousel from '../src/components/Carousel';
import Header from '../src/components/Header';
import { services } from '../src/services';
import About from '../src/components/About';
import Map from '../src/components/Map';
import Services from '../src/components/Services';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles(() => ({
	servicesBox: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		border: '1px solid #999',
		transition: 'all 300ms',
		'&:hover': {
			transform: 'scale(1.04)',
			transition: 'all 300ms',
		},
	},
}));

const Home: React.FC = () => {
	const classes = useStyle();
	const theme = useTheme();
	const mobileWidth = useMediaQuery('(max-width: 600px)');

	return (
		<>
			<Header />
			<Carousel />
			<Box display="flex" flexDirection={mobileWidth ? 'column' : 'row'}>
				{services.map((service) => (
					<Box
						className={classes.servicesBox}
						key={service.description}
						height={mobileWidth ? '80px' : '180px'}
						bgcolor={theme.palette.grey[300]}
					>
						<service.Icon
							fontSize={mobileWidth ? 'medium' : 'large'}
							style={{ marginRight: 20 }}
						/>
						<p>{service.description}</p>
					</Box>
				))}
			</Box>
			<About />
			<Services />
			<Map />
		</>
	);
};

export default Home;
