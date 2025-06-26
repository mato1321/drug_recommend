import React from 'react';

interface RadioGroupProps {
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}

interface RadioGroupItemProps {
  value: string;
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ 
  value, 
  onValueChange, 
  children, 
  className = '' 
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onValueChange) {
      onValueChange(event.target.value);
    }
  };

  return (
    <div className={`space-y-2 ${className}`} role="radiogroup">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            checked: child.props.value === value,
            onChange: handleChange,
          } as any);
        }
        return child;
      })}
    </div>
  );
};

export const RadioGroupItem: React.FC<RadioGroupItemProps & React.InputHTMLAttributes<HTMLInputElement>> = ({ 
  value, 
  id, 
  className = '', 
  children,
  ...props 
}) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <input
        type="radio"
        id={id || value}
        value={value}
        className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
        {...props}
      />
      {children && (
        <label 
          htmlFor={id || value} 
          className="text-sm font-medium text-gray-700 cursor-pointer"
        >
          {children}
        </label>
      )}
    </div>
  );
};