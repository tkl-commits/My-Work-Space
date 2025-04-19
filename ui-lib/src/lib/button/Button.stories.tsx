import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'danger'],
    },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Danger: Story = {
  args: {
    label: 'Danger Button',
    variant: 'danger',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    variant: 'primary',
    disabled: true,
  },
};
