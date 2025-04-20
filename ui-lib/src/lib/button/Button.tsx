import React from 'react';
import MuiButton, { ButtonProps } from '@mui/material/Button';

type ColorButtonProps = Omit<ButtonProps, 'children'> & {
  label: string;
};

export const ColorButton: React.FC<ColorButtonProps> = ({
  label,
  variant = 'contained',
  color = 'primary',
  ...rest
}) => {
  return (
    <MuiButton variant={variant} color={color} {...rest}>
      {label}
    </MuiButton>
  );
};

export default ColorButton;
