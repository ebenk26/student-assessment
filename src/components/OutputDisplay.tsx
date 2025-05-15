import React, { memo } from 'react';
import { OutputFormat } from '../types';

interface OutputDisplayProps {
  output: OutputFormat | null;
}

const OutputDisplay: React.FC<OutputDisplayProps> = ({ output }) => {
  if (!output) return null;
  
  return (
    <div className="mt-6 bg-gray-800 text-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2">JSON Output:</h3>
      <pre className="text-sm overflow-x-auto">{JSON.stringify(output, null, 2)}</pre>
    </div>
  );
};

export default memo(OutputDisplay);