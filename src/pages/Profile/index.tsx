import Avatar from 'features/Profile/Avatar';
import BackgroundImage from 'features/Profile/BackgroundImage';
import DownloadFilesButton from 'features/Profile/DownloadFilesButton';
import UploadFilesButton from 'features/Profile/UploadFilesButton';
import UserInfo from 'features/Profile/UserInfo';

import { useAppSelector } from 'hooks/store/useAppSelector';

import { StyledProfile } from './styles';

export default function Profile() {
  const user = useAppSelector((state) => state.user);
  return (
    <StyledProfile className="relative h-full z-10">
      <div className="relative">
        <BackgroundImage user={user} />
        <Avatar user={user} />
      </div>

      <UserInfo user={user} />
      <UploadFilesButton />
      <DownloadFilesButton />
    </StyledProfile>
  );
}
