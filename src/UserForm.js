import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from './UserContext';

const UserForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { setUserName } = useContext(UserContext);

  const onSubmit = (data) => {
    setUserName(data.name);
  };

  const email = watch('email');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name</label>
        <input
          {...register('name', {
            required: 'Name is required',
            minLength: { value: 2, message: 'Name must be at least 2 characters' },
            pattern: { value: /^[A-Za-z\s]+$/, message: 'Name must contain only English letters and spaces' }
          })}
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
      </div>
      <div>
        <label>Email</label>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: 'Invalid email address' }
          })}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
      </div>
      <div>
        <label>Return Email</label>
        <input
          {...register('returnEmail', {
            required: 'Return email is required',
            validate: value => value === email || 'Emails do not match'
          })}
        />
        {errors.returnEmail && <p style={{ color: 'red' }}>{errors.returnEmail.message}</p>}
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          {...register('password', {
            required: 'Password is required',
            minLength: { value: 6, message: 'Password must be at least 6 characters' }
          })}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
