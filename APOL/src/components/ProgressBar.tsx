import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  labels?: string[];
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  currentStep, 
  totalSteps, 
  labels = [] 
}) => {
  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <React.Fragment key={index}>
            {/* Step Circle */}
            <div className="flex flex-col items-center">
              <div 
                className={`h-10 w-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                  index < currentStep 
                    ? 'bg-indigo-600 border-indigo-600 text-white' 
                    : index === currentStep 
                      ? 'border-indigo-600 text-indigo-600' 
                      : 'border-gray-300 text-gray-400'
                }`}
              >
                {index < currentStep ? (
                  <svg xmlns="http://www.w3.org/2000/svg\" className="h-5 w-5\" viewBox="0 0 20 20\" fill="currentColor">
                    <path fillRule="evenodd\" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z\" clipRule="evenodd" />
                  </svg>
                ) : (
                  index + 1
                )}
              </div>
              
              {/* Label */}
              {labels[index] && (
                <span className={`text-sm mt-2 ${
                  index <= currentStep ? 'text-indigo-600 font-medium' : 'text-gray-500'
                }`}>
                  {labels[index]}
                </span>
              )}
            </div>
            
            {/* Connector Line (except after last step) */}
            {index < totalSteps - 1 && (
              <div 
                className={`flex-grow h-[2px] ${
                  index < currentStep ? 'bg-indigo-600' : 'bg-gray-300'
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;