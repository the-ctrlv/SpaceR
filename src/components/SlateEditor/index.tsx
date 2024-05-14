import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { createEditor } from 'slate';
import { Editable, Slate, withReact } from 'slate-react';

import Toolbar from './Toolbar';
import { RenderElementProps, RenderLeafProps } from './types';

export default function SlateEditor({
  initialText,
  setNoteText,
  isReadOnly,
}: {
  initialText?: string;
  setNoteText: (text: string) => void;
  isReadOnly?: boolean;
}) {
  const [editor] = useState(() => withReact(createEditor()));
  const [isDOMReady, setIsDOMReady] = useState(false);
  const initialValue = [
    {
      type: 'paragraph',
      children: [{ text: '' }],
    },
  ];
  useEffect(() => {
    setIsDOMReady(true);
  }, [isDOMReady]);

  const renderElement = useCallback(
    ({ children, element }: RenderElementProps) => {
      switch (element.type) {
        case 'headingOne':
          return (
            <h1 className="text-[20px] lg:text-xxl relative">{children}</h1>
          );
        case 'headingTwo':
          return <h2 className="text-[18px] relative">{children}</h2>;
        case 'headingThree':
          return <h3 className="text-[16px] relative">{children}</h3>;
        case 'numberedList':
          return <li className="list-decimal relative">{children}</li>;
        case 'bulletedList':
          return <li className="list-disc relative">{children}</li>;
        default:
          return <p className="text-[14px] relative">{children}</p>;
      }
    },
    []
  );

  const renderLeaf = useCallback((props: RenderLeafProps) => {
    const { children, attributes, leaf } = props;
    return (
      <span
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...attributes}
        style={{
          fontWeight: leaf.bold ? 'bold' : 'normal',
          fontStyle: leaf.italic ? 'italic' : 'normal',
        }}
      >
        {children}
      </span>
    );
  }, []);

  return (
    <Slate
      editor={editor}
      initialValue={initialText ? JSON.parse(initialText) : initialValue}
      onChange={(e) => {
        setNoteText(JSON.stringify(e));
      }}
    >
      {isDOMReady &&
        !isReadOnly &&
        createPortal(
          <Toolbar />,
          document.querySelector('.note-actions') as HTMLDivElement
        )}

      <Editable
        readOnly={isReadOnly}
        className="w-full outline-0 bg-inside-content-overlay rounded-xl p-4"
        style={{
          minHeight: '150px',
        }}
        autoFocus
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        placeholder="Start typing here..."
        spellCheck
        onKeyDown={(event) => {
          switch (event.key) {
            case 'Tab': {
              event.preventDefault();
              editor.insertText('    ');
              break;
            }
            default:
              break;
          }
        }}
      />
    </Slate>
  );
}
