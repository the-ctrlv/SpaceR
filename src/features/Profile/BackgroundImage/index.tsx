import { useRef } from 'react';

import { userSlice } from 'store/reducers/UserSlice';

import { useWindowDimensions } from 'hooks/custom/useWindowDimensions';
import { useAppDispatch } from 'hooks/store';

import SpaceTooltip from 'components/SpaceTooltip';

import { ReactComponent as EditGearIcon } from 'assets/icons/edit-gear.svg';

import { User } from 'types';

import { StyledBackgroundImage } from './styles';

export default function BackgroundImage({ user }: { user: User }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const { userUpdate } = userSlice.actions;
  const { isTablet } = useWindowDimensions();
  return (
    <StyledBackgroundImage
      className="w-full h-56 shadow-lg relative rounded-b-2xl xl:rounded-2xl"
      style={{
        background: `url(${user.bgImage}) center center / cover no-repeat`,
      }}
    >
      {isTablet && (
        <div className="w-full flex justify-between items-center p-4">
          <div className="rounded-full backdrop-blur-xl p-1 flex items-center">
            <SpaceTooltip
              variant="message-filled"
              id="header-message"
              className="p-2"
              offset={20}
            >
              <div className="flex flex-col cursor-pointer">smth</div>
            </SpaceTooltip>
          </div>

          <div className="rounded-full backdrop-blur-xl p-1 flex items-center">
            <SpaceTooltip
              variant="info"
              id="mobile-header-notification"
              className="p-2"
              offset={20}
            >
              <div className="p-4">mobile</div>
            </SpaceTooltip>
          </div>
        </div>
      )}

      <div
        className="gear-wrapper absolute right-4  bottom-4 xl:top-4 cursor-pointer overflow-hidden"
        onClick={() => inputRef.current?.click()}
      >
        <div className="rounded-full backdrop-blur-xl p-3 flex items-center">
          <div>
            <EditGearIcon />
          </div>
          <span className="block font-semibold text-sm text-white absolute whitespace-nowrap left-12">
            Change background
          </span>
          <input
            ref={inputRef}
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = (readerEvent: ProgressEvent<FileReader>) => {
                  dispatch(
                    userUpdate({
                      ...user,
                      bgImage: readerEvent.target?.result as string,
                    })
                  );
                };
                reader.readAsDataURL(file);
              }
            }}
          />
        </div>
      </div>
    </StyledBackgroundImage>
  );
}
