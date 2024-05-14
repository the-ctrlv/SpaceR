import { createGlobalStyle, css } from 'styled-components';
import { ifProp } from 'styled-tools';
import { Gradient, IThemeItem, colors } from 'styles/theme';

import { breakpoints, mqMin } from './responsive';

const colorsData: IThemeItem = colors;
const gradient: Gradient = colorsData.gradient as Gradient;
export const GlobalStyles = createGlobalStyle<{ $isLightTheme: boolean }>`
	body {
		background-color: ${({ theme }) => theme.layoutBG};
		color: ${({ theme }) => theme.themeTextColor};
		font-size: 14px;
		::-webkit-scrollbar {
			width: 4px;
		}
		::-webkit-scrollbar-track {
			background: ${({ theme }) => theme.scrollBarBG};
			border-radius: 10px;
			overflow: hidden;
		}
		::-webkit-scrollbar-thumb {
			background: rgba(0, 0, 0, 0.4);
			border-radius: 10px;
			overflow: hidden;
		}
		::-webkit-scrollbar-thumb:hover {
			background: #555;
		}
	}
	.list-disc, .list-decimal {
		span[data-slate-placeholder='true'] {
			left: 18px;
		}
	}
	.overflow-auto {
		overflow-x: hidden;
		&.no-scroll-bar {
			&::-webkit-scrollbar {
				display: none;
			}
		}
	}
	.react-tooltip {
		padding: 0;
		border-radius: 10px;
		z-index: 1100 !important;
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
		transition: opacity .5s ease-in-out, visibility .5s ease-out !important;
		&-arrow {
			z-index: -1;
		}
	}
	.space-link {
		font-weight: 600;
		display: inline-block;
		cursor: pointer;
    color: ${colors.spaceBlue};
		letter-spacing: 0.2px;
    text-decoration: none;
		&:hover {
			text-decoration: underline;
			color: ${colors.spaceBlue};
		}
	}
	textarea {
		border: 1px solid transparent;
		&:focus {
			outline: none;
			border: 1px solid ${colors.spaceBlue};
		}
	}
	.icon-fill-colored {
		path {
			fill: ${({ theme }) => theme.themeTextColor};
		}
	}
	.text-colored {
		color: ${({ theme }) => theme.themeTextColor};
	}
	.icon-stroke-colored {
		path {
			stroke: ${({ theme }) => theme.themeTextColor};
		}
	}
	.nav-bar-content {
		${ifProp(
      { $isLightTheme: false },
      css`
        background: rgba(0, 0, 0, 0.5);
      `
    )}
	}
	
	.arrow-icon {
		path {
      stroke: ${({ theme }) => theme.themeTextColor};
    }
	}

	.mobile-component-enter {
		transform: translateX(100%);
	}
	.mobile-component-enter-active {
		transform: translateX(0%);
		transition: all ease-in-out 200ms;
	}
	.mobile-component-enter-done {
		transform: translateX(0%);
	}
	.mobile-component-exit-done {
		transform: translateX(0%);
	}
	.mobile-component-exit-active {
		transform: translateX(100%);
		transition: all ease-in-out 200ms;
	}
	.fade-enter{
		opacity: 0;
	}
	.fade-exit{
		opacity: 1;
	}
	.fade-enter-active{
		opacity: 1;
	}
	.fade-exit-active{
		opacity: 0;
	}
	.fade-enter-active,
	.fade-exit-active {
		transition: opacity 500ms ease-in-out;
	}
	.dashboard-content-wrapper {
		height: calc(100vh - 180px);
		overflow-y: auto;
		padding-bottom: 80px;
		@media ${mqMin(breakpoints.xl)} {
			height: auto;
			padding-bottom: 0;
			&.no-scroll {
				overflow-y: hidden;
			}
		}
	}
	.bg-content-overlay {
		background: ${({ theme }) => theme.contentOverlay};
	}
	.bg-inside-content-overlay {
		background: ${({ theme }) => theme.insideContentOverlay};
	}
	.bg-layout {
		background: ${({ theme }) => theme.layoutBG};
	}
	.bg-card {
		background: ${({ theme }) => theme.cardBG};
	}
	.bg-overlay-on-white {
		background: ${({ theme }) => theme.overlayOnWhiteBG};
	}
	.card {
		position: relative;
		border-radius: 16px;
		box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
		background: ${({ theme }) => theme.cardBG};
		padding: 16px;
	}

	.icon-stroke-white {
		path {
			stroke: #fff;
		}
	}
	.tooltip-wrapper-box {
		svg {
			transform: scale(1);
			transition: all 0.2s ease-in-out;
			cursor: pointer;
			path {
				&:nth-child(1) {
					fill: ${({ theme }) => theme.themeTextColor};
				}
				&:nth-child(2) {
					fill: ${({ theme }) => theme.layoutBG};
				}
			}
			&:hover {
				transform: scale(1.4);
			}
		}
	}
	.shadow-item {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
	.bg-space-gradient {
		background: ${gradient.blue};
	}
	.bg-space-blue {
		background: ${colors.spaceBlue};
	}
	.tooltip-container {
		color: ${({ theme }) => theme.themeTextColor};
		max-width: 270px;
		header {
			background: ${gradient.blue};
			color: #fff;
			padding: 24px 20px;
			border-radius: 10px 10px 0 0;
		}
		div {
			padding: 24px 20px;
			border-radius: 0 0 10px 10px;
		}
	}
	.text-truncate-multiline {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;

		&-3 {
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		&-4 {
			display: -webkit-box;
			-webkit-line-clamp: 4;
			-webkit-box-orient: vertical;
			overflow: hidden;
			text-overflow: ellipsis;
			word-break: break-all;
		}
	}
	.flex-center {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
