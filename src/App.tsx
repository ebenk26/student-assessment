import React, { useState, useCallback } from 'react';
import { Save } from 'lucide-react';
import StudentAssessmentTable from './components/StudentAssessmentTable';
import OutputDisplay from './components/OutputDisplay';
import { useAssessmentData } from './hooks/useAssessmentData';
import { formatOutputData } from './utils/formatOutput';
import { OutputFormat } from './types';

function App() {
  const { assessmentData, updateRating } = useAssessmentData();
  const [output, setOutput] = useState<OutputFormat | null>(null);

  const handleSave = useCallback(() => {
    const formattedOutput = formatOutputData(assessmentData);
    setOutput(formattedOutput);
  }, [assessmentData]);

  const handleRatingChange = useCallback((aspectId: number, studentId: number, value: number) => {
    updateRating(aspectId, studentId, value);
  }, [updateRating]);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Aplikasi Penilaian Mahasiswa
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Silahkan berikan penilaian untuk setiap mahasiswa pada setiap aspek
          </p>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <StudentAssessmentTable 
            assessmentData={assessmentData}
            onRatingChange={handleRatingChange}
          />
          
          <div className="px-4 py-4 bg-gray-50 border-t border-gray-200 sm:px-6 flex justify-end">
            <button
              type="button"
              onClick={handleSave}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              <Save size={18} className="mr-2" />
              Simpan
            </button>
          </div>
        </div>

        {output && (
          <OutputDisplay output={output} />
        )}
      </div>
    </div>
  );
}

export default App;