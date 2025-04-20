import React from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ModalProps } from './ModalProps.model';

const ModalComponent: React.FC<ModalProps> = ({
  modalButton,
  modalTitle,
  modalMessage,
  execute,
  cancel,
  buttonTheme,
  modalFunction,
}) => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        color={buttonTheme as any}
        variant="contained"
        onClick={handleOpen}
      >
        {modalButton}
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle sx={{ m: 0, p: 2 }}>
          {modalTitle}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: theme.spacing(1),
              top: theme.spacing(1),
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Typography>{modalMessage}</Typography>
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={handleClose}>
            {cancel}
          </Button>
          <Button
            variant="text"
            onClick={() => {
              modalFunction();
              handleClose();
            }}
          >
            {execute}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ModalComponent;
