import React, { memo } from 'react';
import AssessmentCell from './AssessmentCell';

interface AssessmentRowProps {
  studentId: number;
  studentName: string;
  ratings: { [aspectId: number]: number };
  onRatingChange: (aspectId: number, value: number) => void;
  aspectsCount: number;
}

const AssessmentRow: React.FC<AssessmentRowProps> = ({ 
  studentId, 
  studentName, 
  ratings, 
  onRatingChange,
  aspectsCount
}) => {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      <td className="py-3 px-4 flex items-center">
        <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
          {studentId}
        </div>
        <span className="font-medium">{studentName}</span>
      </td>
      
      {Array.from({ length: aspectsCount }, (_, i) => i + 1).map(aspectId => (
        <td key={`aspect-${aspectId}`} className="py-3 px-2 text-center">
          <AssessmentCell 
            value={ratings[aspectId] || 1} 
            onChange={(value) => onRatingChange(aspectId, value)}
          />
        </td>
      ))}
    </tr>
  );
};

// Use memo to prevent unnecessary re-renders
export default memo(AssessmentRow);