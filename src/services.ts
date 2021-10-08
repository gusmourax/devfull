import {
	Web,
	ShoppingCart,
	Language,
	PhoneAndroid,
	Google,
} from '@mui/icons-material';

interface IService {
	Icon: any;
	description: string;
}

export const services: IService[] = [
	{
		description: 'Websites',
		Icon: Web,
	},
	{
		description: 'E-Commerce',
		Icon: ShoppingCart,
	},
	{
		description: 'Sistemas Web',
		Icon: Language,
	},
	{
		description: 'Aplicativos Mobile',
		Icon: PhoneAndroid,
	},
	{
		description: 'Publicidade Google',
		Icon: Google,
	},
];
