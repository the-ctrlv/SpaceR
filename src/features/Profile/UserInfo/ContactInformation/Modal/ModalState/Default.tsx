import { Controller, useForm } from 'react-hook-form';

import { userSlice } from 'store/reducers/UserSlice';

import { useAppDispatch } from 'hooks/store/useAppDispatch';

import SpaceButton from 'components/SpaceButton';
import SpaceInput from 'components/SpaceInput';

import { User } from 'types';

import { StyledModalContent } from './styles';
import { ModalState } from './types';

export type ModalStateContent = {
  user: User;
  updatedUser: User;
  cancel: () => void;
  setUpdatedUser: React.Dispatch<React.SetStateAction<User>>;
  setCurrentState: React.Dispatch<React.SetStateAction<keyof ModalState>>;
};

export default function Default({
  user,
  updatedUser,
  setUpdatedUser,
  setCurrentState,
  cancel,
}: ModalStateContent) {
  const {
    handleSubmit,
    control,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: 'onChange',
  });

  const dispatch = useAppDispatch();
  const { userUpdate } = userSlice.actions;
  // temporary add any type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <header
        className="flex flex-col items-center justify-center"
        style={{
          height: '120px',
        }}
      >
        <div
          className="h-14 w-14 mb-2 rounded-full"
          style={{
            background: `url(${user.avatar}) center center / cover no-repeat`,
          }}
        />
        <h1 className="font-semibold text-base">{user.username}</h1>
      </header>
      <StyledModalContent
        className="w-full md:w-8/12 mx-auto flex-grow px-3 xl:px-0 flex flex-col justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="relative">
          <Controller
            control={control}
            name="name"
            defaultValue={user.username}
            rules={{
              required: "This field can't be empty",
              minLength: {
                value: 3,
                message: 'Name must be at least 3 characters long',
              },
            }}
            render={({ field: { onChange: nameOnChange } }) => (
              <SpaceInput
                label="Name:"
                className={`mb-5 ${errors.name ? 'invalid' : ''}`}
                defaultValue={user.username}
                onChange={(e) => {
                  setUpdatedUser({
                    ...updatedUser,
                    username: e.target.value,
                  });
                  nameOnChange(e.target.value);
                }}
              />
            )}
          />
          {errors.name && (
            <span className="absolute bottom-1 text-[10px] left-5 text-red-500">
              {errors?.name?.message?.toString()}
            </span>
          )}
        </div>

        <div className="relative">
          <Controller
            control={control}
            name="phone"
            defaultValue={user.phone}
            rules={{
              required: "This field can't be empty",
              pattern: {
                value: /^\d{10}$/,
                message: 'Phone number must be 10 digits long',
              },
            }}
            render={({ field: { onChange: phoneOnChange } }) => (
              <SpaceInput
                label="Phone:"
                className={`mb-5 ${errors.phone ? 'invalid' : ''}`}
                defaultValue={user.phone}
                onChange={(e) => {
                  setUpdatedUser({
                    ...updatedUser,
                    phone: e.target.value,
                  });
                  phoneOnChange(e.target.value);
                }}
              />
            )}
          />
          {errors.phone && (
            <span className="absolute bottom-1 text-[10px] left-5 text-red-500">
              {errors?.phone?.message?.toString()}
            </span>
          )}
        </div>

        <SpaceInput
          label="Email:"
          disabled
          className="mb-3"
          defaultValue={user.email}
          onChange={() => {
            // eslint-disable-next-line no-console
            console.log('changed');
          }}
        />

        <p className="leading-4 text-sm">
          <span
            className="space-link"
            onClick={() => {
              setCurrentState('update');
            }}
          >
            Update your password
          </span>{' '}
          through the button below You will be redirected to a new page and must
          follow the instructions.
        </p>
      </StyledModalContent>
      <div className="w-full flex flex-col xl:flex-row items-center justify-center gap-3 mt-3">
        <SpaceButton
          className="w-full"
          onClick={() => {
            if (isValid) {
              dispatch(
                userUpdate({
                  ...user,
                  username: updatedUser.username,
                  phone: updatedUser.phone,
                })
              );
              cancel();
            }
          }}
          disabled={!isValid || !isDirty}
          type="submit"
        >
          Save changes
        </SpaceButton>
        <SpaceButton
          className="w-full"
          variant="outline"
          onClick={() => cancel()}
        >
          Cancel
        </SpaceButton>
      </div>
    </>
  );
}
