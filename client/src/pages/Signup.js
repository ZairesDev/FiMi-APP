import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_QA } from '../utils/mutations';
import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addQA, { error }] = useMutation(ADD_QA);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addQA({
        variables: { ...formState },
      });

      Auth.login(data.addQA.token);
    } catch (err) {
      console.error(err);
    }
  };
  // will need to look over relevant class name will depend on MUI library. Will modify during polishing tomorrow.
  return (
    <main className=''>
      <div className=''>
        <div className=''>
          <h3 className=''>Sign Up</h3>
          <div className=''>
            <form onSubmit={handleFormSubmit}>
              <input
                className='form-input'
                placeholder='Your username'
                name='username'
                type='username'
                id='username'
                value={formState.username}
                onChange={handleChange}
              />
              <input
                className='form-input'
                placeholder='Your email'
                name='email'
                type='email'
                id='email'
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className='form-input'
                placeholder='******'
                name='password'
                type='password'
                id='password'
                value={formState.password}
                onChange={handleChange}
              />
              <button className='' type='submit'>
                Submit
              </button>
            </form>
            {error && <div>Sign up failed</div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
