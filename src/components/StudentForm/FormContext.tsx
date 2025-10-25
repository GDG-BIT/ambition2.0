'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';
import { type StudentData } from '../../data/branches';



interface FormContextType {
  data: StudentData;
  setData: React.Dispatch<React.SetStateAction<StudentData>>;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  isLastStep: boolean;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode, email: string, photo: string | null, studentData: StudentData | null }> = ({ children, email, photo, studentData }) => {
  const [data, setData] = useState<StudentData>({
    name: '',
    email: email,
    photoURL: photo,
    collegeEmail: "",
    college: ""
  });
  const [step, setStep] = useState(1);
  const isLastStep = step === 2;


  useEffect(() => {
    if (studentData !== null) {
      setData(studentData);
      setStep(2);
    }
  }
    , [])
  return (
    <FormContext.Provider value={{ data, setData, step, setStep, isLastStep }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};
