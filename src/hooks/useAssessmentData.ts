import { useState, useCallback } from 'react';
import { AssessmentData } from '../types';

const initializeAssessmentData = (): AssessmentData => {
  const data: AssessmentData = {};
  
  // Initialize 4 aspects
  for (let aspect = 1; aspect <= 4; aspect++) {
    data[aspect] = {};
    
    // Initialize 10 students for each aspect with default values
    for (let student = 1; student <= 10; student++) {
      // Set default values based on the image (1 for aspect 1, 2 for aspect 2, etc.)
      const defaultValue = aspect === 3 ? 6 : (aspect === 4 ? 10 : aspect);
      data[aspect][student] = defaultValue;
    }
  }
  
  return data;
};

export const useAssessmentData = () => {
  const [assessmentData, setAssessmentData] = useState<AssessmentData>(initializeAssessmentData());
  
  const updateRating = useCallback((aspectId: number, studentId: number, value: number) => {
    setAssessmentData(prevData => ({
      ...prevData,
      [aspectId]: {
        ...prevData[aspectId],
        [studentId]: value
      }
    }));
  }, []);
  
  return {
    assessmentData,
    updateRating
  };
};