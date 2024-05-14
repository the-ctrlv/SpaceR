import { themeSlice } from 'store/reducers/ThemeSlice';

import { useAppDispatch, useAppSelector } from 'hooks/store';

import iconDark from 'assets/icons/theme-dark.svg';
import iconLight from 'assets/icons/theme-light.svg';

import { StyledThemeSwitcher } from './styles';

export default function ThemeSwitcher() {
  const dispatch = useAppDispatch();
  const isLightTheme = useAppSelector((state) => state.theme.isLightTheme);
  const iconTheme = isLightTheme ? iconLight : iconDark;

  const { toggleTheme } = themeSlice.actions;
  return (
    <StyledThemeSwitcher
      className="switcher cursor-pointer rounded-full"
      onClick={() => {
        dispatch(toggleTheme());
        localStorage.setItem('currentTheme', isLightTheme ? 'dark' : 'light');
      }}
    >
      <div
        className={`switcher__circle rounded-full w-8 h-8 flex-center ${
          !isLightTheme && 'switched'
        }`}
      >
        <img src={iconTheme} alt="theme-icon" className="w-7/12 select-none" />
      </div>
    </StyledThemeSwitcher>
  );
}
