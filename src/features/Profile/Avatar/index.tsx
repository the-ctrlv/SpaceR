import { useRef } from 'react';

import { userSlice } from 'store/reducers/UserSlice';

import { useAppDispatch } from 'hooks/store/useAppDispatch';
import { useAppSelector } from 'hooks/store/useAppSelector';

import { ReactComponent as EditGearIcon } from 'assets/icons/edit-gear.svg';

import { User } from 'types';

import { StyledAvatar } from './styles';

export default function Avatar({ user }: { user: User }) {
  const inputRef = useRef<HTMLInputElement>(null);

  const { isLightTheme } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();
  const { userUpdate } = userSlice.actions;
  return (
    <StyledAvatar
      $isLightTheme={isLightTheme}
      className="rounded-full h-[180px] w-[180px] absolute z-30 left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2"
    >
      <div
        className="avatar h-full w-full rounded-full"
        style={{
          background: `url(${user.avatar}) no-repeat center center / cover`,
        }}
      />
      <div
        className="icon-photo absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 h-10 w-10 rounded-full
        z-40 flex justify-center items-center cursor-pointer"
        onClick={() => inputRef.current?.click()}
      >
        <div className="color-wrapper h-full w-full absolute z-30 rounded-full" />
        <EditGearIcon className="relative z-50" />
        <input
          type="file"
          ref={inputRef}
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              const reader = new FileReader();
              reader.onload = (readerEvent) => {
                dispatch(
                  userUpdate({
                    ...user,
                    avatar: readerEvent.target?.result as string,
                  })
                );
              };
              reader.readAsDataURL(file);
            }
          }}
        />
      </div>
    </StyledAvatar>
  );
}
