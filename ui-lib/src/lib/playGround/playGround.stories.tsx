import type { Meta, StoryObj } from '@storybook/react';
import { playGroundProps } from './playGround';
import playGround from './playGround';

const meta: Meta<playGroundProps> = {
  title: 'Components/Playground',
  component: playGround,
  args: {
    Title: 'Let your thoughts go wild',
  },
};

export default meta;
type Story = StoryObj<playGroundProps>;

export const PlayGround: Story = {};
