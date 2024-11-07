import React from 'react';
import { ButtonVariant } from 'react-bootstrap/esm/types';
import { Button as BootstrapButton } from 'react-bootstrap';

interface ButtonProps {
  children: any;
  className?: string;
  type?: "submit" | "reset" | "button";
  size?: 'sm' | 'lg'
  variant?: ButtonVariant;
  onPress?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, className, type='button', size, variant='primary', disabled=false, onPress, ...props }) => {
  return (
    <BootstrapButton onClick={ onPress } type={ type } className={ className } variant={ variant } size={ size } disabled={ disabled } { ...props }>
      { children }
    </BootstrapButton>
  );
};

export default Button;
