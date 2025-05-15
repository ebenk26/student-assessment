export type Student = {
  id: number;
  name: string;
};

export type AspectRating = {
  [studentId: string]: number;
};

export type AssessmentData = {
  [aspectId: string]: AspectRating;
};

export type OutputFormat = {
  [key: string]: {
    [key: string]: number;
  };
};