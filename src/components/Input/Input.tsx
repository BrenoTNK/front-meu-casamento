import React from 'react';
import { Form } from 'react-bootstrap';
import { Control, Controller, RegisterOptions } from 'react-hook-form';

interface InputRef {
  focus(): void;
}

interface InputProps {
  control: Control<any>;
  name: string;
  className?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  rules?: Omit<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
}


const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = ({ control, name, className, label, placeholder, type='text', disabled=false, rules }) => {
  return (
    <Form.Group controlId={ name } className={ className }>
      <Form.Label className='mb-0 fw-bold'>{ label }</Form.Label>
      <Controller
        name={ name }
        control={ control }
        rules={ rules }
        render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => (
          <>
            <Form.Control
              value={ value }
              className='pt-2 pr-3 pb-2 pl-3'
              placeholder={ placeholder }
              type={ type }
              onChange={ onChange }
              onBlur={ onBlur }
              disabled={ disabled }
              isInvalid={ !!error }
            />
            {!!error && <Form.Control.Feedback type="invalid">
              { error?.message }
            </Form.Control.Feedback>}
          </>
        )}
      />
    </Form.Group>
  );
};

export default Input;
