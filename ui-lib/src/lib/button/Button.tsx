import React from 'react';
import styled from '@emotion/styled';

export type ButtonProps = {
  label: string;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  onClick?: () => void;
};

const StyledButton = styled.button<Pick<ButtonProps, 'variant' | 'disabled'>>`
  background-color: ${({ variant }) =>
    variant === 'secondary'
      ? '#e0e0e0'
      : variant === 'danger'
      ? 'tomato'
      : 'limegreen'};
  color: ${({ variant }) => (variant === 'secondary' ? '#333' : '#fff')};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

export const Button = ({
  label,
  variant = 'primary',
  disabled = false,
  onClick,
}: ButtonProps): React.ReactElement => {
  return (
    <StyledButton
      variant={variant}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
    >
      {label}
    </StyledButton>
  );
};
