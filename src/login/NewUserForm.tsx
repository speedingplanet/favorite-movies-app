import React, { FormEventHandler } from 'react';
import { BootstrapInput, UpdateValueHandler } from '../common/BootstrapInput';
import { useAppDispatch } from '../app/hooks';
import { User } from '../favorite-movie-types';
import { addUser } from './users-slice';

let formData: Map<keyof User, string> = new Map();

export default function NewUserForm() {
  const dispatch = useAppDispatch();
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    let partialUser: Partial<User> = {};

    for (let [k, v] of formData.entries()) {
      // If you don't do this, you get an error about trying to assign to never
      // TODO: Try a type with only required fields?
      (partialUser[k] as string) = v;
    }

    // Dispatch it to Redux
    // We know our partial user is a good User, so...
    dispatch(addUser(partialUser as User));
  };

  const handleUpdateValue: UpdateValueHandler<User> = (fieldName, value) => {
    formData.set(fieldName, value);
  };

  return (
    <>
      <div>
        <h3>New User</h3>
      </div>
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
