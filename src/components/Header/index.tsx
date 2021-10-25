import Image from 'next/image';
import {
	AppBar,
	Box,
	Button,
	Drawer,
	IconButton,
	Toolbar,
	Typography,
} from '@mui/material';

import logo from '../../assets/logo.jpeg';
import { useState } from 'react';
import MembersDialog from '../MembersDialog';

const Header: React.FC = () => {

	const [dialogOpen, setDialogOpen] = useState(false);

	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static">
					<Toolbar>
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
						<Button
							variant="contained"
							color="success"
							onClick={() => setDialogOpen(true)}
						>
							Mostrar integrantes do grupo
						</Button>
					</Toolbar>
				</AppBar>
			</Box>
			<MembersDialog open={dialogOpen} setOpen={setDialogOpen} />
		</>
	);
};

export default Header;
