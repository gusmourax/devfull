import { Accordion } from "@material-ui/core";
import { AccordionDetails, AccordionSummary, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import { members } from "./members";

import styles from './members-dialog.module.css';

interface IMembersDialogProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MembersDialog: React.FC<IMembersDialogProps> = ({ open, setOpen }) => {
    return (
        <Dialog
            open={open}
            PaperProps={{
                className: styles.container
            }}
            onClose={() => setOpen(false)}
        >
            <DialogTitle>
                <Typography component="h1" variant="h6" >Membros do grupo</Typography>
            </DialogTitle>
            <DialogContent>
                {members.map(member => (
                    <Accordion
                        variant="outlined"
                        key={member.ra}
                        expanded={true}
                        TransitionProps={{ unmountOnExit: true }}
                    >
                        <AccordionSummary>
                            <Typography><b>{member.name} | RA: {member.ra}</b></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{member.description}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={() => setOpen(false)}
                >
                    Fechar
                </Button>
            </DialogActions>
        </Dialog>
    );

}

export default MembersDialog;