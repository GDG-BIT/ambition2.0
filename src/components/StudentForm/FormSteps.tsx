'use client'
import React from 'react';
import { useFormContext } from './FormContext';
import { StepOne } from './StepOne';
import { StepTwo } from './StepTwo';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ProgressBar } from '../ui/ProgressBar';
import { ToastContainer, toast } from 'react-toastify';
import { val } from '../validate';
interface Result{
  result:boolean;
  message:string;
}
export const FormSteps: React.FC = () => {
  const { step, setStep, isLastStep, data } = useFormContext();
  const isValid = true;

  const validateStep = (): boolean => {
    switch (step) {
      case 1:
        if (data.name && data.college) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (data.collegeEmail && !emailRegex.test(data.collegeEmail)) {
            toast.error('Invalid Email format.');
            return false;
          }
          return true;
        } else {
          toast.error('Please fill in all fields: Name, USN, Branch, and Year.');
          return false;
        }
      case 2:
      default:
        return true;
    }
  };

  const handleNext = async () => {
    if (validateStep()) {
      if (step === 1) {
        try {
          const result:Result = await val(data);
          if (result?.result) {
            toast.success(result?.message);
            setStep(2);
          } else {
            toast.error(`Failed: ${result?.message}`);
          }
        } catch (error) {
          console.error("Error during server-side validation:", error);
          toast.error('An unexpected error occurred. Please try again later.');
        }
      }
    }
  };

  const handleBack = () => {
    setStep((s) => s - 1);
  };


  return (
    <div className="space-y-8 text-black">
      <ToastContainer />
      <ProgressBar step={step} />

      <div className="transition-all duration-500 transform">
        {step === 1 && <StepOne />}
        {step === 2 && <StepTwo />}
      </div>

      <div className="flex justify-between pt-4">
        <button
          onClick={handleBack}
          className={`flex items-center px-4 py-2 text-sm font-medium rounded-md
            ${step === 1 ? 'invisible' : 'text-gray-600 hover:text-gray-900'}`}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </button>
        {isLastStep ? null :
          <button
            onClick={handleNext}
            disabled={isValid === null || !isValid}
            className={`flex items-center px-4 py-2 text-sm font-medium rounded-md
            ${isValid === null || !isValid
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-emerald-600 text-white hover:bg-emerald-700'
              }`}
          >
            {'Next'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>}
      </div>
    </div>
  );
};
