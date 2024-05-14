import { Link } from 'react-router-dom';

import SpaceButton from 'components/SpaceButton';

import { ReactComponent as IconComplete } from 'assets/icons/complete.svg';

export default function CompleteStep() {
  return (
    <div>
      <IconComplete className="mx-auto mb-5 h-24 w-24" />
      <h2 className="font-semibold mb-5">
        Your account has been created successfully
      </h2>

      <Link to="/login">
        <SpaceButton noMaxWidth type="button" className="w-full mb-12">
          Log in
        </SpaceButton>
      </Link>
    </div>
  );
}
