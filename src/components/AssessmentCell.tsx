import React, { memo } from 'react';

interface AssessmentCellProps {
  value: number;
  onChange: (value: number) => void;
}

const AssessmentCell: React.FC<AssessmentCellProps> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.min(10, Math.max(1, parseInt(e.target.value) || 1));
    onChange(newValue);
  };

  return (
    <div className="flex items-center justify-center w-24">
      <input
        type="number"
        min={1}
        max={10}
        value={value}
        onChange={handleChange}
        className="w-12 h-10 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
};

// Use memo to prevent unnecessary re-renders
export default memo(AssessmentCell);