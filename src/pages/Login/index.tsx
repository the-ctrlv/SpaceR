import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import SpaceButton from 'components/SpaceButton';
import SpaceInput from 'components/SpaceInput';

import { StyledLogin } from './styles';

export default function Login() {
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

  return (
    <StyledLogin className="text-center max-w-[440px] w-full relative flex flex-col justify-start md:justify-center h-full px-5 pt-16 md:pt-0">
      <h1 className="text-[28px] font-semibold mb-4">Log in</h1>
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
        <div
          className="relative"
          style={{
            minHeight: '71px',
          }}
        >
          <Controller
            control={control}
            name="password"
            rules={{
              required: "This field can't be empty",
              minLength: {
                value: 8,
                message: 'password some error',
              },
            }}
            render={({ field: { onChange: passOnChange } }) => (
              <SpaceInput
                type="password"
                placeholder="Password"
                className={`mb-5 ${errors.password ? 'invalid' : ''}`}
                onChange={(e) => passOnChange(e.target.value)}
              />
            )}
          />
          {errors.password && (
            <span className="absolute bottom-1 text-[10px] left-5 text-red-500">
              {errors?.password?.message?.toString()}
            </span>
          )}
        </div>
        <SpaceButton noMaxWidth type="submit" className="w-full mb-12">
          Log in
        </SpaceButton>
      </form>
      <div className="absolute bottom-8 md:bottom-36 left-0 text-center w-full">
        <p className="mb-3">
          Forgot your password?{' '}
          <Link to="/reset-password" className="space-link">
            Reset
          </Link>
        </p>
        <p>
          Don’t have an account?{' '}
          <Link to="/sign-up" className="space-link">
            Sign up
          </Link>
        </p>
      </div>
    </StyledLogin>
  );
}
