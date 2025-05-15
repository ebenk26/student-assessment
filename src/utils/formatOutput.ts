import { AssessmentData, OutputFormat } from '../types';

export const formatOutputData = (assessmentData: AssessmentData): OutputFormat => {
  const output: OutputFormat = {};
  
  Object.keys(assessmentData).forEach(aspectId => {
    const aspectKey = `aspek_penilaian_${aspectId}`;
    output[aspectKey] = {};
    
    Object.keys(assessmentData[aspectId]).forEach(studentId => {
      const studentKey = `mahasiswa_${studentId}`;
      output[aspectKey][studentKey] = assessmentData[aspectId][studentId];
    });
  });
  
  return output;
};