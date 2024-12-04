import { memo, ReactNode } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = memo(function Button(props: ButtonProps) {
  const { children, onClick } = props;

  return (
    <button className="py-2 bg-gray-400 rounded-md" onClick={onClick}>
      {children}
    </button>
  );
});
