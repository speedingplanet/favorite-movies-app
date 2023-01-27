import React, { ChangeEventHandler } from 'react';

export type UpdateValueHandler<T> = (field: keyof T, value: string) => void;

interface BootstrapInputProps<T> extends React.ComponentPropsWithoutRef<'input'> {
  containerClass?: string;
  labelClass?: string;
  labelText?: string;
  updateValue?: UpdateValueHandler<T>;
}

export function BootstrapInput<T>(props: BootstrapInputProps<T>) {
  let { containerClass, labelClass, labelText, updateValue, ...rest } = props;

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    updateValue && updateValue(event.currentTarget.name as keyof T, event.currentTarget.value);
  };

  return (
    <div className={containerClass}>
      <label
        htmlFor={rest.id}
        className={`form-label ${labelClass}`}>
        {labelText || 'Input'}
      </label>
      <input
        {...rest}
        onChange={handleChange}
        type={rest.type ?? 'text'}
        className={`form-control ${rest.className}`}
      />
    </div>
  );
}
