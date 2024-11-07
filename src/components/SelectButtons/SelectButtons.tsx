import React from 'react';
import { Form, FormSelect } from 'react-bootstrap';
import { Control, Controller, RegisterOptions } from 'react-hook-form';

interface RadioButtonProps {
  control: Control<any>;
  name: string;
  label: string;
  className?: string;
  size?: 'sm' | 'lg';
  itens: { value: string | number, label: string }[];
  rules?: Omit<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
}


const SelectButtons: React.FC<RadioButtonProps> = ({ control, name, label, className, size, rules, itens }) => {
  return (
    <Form.Group controlId={ name } className={ className }>
      <Form.Label className='mb-0 fw-bold'>{ label }</Form.Label>
      <Controller
        name={ name }
        control={ control }
        rules={ rules }
        render={({ field: { onBlur, onChange, value }, fieldState: { error }}) => (
          <>
            <FormSelect
              value={ value }
              onBlur={ onBlur }
              onChange={ onChange }
              size={ size }
              isInvalid={ !!error }
            >
              { itens.map(({ value, label }) => <option key={ value } value={ value }>{ label }</option>) }
            </FormSelect>
            <Form.Control.Feedback type="invalid">
              { error?.message }
            </Form.Control.Feedback>
          </>
        )}
      />
    </Form.Group>
  );
};

export default SelectButtons;