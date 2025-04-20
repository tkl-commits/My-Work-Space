import { ButtonProps } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import { ColorButton } from './Button';

const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  component: ColorButton,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['text', 'outlined', 'contained'],
    },
    color: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'success', 'error'],
    },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    label: 'Primary',
    variant: 'outlined',
    color: 'primary',
    
  },
};
export const Secondary: Story = {
  args: {
    label: 'Secondary',
    variant: 'text',
    color: 'secondary',
  },
};

export const Success: Story = {
  args: {
    label: 'Success',
    variant: 'contained',
    color: 'success',
  },
};

export const Error: Story = {
  args: {
    label: 'Error',
    variant: 'outlined',
    color: 'error',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    variant: 'contained',
    color: 'primary',
    disabled: true,
  },
};
