import { useRef, useState } from 'react';
import { Tooltip } from 'react-tooltip';
import { useSlate } from 'slate-react';

import { useClickOutside } from 'hooks/custom/useClickOutside';
import { useWindowDimensions } from 'hooks/custom/useWindowDimensions';

import { CustomEditor, toolbarButtons } from '../helpers';

export default function Toolbar() {
  const editor = useSlate();
  const [isExpanded, setIsExpanded] = useState(false);

  const clickRef = useRef(null);

  useClickOutside(clickRef, () => isExpanded && setIsExpanded(false));

  const { isMobile } = useWindowDimensions();

  const actionButtons = toolbarButtons.map((button) => (
    <button
      key={button.format}
      type="button"
      className={`
    cursor-pointer h-10 min-w-[2.5rem] rounded-md px-2

      ${
        CustomEditor.isCurrentBlock(editor, button.format)
          ? 'ring-2 ring-[#4B5563]'
          : ''
      }
    `}
      onMouseDown={(event) => {
        event.preventDefault();
        CustomEditor.toggleCurrentBlock(editor, button.format);
      }}
    >
      {button.text}
    </button>
  ));

  return (
    <>
      {isMobile ? (
        <>
          <div
            className="h-10 w-10 bg-inside-content-overlay rounded-md flex items-center justify-center cursor-pointer font-bold text-base"
            ref={clickRef}
            data-tooltip-id="editorToolbar"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            Aa
          </div>
          <Tooltip
            noArrow
            isOpen={isExpanded}
            openOnClick
            id="editorToolbar"
            className="flex flex-col"
            clickable
            place="bottom"
          >
            {actionButtons}
          </Tooltip>
        </>
      ) : (
        <div>{actionButtons}</div>
      )}

      <button
        type="button"
        className={`
        cursor-pointer h-10 min-w-[2.5rem] rounded-md px-2 font-bold
        ${
          CustomEditor.isBoldMarkActive(editor)
            ? 'bg-gray-300'
            : 'bg-inside-content-overlay'
        }`}
        onMouseDown={(event) => {
          event.preventDefault();
          CustomEditor.toggleBoldMark(editor);
        }}
      >
        B
      </button>
      <button
        type="button"
        className={`
        cursor-pointer h-10 min-w-[2.5rem] rounded-md px-2 font-bold italic
        ${
          CustomEditor.isItalicMarkActive(editor)
            ? 'bg-gray-300'
            : 'bg-inside-content-overlay'
        }`}
        onMouseDown={(event) => {
          event.preventDefault();
          CustomEditor.toggleItalicMark(editor);
        }}
      >
        i
      </button>
    </>
  );
}
