import React from 'react';

export default function Form() {
  const submitForm = (evt) => {
    evt.preventDefault();
  };
  return (
    <div>
      <form onSubmit={submitForm}>
        <div>
          <input type='text' id='name' placeholder='Name' />
        </div>
        <div>
          <input type='email' id='email' placeholder='Email' />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
