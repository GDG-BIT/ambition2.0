'use client'
import React from 'react';
import { useFormContext } from './FormContext';
import { Input } from '../ui/Input';
import { Colleges } from '../../data/branches';

export const StepOne: React.FC = () => {
  const { data, setData } = useFormContext();


  return (
    <div className="space-y-4">
      <Input
        label="Full Name"
        value={data.name}
        onChange={(e) => setData(prev => ({ ...prev, name: e.target.value }))}
        required
        placeholder="John Doe"
      />

      <Input
        label="College Email"
        value={data.collegeEmail ?? undefined}
        onChange={(e) => setData(prev => ({ ...prev, collegeEmail: e.target.value }))}
        required
        placeholder=""
        type='email'
      />

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">College</label>
        <select
          value={data.college}
          onChange={(e) => setData(prev => ({ ...prev, college: e.target.value as typeof data.college }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                   focus:border-indigo-500 focus:ring-indigo-500 py-2 px-3"
          required
        >
          <option value="">Select College</option>
          {Colleges.map((branch) => (
            <option key={branch} value={branch}>
              {branch}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
