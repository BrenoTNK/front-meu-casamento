import React from 'react';
import { ButtonToolbar, Form, ToggleButton, ToggleButtonGroup, ToggleButtonProps } from 'react-bootstrap';
import { ButtonVariant } from 'react-bootstrap/esm/types';
import { Control, Controller } from 'react-hook-form';

interface RadioButtonProps {
  control: Control<any>;
  name: string;
  label: string;
  className?: string;
  variant?: ButtonVariant;
  size?: 'sm' | 'lg';
  itens: { id: string, value: string | number, label: string }[];
}


const RadioButton: React.FC<RadioButtonProps> = ({ control, name, label, className, variant, size, itens }) => {
  return (
    <Form.Group controlId={ name } className={ className }>
      <Form.Label className='mb-0 fw-bold'>{ label }</Form.Label>
      <Controller
        name={ name }
        control={ control }
        render={({ field: { onBlur, onChange, value }}) => (
          <ButtonToolbar>
            <ToggleButtonGroup type="radio" name={ name } defaultValue={ itens[0].value } value={ value } onChange={ onChange } onBlur={ onBlur }>   
              {itens.map(({ id, value, label }) =>
                <ToggleButton
                  id={ id }
                  key={ id }
                  name={ name }
                  value={ value }
                  type='radio'
                  variant={ variant }
                  size={ size }
                >
                  { label }
                </ToggleButton>
              )}
            </ToggleButtonGroup>
          </ButtonToolbar>
        )}
      />
    </Form.Group>
  );
};

export default RadioButton;