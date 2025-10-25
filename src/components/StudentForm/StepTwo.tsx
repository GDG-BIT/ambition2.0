import React, { useEffect, useState } from 'react';
import { useFormContext } from './FormContext';
import { Loader2 } from 'lucide-react';
import { getPaymentURL, isPaymentDone } from '../db_functions';
import { RedirectType, redirect } from 'next/navigation';
export const StepTwo: React.FC = () => {
  const { data } = useFormContext();
  const [isProcessing, setIsProcessing] = useState(true);
  const [paymentURL, setPaymentUrl] = useState<string | null>(null);
  const checkPayment = () => {
    isPaymentDone().then((isDone) => {
      if (isDone) {
        setIsProcessing(false);
        redirect("/team", RedirectType.push);
      }
    })
  }
  useEffect(() => {
    getPaymentURL(data).then((_paymentURL) => {
      setPaymentUrl(_paymentURL);
    });
    const interval = setInterval(checkPayment, 3000);
    return () => clearInterval(interval);
  }, []);
  const handlePayment = () => { if (paymentURL) redirect(paymentURL) }
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        {/* Other form elements can go here */}
        <div className="mt-8 flex flex-col gap-3 justify-center">
          {isProcessing ? (
            <div className="flex items-center space-x-2 text-gray-500">
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Waiting to confirm payment...</span>
            </div>

          ) : (
            null)}
          <button
            type="button"
            onClick={handlePayment}
            className="w-1/2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
          >
            Pay
          </button>

        </div>
      </div>
    </div>
  );
};
