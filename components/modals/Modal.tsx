import { DialogContent, DialogTitle } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { Dispatch, SetStateAction } from 'react';

interface ModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  modalTitle: string;
  children: JSX.Element;
}

const Modal = ({ open, setOpen, modalTitle, children }: ModalProps) => (
  <Dialog open={open} onClose={() => setOpen(false)}>
    <DialogTitle>{modalTitle}</DialogTitle>
    <DialogContent>{children}</DialogContent>
  </Dialog>
);

export { Modal };
