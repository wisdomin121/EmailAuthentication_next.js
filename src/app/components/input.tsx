import { memo } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = memo(function Input(props: InputProps) {
  const { placeholder, type, onChange } = props;

  return (
    <input
      className="px-2 py-2 border border-gray-300 rounded-md focus: outline-none"
      placeholder={placeholder}
      type={type}
      onChange={onChange}
    />
  );
});
