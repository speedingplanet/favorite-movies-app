import React, { FormEventHandler, useState } from 'react';
import { BootstrapInput, UpdateValueHandler } from '../common/BootstrapInput';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { User } from '../favorite-movie-types';
import { addUser } from './users-slice';

let formData: Map<keyof User, string> = new Map();

export default function NewUserForm() {
  let [validationMessage, setValidationMessage] = useState('');

  const dispatch = useAppDispatch();
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

    let partialUser: Partial<User> = {};

    for (let [k, v] of formData.entries()) {
      // If you don't do this, you get an error about trying to assign to never
      // TODO: Try a type with only required fields?
      (partialUser[k] as string) = v;
    }

    // Dispatch it to Redux
    // Could this be a duplicate?
    if (partialUser.email && usersByEmail[partialUser.email]) {
      // Don't dispatch & don't reset!
      setValidationMessage(
        `Email ${partialUser.email} exists in the database. Please use another email`
      );
    } else {
      // We know our partial user is a good User, so...
      dispatch(addUser(partialUser as User));
      event.currentTarget.reset();
      setValidationMessage(`User ${partialUser.email} successfully added`);
    }
  };

  const handleUpdateValue: UpdateValueHandler<User> = (fieldName, value) => {
    formData.set(fieldName, value);
  };

  return (
    <>
      <div>
        <h3>New User</h3>
      </div>
      <div style={{ color: 'white', backgroundColor: 'red' }}>{validationMessage}</div>
      <form onSubmit={handleSubmit}>
        <BootstrapInput
          updateValue={handleUpdateValue}
          labelText="User Name"
          name="userName"
          id="new-userName"
          required
        />
        <BootstrapInput
          updateValue={handleUpdateValue}
          labelText="E-mail"
          type="email"
          name="email"
          id="new-email"
          required
        />
        <BootstrapInput
          updateValue={handleUpdateValue}
          labelText="Display Name"
          name="displayName"
          id="new-displayname"
          required
        />
        <div className="mt-2">
          <button
            className="btn btn-primary"
            type="submit">
            Add user
          </button>
        </div>
      </form>
    </>
  );
}
