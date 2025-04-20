// ui-lib/src/lib/Modal/ModalComponent.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import { ModalProps } from './ModalProps.model';
import ModalComponent from './Modal';

const message = () => {
  return alert('Done');
};

const meta: Meta<ModalProps> = {
  title: 'Components/Modal',
  component: ModalComponent,
  args: {
    modalButton: 'Open Modal',
    modalTitle: 'Caution',
    modalMessage: 'Are you sure you want to continue this action?',
    cancel: 'No',
    execute: 'Yes',
    buttonTheme: 'primary',
    modalFunction: message,
  },
  argTypes: {
    modalFunction: { action: 'executed' },
  },
};

export default meta;
type Story = StoryObj<ModalProps>;

export const Modal: Story = {};
