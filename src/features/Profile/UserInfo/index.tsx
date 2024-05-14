import { User } from 'types';

import ContactInformation from './ContactInformation';
import PersonalInformation from './PersonalInformation';
import { StyledUserInfo } from './styles';

export default function UserInfo({ user }: { user: User }) {
  return (
    <StyledUserInfo className="mx-auto px-4 md:p-0 max-w-lg xl:max-w-sm text-center mt-32">
      <h1 className="text-2xl font-bold mb-5">{user.username}</h1>
      <ContactInformation user={user} />
      <PersonalInformation user={user} />
    </StyledUserInfo>
  );
}
