import React, { memo, useCallback } from 'react';
import AssessmentRow from './AssessmentRow';
import { AssessmentData } from '../types';

interface StudentAssessmentTableProps {
  assessmentData: AssessmentData;
  onRatingChange: (aspectId: number, studentId: number, value: number) => void;
}

const StudentAssessmentTable: React.FC<StudentAssessmentTableProps> = ({ 
  assessmentData, 
  onRatingChange 
}) => {
  const aspectsCount = Object.keys(assessmentData).length;
  const studentsCount = 10;

  const handleRatingChange = useCallback((studentId: number, aspectId: number, value: number) => {
    onRatingChange(aspectId, studentId, value);
  }, [onRatingChange]);

  return (
    <div className="overflow-x-auto rounded-lg shadow">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="py-3 px-4 text-left">Mahasiswa</th>
            {Array.from({ length: aspectsCount }, (_, i) => i + 1).map(aspectId => (
              <th key={`header-${aspectId}`} className="py-3 px-2 text-center">
                Aspek<br />penilaian {aspectId}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: studentsCount }, (_, i) => i + 1).map(studentId => {
            const studentRatings: { [aspectId: number]: number } = {};
            
            // Gather all ratings for this student across aspects
            Object.keys(assessmentData).forEach(aspectId => {
              const aspect = parseInt(aspectId);
              studentRatings[aspect] = assessmentData[aspect][studentId] || 1;
            });
            
            return (
              <AssessmentRow
                key={`student-${studentId}`}
                studentId={studentId}
                studentName={`Mahasiswa ${studentId}`}
                ratings={studentRatings}
                onRatingChange={(aspectId, value) => handleRatingChange(studentId, aspectId, value)}
                aspectsCount={aspectsCount}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

// Use memo to prevent unnecessary re-renders
export default memo(StudentAssessmentTable);