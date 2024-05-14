import { useWindowDimensions } from 'hooks/custom/useWindowDimensions';

import FadeInWrapper from 'components/FadeInWrapper';

import IconLogoWithTitle from 'assets/icons/logo-with-title.svg';
import BGAuth from 'assets/images/auth-bg.jpg';

import { StyledAuthLayout } from './styles';

type AuthLayoutProps = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  const { pathname } = window.location;
  const { isMobile } = useWindowDimensions();
  return (
    <StyledAuthLayout
      id="authLayout"
      className="flex flex-col justify-end md:flex-row md:justify-start relative w-screen h-screen overflow-hidden"
    >
      <div className="h-[70vh] sm:h-[60vh] md:w-8/12 lg:w-6/12 md:h-full bg-white rounded-t-3xl md:rounded-r-3xl z-10 shadow-item content relative">
        {!isMobile && (
          <img
            src={IconLogoWithTitle}
            alt="Logo"
            className="w-32 h-32 absolute top-12 left-12"
          />
        )}
        <div className="flex items-center justify-center h-full w-full md:translate-y-[50px]">
          <FadeInWrapper animationKey={pathname}>{children}</FadeInWrapper>
        </div>
      </div>
      <div
        className="h-[50vh] w-full md:w-5/12 lg:w-7/12 md:h-full absolute top-0 right-0"
        style={{
          background: `url(${BGAuth}) center center/cover no-repeat`,
        }}
      />
    </StyledAuthLayout>
  );
}
