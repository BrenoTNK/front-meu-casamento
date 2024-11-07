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
  type?: string;
  rules?: Omit<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
  min?: number;
  max?: number;
  step?: number;
}


const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = ({ control, name, className, label, min, max, step, rules }) => {
  return (
    <Form.Group controlId={ name } className={ className }>
      <Form.Label className='mb-0 fw-bold'>{ label }</Form.Label>
      <Controller
        name={ name }
        control={ control }
        rules={ rules }
        render={({ field: { onBlur, onChange, value } }) => (
          <>
            <Form.Range
              value={ value }
              onChange={ onChange }
              onBlur={ onBlur }
              min={ min }
              max={ max }
              step={ step }
            />
            <span className="badge rounded-pill bg-success">R$ { value },00</span>
          </>
        )}
      />
    </Form.Group>
  );
};

export default Input;
