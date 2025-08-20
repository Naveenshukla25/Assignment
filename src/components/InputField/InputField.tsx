import React, { useState } from "react";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  type?: "text" | "password";
  clearable?: boolean;
}

const sizeClasses = {
  sm: "px-2 py-1 text-sm",
  md: "px-3 py-2 text-base",
  lg: "px-4 py-3 text-lg",
};

const variantClasses = {
  filled: "bg-gray-100 border border-transparent focus:border-blue-500",
  outlined: "border border-gray-300 focus:border-blue-500",
  ghost: "bg-transparent border-b border-gray-300 focus:border-blue-500",
};

export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  variant = "outlined",
  size = "md",
  type = "text",
  clearable,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className="mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <div className="relative flex items-center">
        <input
          value={value}
          onChange={onChange}
          type={type === "password" && !showPassword ? "password" : "text"}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={invalid}
          className={`w-full rounded-md focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed 
            ${sizeClasses[size]} ${variantClasses[variant]} 
            ${invalid ? "border-red-500" : ""}`}
        />

        {clearable && value && (
          <button
            type="button"
            onClick={() =>
              onChange?.({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>)
            }
            className="absolute right-2 text-gray-500 hover:text-gray-700 text-sm"
          >
            ✕
          </button>
        )}

        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-6 text-gray-500 hover:text-gray-700 text-sm"
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        )}
      </div>

      {helperText && !invalid && (
        <span className="mt-1 text-xs text-gray-500">{helperText}</span>
      )}
      {invalid && errorMessage && (
        <span className="mt-1 text-xs text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};
