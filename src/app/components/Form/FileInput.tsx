import React from "react";

type FileInputProps = {
  label: string;
  onChange: (file: File | null) => void;
  errorMessage?: string;
  hasError?: boolean;
};

export const FileInput: React.FC<FileInputProps> = ({ label, onChange, errorMessage, hasError }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    onChange(file);
  };

  return (
    <div className={`form-group ${hasError ? 'error' : ''}`}>
      <label>{label}</label>
      <input type="file" onChange={handleFileChange} className="file-input" />
      {hasError && <span className="error-message">{errorMessage}</span>}
    </div>
  );
};
