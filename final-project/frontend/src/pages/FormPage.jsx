import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import './FormPage.css';

const schema = z.object({
  pirateName: z.string().min(3, { message: "Pirate name must be at least 3 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  enlistmentDate: z.string().min(1, { message: "Please select an enlistment date." })
});

function FormPage() {
  const [serverResponse, setServerResponse] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setServerResponse(null);
    
    try {
      const response = await fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      setServerResponse(result);
    } catch (error) {
      console.error("Error submitting to backend:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-page-container">
      <div className="pirate-form-box">
        <h1>Join the Crew</h1>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="pirateName">Pirate Name</label>
            <input 
              type="text" 
              id="pirateName" 
              placeholder="Captain Blackbeard"
              {...register('pirateName')} 
            />
            {errors.pirateName && <span className="error-message">{errors.pirateName.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Contact Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="pirate@sea.com"
              {...register('email')} 
            />
            {errors.email && <span className="error-message">{errors.email.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="enlistmentDate">Enlistment Date</label>
            <input 
              type="date" 
              id="enlistmentDate" 
              {...register('enlistmentDate')} 
            />
            {errors.enlistmentDate && <span className="error-message">{errors.enlistmentDate.message}</span>}
          </div>

          <button type="submit" className="btn-submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending Ravens...' : 'Submit Registration'}
          </button>
        </form>
        {serverResponse && (
          <div className="response-box">
            <h3>Backend Response Received!</h3>
            <p>The database successfully saved your pirate:</p>
            <pre>{JSON.stringify(serverResponse, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default FormPage;