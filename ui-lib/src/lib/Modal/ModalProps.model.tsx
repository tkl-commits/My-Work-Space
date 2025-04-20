export type ModalProps = {
  modalButton: string;
  modalTitle: string;
  modalMessage: string;
  execute: string;
  cancel: string;
  buttonTheme: string;
  modalFunction: () => void;
};
