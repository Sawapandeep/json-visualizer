import React, { useState } from 'react';

interface JsonInputProps {
  onJsonChange: (json: object) => void;
}

const JsonInput: React.FC<JsonInputProps> = ({ onJsonChange }) => {
  const [jsonString, setJsonString] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setJsonString(value);
    try {
      const parsedJson = JSON.parse(value);
      onJsonChange(parsedJson);
    } catch (err) {
      // handle parsing error
    }
  };

  return (
    <textarea
      value={jsonString}
      onChange={handleChange}
      placeholder="Enter JSON here"
      rows={10}
      cols={50}
    />
  );
};

export default JsonInput;
