import React from 'react';

export interface MyButtonProps {
  /** The label to show on the button */
  label: string;

  /** Function to call on button click */
  onClick?: () => void;
}

/**
 * A reusable button component.
 */
export const MyButton: React.FC<MyButtonProps> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

