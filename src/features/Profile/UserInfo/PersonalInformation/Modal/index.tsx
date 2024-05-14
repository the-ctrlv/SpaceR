import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { userSlice } from 'store/reducers/UserSlice';

import { useAppDispatch } from 'hooks/store/useAppDispatch';

import SpaceButton from 'components/SpaceButton';
import SpaceInput from 'components/SpaceInput';
import { StyledLabel } from 'components/SpaceInput/styles';
import SpaceModal from 'components/SpaceModal';
import SpaceSelect from 'components/SpaceSelect';

import { User } from 'types';

import { StyledModalContent } from '../../ContactInformation/Modal/ModalState/styles';

type ModalEditProfileProps = {
  isOpen: boolean;
  cancel: () => void;
  user: User;
};

export default function ModalPersonalInfo({
  user,
  isOpen,
  cancel,
}: ModalEditProfileProps) {
  const [updatedUser, setUpdatedUser] = useState<User>({
    ...user,
  });

  const {
    reset,
    handleSubmit,
    control,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: 'onChange',
  });
  const dispatch = useAppDispatch();
  const { userUpdate } = userSlice.actions;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (e: any) => {
    e.preventDefault();
  };

  useEffect(() => {
    reset({}, { keepValues: true });
  }, [reset, user]);

  return (
    <SpaceModal isOpen={isOpen} cancel={cancel}>
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
              name="weight"
              defaultValue={user.weight}
              rules={{
                required: "This field can't be empty",
              }}
              render={({ field: { onChange: weightOnChange } }) => (
                <SpaceInput
                  label="Weight:"
                  className={`mb-5 ${errors.weight ? 'invalid' : ''}`}
                  defaultValue={user.weight}
                  onChange={(e) => {
                    setUpdatedUser({
                      ...updatedUser,
                      weight: e.target.value,
                    });
                    weightOnChange(e.target.value);
                  }}
                />
              )}
            />
            <span className="absolute right-6 top-[10px] opacity-70 text-md border-l border-solid border-gray-400 pl-3 py-1 min-w-[35px]">
              lbs
            </span>
            {errors.weight && (
              <span className="absolute bottom-1 text-[10px] left-5 text-red-500">
                {errors?.weight?.message?.toString()}
              </span>
            )}
          </div>

          <div className="relative">
            <Controller
              control={control}
              name="height"
              defaultValue={user.height}
              rules={{
                required: "This field can't be empty",
              }}
              render={({ field: { onChange: heightOnChange } }) => (
                <SpaceInput
                  label="Height:"
                  className={`mb-5 ${errors.height ? 'invalid' : ''}`}
                  defaultValue={user.height}
                  onChange={(e) => {
                    setUpdatedUser({
                      ...updatedUser,
                      height: e.target.value,
                    });
                    heightOnChange(e.target.value);
                  }}
                />
              )}
            />
            <span className="absolute right-6 top-[10px] opacity-70 text-md border-l border-solid border-gray-400 pl-3 py-1 min-w-[35px]">
              ft.in
            </span>
            {errors.height && (
              <span className="absolute bottom-1 text-[10px] left-5 text-red-500">
                {errors?.height?.message?.toString()}
              </span>
            )}
          </div>

          <div className="relative">
            <Controller
              control={control}
              name="age"
              defaultValue={user.age}
              rules={{
                required: "This field can't be empty",
              }}
              render={({ field: { onChange: ageOnChange } }) => (
                <SpaceInput
                  label="Age:"
                  className={`mb-5 ${errors.age ? 'invalid' : ''}`}
                  defaultValue={user.age}
                  onChange={(e) => {
                    setUpdatedUser({
                      ...updatedUser,
                      age: e.target.value,
                    });
                    ageOnChange(e.target.value);
                  }}
                />
              )}
            />
            <span className="absolute right-6 top-[10px] opacity-70 text-md border-l border-solid border-gray-400 pl-3 py-1 min-w-[35px]">
              y.o.
            </span>
            {errors.age && (
              <span className="absolute bottom-1 text-[10px] left-5 text-red-500">
                {errors?.age?.message?.toString()}
              </span>
            )}
          </div>

          <div className="relative">
            <StyledLabel
              className="relative flex items-center h-[51px]"
              style={{
                paddingRight: '10px',
              }}
            >
              <span className="block text-sm opacity-70 pe-3">Country:</span>
              <Controller
                control={control}
                name="country"
                defaultValue={user.country}
                rules={{
                  required: "This field can't be empty",
                }}
                render={({ field: { onChange: countryOnChange } }) => (
                  <SpaceSelect
                    transparent
                    className={`z-[1] bg-transparent flex-grow   ${
                      errors.country ? 'invalid' : ''
                    }`}
                    options={[
                      { value: 'USA', label: 'USA' },
                      { value: 'Canada', label: 'Canada' },
                      { value: 'Mexico', label: 'Mexico' },
                    ]}
                    onChange={(value) => {
                      setUpdatedUser({
                        ...updatedUser,
                        country: value,
                      });
                      countryOnChange(value);
                    }}
                    defaultValue={{ value: user.country, label: user.country }}
                  />
                )}
              />
              <div className="absolute h-full w-full rounded-full left-0 top-0" />
            </StyledLabel>

            {errors.country && (
              <span className="absolute bottom-1 text-[10px] left-5 text-red-500">
                {errors?.age?.message?.toString()}
              </span>
            )}
          </div>
        </StyledModalContent>

        <div className="w-full flex flex-col xl:flex-row items-center justify-center gap-3 mt-3">
          <SpaceButton
            className="w-full"
            onClick={() => {
              if (isValid) {
                dispatch(
                  userUpdate({
                    ...user,
                    weight: updatedUser.weight,
                    height: updatedUser.height,
                    age: updatedUser.age,
                    country: updatedUser.country,
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
    </SpaceModal>
  );
}
