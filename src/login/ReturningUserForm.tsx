import React, { FormEventHandler, useState } from 'react';
import { useAppSelector } from '../app/hooks';
import { BootstrapInput } from '../common/BootstrapInput';
import { User } from '../favorite-movie-types';

export default function ReturningUserForm() {
  let [validation, setValidation] = useState({ className: '', message: '' });

  // TODO: Import AppDispatch to create a dispatch function

  const usersByEmail = useAppSelector((state) => {
    let users = state.users.items;
    let usersByEmail: { [key: string]: User } = {};
    for (let user of users) {
      usersByEmail[user.email] = user;
    }
    return usersByEmail;
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);
    let email = formData.get('email') as string;

    if (usersByEmail[email]) {
      // Log the user in
      // TODO: dispatch an update that this is the logged in user
      // Don't forget to import AppDispatch 
    } else {
      setValidation({ className: 'red-alert', message: `User ${email} not found` });
    }
  };

  return (
    <>
      <div>
        <h3>Returning User</h3>
      </div>
      <div className={validation.className}>{validation.message}</div>
      <form onSubmit={handleSubmit}>
        <BootstrapInput
          labelText="E-mail"
          type="email"
          name="email"
          id="new-email"
          required
        />
        <div className="mt-2">
          <button
            className="btn btn-primary"
            type="submit">
            Log in user
          </button>
        </div>
      </form>
    </>
  );
}
