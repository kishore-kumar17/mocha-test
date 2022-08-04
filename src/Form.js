import React from 'react';

export default function Form() {
  const submitForm = (evt) => {
    evt.preventDefault();
  };
  return (
    <div>
      <form onSubmit={submitForm}>
        <div>
          <input
            className='name'
            type='text'
            id='name'
            placeholder='Name'
            value='testValue'
          />
        </div>
        <div>
          <input
            className='email'
            type='email'
            id='email'
            placeholder='Email'
          />
        </div>
        <button className='button' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
}
