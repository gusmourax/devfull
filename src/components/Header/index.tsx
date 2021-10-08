import Image from 'next/image';
import {
	AppBar,
	Box,
	Drawer,
	IconButton,
	Toolbar,
	Typography,
} from '@mui/material';
import { Menu } from '@mui/icons-material';
import { useState } from 'react';

import logo from '../../assets/logo.jpeg';

const Header: React.FC = () => {
	const [drawerOpen, setDrawerOpen] = useState(false);

	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static">
					<Toolbar>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 2 }}
							onClick={() => setDrawerOpen(true)}
						>
							<Menu />
						</IconButton>
						<Typography
							variant="h6"
							component="div"
							sx={{ flexGrow: 1 }}
							style={{
								display: 'flex',
								padding: '8px 0',
							}}
						>
							<img
								src={logo.src}
								style={{
									height: 65,
									width: 70,
									borderRadius: '50%',
								}}
							/>
						</Typography>
					</Toolbar>
				</AppBar>
			</Box>
			<Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
				<h1>Teste</h1>
			</Drawer>
		</>
	);
};

export default Header;
