import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import FadeInWrapper from 'components/FadeInWrapper';
import SpaceButton from 'components/SpaceButton';
import SpaceInput from 'components/SpaceInput';

import { StyledResetPassword } from './styles';

export default function ResetPassword() {
  const [isLinkResent, setIsLinkResent] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  // temporary add any type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (e: any) => {
    e.preventDefault();
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (isLinkResent) {
      const timer = setTimeout(() => {
        setIsLinkResent(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isLinkResent]);
  return (
    <StyledResetPassword className="text-center max-w-[440px] w-full relative flex flex-col justify-start md:justify-center h-full px-5 pt-16 md:pt-0">
      <h1 className="text-[28px] font-semibold mb-4">Reset your password</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="min-h-[250px]">
        <div className="relative">
          <Controller
            control={control}
            name="email"
            defaultValue=""
            rules={{
              required: "This field can't be empty",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Please enter a valid email address',
              },
            }}
            render={({ field: { onChange: emailOnChange } }) => (
              <SpaceInput
                className={`mb-5 w-full ${errors.email ? 'invalid' : ''}`}
                defaultValue=""
                placeholder="E-mail"
                onChange={(e) => {
                  emailOnChange(e.target.value);
                }}
              />
            )}
          />
          {errors.email && (
            <span className="absolute bottom-1 text-[10px] left-5 text-red-500">
              {errors?.email?.message?.toString()}
            </span>
          )}
        </div>
        <SpaceButton noMaxWidth type="submit" className="w-full mb-12">
          Recover account
        </SpaceButton>
      </form>
      <div className="absolute bottom-8 md:bottom-36 left-0 text-center w-full">
        <div className="relative inline-flex">
          <p>
            Didn’t get the email?{' '}
            <Link
              to="/reset-password"
              className={`space-link ${
                isLinkResent ? 'pointer-events-none' : ''
              }`}
              onClick={() => setIsLinkResent(true)}
            >
              Resend
            </Link>
          </p>
          <FadeInWrapper animationKey={isLinkResent ? 'resent' : 'not-resent'}>
            <div className="absolute top-0 -right-10">
              {isLinkResent && <span className="font-medium">Sent!</span>}
            </div>
          </FadeInWrapper>
        </div>
      </div>
    </StyledResetPassword>
  );
}
