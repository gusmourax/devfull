import { Typography } from '@mui/material';
import styles from './footer.module.css';

const Footer: React.FC = () => {

    return (
        <div className={styles.container} >
            <Typography component="p" variant="body2" >
                Dev Full - Soluções digitais | Todos direitos reservados&copy; - {new Date().getFullYear()}
            </Typography>
        </div>
    );

}

export default Footer;